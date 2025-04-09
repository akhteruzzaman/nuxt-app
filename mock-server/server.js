const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { MOCKS } = require("./config");
const app = express();
const port = 3003;

// Enable CORS for all routes
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

// Helper functions
const getDataPath = (method, url) => {
  const sanitizedUrl = url.replace(/^\/api\//, "").replace(/\?.*$/, ""); // Remove '/api/' prefix and query parameters
  return path.join(__dirname, "data", method, `${sanitizedUrl}.json`);
};

// POST method to filter data from data/contact
app.post("/api/filter", express.json(), (req, res) => {
  const params = req.body; // Expecting JSON body with filter parameters
  const filePath = path.join(__dirname, "data/GET", "contact.json");

  console.log("Filter parameters:", params);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Contact data file not found" });
  }

  try {
    const rawData = fs.readFileSync(filePath);
    const data = JSON.parse(rawData);

    // Filter data based on provided parameters
    const filteredData = data.filter((item) =>
      Object.keys(params).every((key) => {
        if (key === "name") {
          // Check full_name field for partial match
          const itemName = item.full_name || "";
          return itemName.toLowerCase().includes(params[key].toLowerCase());
        }
        if (key === "email") {
          // Check email_address field for partial match
          const itemEmail = item.email_address || "";
          return itemEmail.toLowerCase().includes(params[key].toLowerCase());
        }
        if (key === "isActive") {
          // Boolean comparison with is_active field
          return item.is_active === params[key];
        }
        // Map parameter keys to actual data fields
        const fieldMap = {
          contactId: "contact_id",
          phoneNumber: "phone_number",
        };

        // Use mapped field name or original key
        const fieldName = fieldMap[key] || key;

        // Case-insensitive partial match for strings, exact match for other types
        if (typeof item[fieldName] === "string" && typeof params[key] === "string") {
          return item[fieldName].toLowerCase().includes(params[key].toLowerCase());
        }

        // Exact match for other field types
        return item[fieldName] === params[key];
      })
    );
    console.log("Filtered data:", filteredData);

    res.status(200).json(filteredData);
  } catch (error) {
    console.error(`Error reading or filtering contact data: ${error.message}`);
    res.status(500).json({ error: "Error processing contact data" });
  }
});

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
