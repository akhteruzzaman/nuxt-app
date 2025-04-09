const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3003;

// Mock configuration
const MOCKS = {
  GET: ["portfolio/businesses/11105", "portfolio/businesses/12388"],
  POST: [],
  PUT: [],
  PATCH: [],
  DELETE: [],
};

// Helper functions
const getDataPath = (method, url) => {
  const sanitizedUrl = url.replace(/^\/api\//, "").replace(/\?.*$/, ""); // Remove '/api/' prefix and query parameters
  return path.join(__dirname, "data", method, `${sanitizedUrl}.json`);
};

const isMockedData = (method, url) => MOCKS[method]?.includes(url) || false;

// Middleware to handle dynamic requests
app.use((req, res) => {
  const method = req.method;
  // Remove /api/ prefix for matching with MOCKS
  const apiPath = req.path.replace(/^\/api\//, "");

  // Only add query string if there are actual query parameters
  const queryParams = new URLSearchParams(req.query).toString();
  const queryString = queryParams.length > 0 ? `?${queryParams}` : "";

  const mockUrl = apiPath + queryString;
  const filePath = getDataPath(method, req.path);

  console.log(`Request Method: ${method}`);
  console.log(`Original URL: ${req.path}`);
  console.log(`Mock URL for matching: ${mockUrl}`);
  console.log(`Resolved File Path: ${filePath}`);
  console.log(`Request Headers:`, req.headers);

  // Check exact match first
  if (isMockedData(method, mockUrl)) {
    if (fs.existsSync(filePath)) {
      try {
        const rawData = fs.readFileSync(filePath);
        const data = JSON.parse(rawData);

        // Set any response headers that were in the request (if needed)
        if (req.headers["content-type"]) {
          res.setHeader("Content-Type", req.headers["content-type"]);
        }

        // Set additional headers for CORS if they exist in the request
        if (req.headers["access-control-request-headers"]) {
          res.setHeader(
            "Access-Control-Allow-Headers",
            req.headers["access-control-request-headers"]
          );
        }

        // Default headers for all responses
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");

        res.status(200).json(data);
      } catch (error) {
        console.error(`Error reading or parsing mock data: ${error.message}`);
        res.status(500).json({ error: "Error serving mock data" });
      }
    } else {
      console.error(`Mock data file not found: ${filePath}`);
      res.status(404).json({ error: "Mock data file not found", path: filePath });
    }
  }
  // Check without query parameters as a fallback
  else if (queryString && isMockedData(method, apiPath)) {
    console.log(`Found match without query parameters: ${apiPath}`);
    // Use file path without query parameters
    const fallbackPath = getDataPath(method, `/api/${apiPath}`);

    if (fs.existsSync(fallbackPath)) {
      try {
        const rawData = fs.readFileSync(fallbackPath);
        const data = JSON.parse(rawData);

        // Set any response headers that were in the request (if needed)
        if (req.headers["content-type"]) {
          res.setHeader("Content-Type", req.headers["content-type"]);
        }

        // Set additional headers for CORS if they exist in the request
        if (req.headers["access-control-request-headers"]) {
          res.setHeader(
            "Access-Control-Allow-Headers",
            req.headers["access-control-request-headers"]
          );
        }

        // Default headers for all responses
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");

        res.status(200).json(data);
      } catch (error) {
        console.error(`Error reading or parsing mock data: ${error.message}`);
        res.status(500).json({ error: "Error serving mock data" });
      }
    } else {
      console.error(`Mock data file not found: ${fallbackPath}`);
      res.status(404).json({ error: "Mock data file not found", path: fallbackPath });
    }
  } else {
    console.error(`URL not mocked: ${mockUrl}`);
    res.status(404).json({ error: "Not Found", url: mockUrl });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Mock server running on http://localhost:${port}`);
});
