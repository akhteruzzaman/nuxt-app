const path = require("path");
const fs = require("fs");
const { MOCKS } = require("./config");

/**
 * Gets the file path for the mock data
 */
const getDataPath = (method, url) => {
  const sanitizedUrl = url.replace(/^\/api\//, "").replace(/\?.*$/, ""); // Remove '/api/' prefix and query parameters
  return path.join(__dirname, "data", method, `${sanitizedUrl}.json`);
};

/**
 * Checks if the URL is mocked
 */
const isMockedData = (method, url) => MOCKS[method]?.includes(url) || false;

/**
 * Sets common response headers
 */
const setResponseHeaders = (req, res) => {
  // Set any response headers that were in the request (if needed)
  if (req.headers["content-type"]) {
    res.setHeader("Content-Type", req.headers["content-type"]);
  }

  // Set additional headers for CORS if they exist in the request
  if (req.headers["access-control-request-headers"]) {
    res.setHeader("Access-Control-Allow-Headers", req.headers["access-control-request-headers"]);
  }

  // Default headers for all responses
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
};

/**
 * Serves mock data from file
 */
const serveMockData = (filePath, req, res) => {
  if (fs.existsSync(filePath)) {
    try {
      const rawData = fs.readFileSync(filePath);
      const data = JSON.parse(rawData);

      setResponseHeaders(req, res);
      res.status(200).json(data);
      return true;
    } catch (error) {
      console.error(`Error reading or parsing mock data: ${error.message}`);
      res.status(500).json({ error: "Error serving mock data" });
    }
  } else {
    console.error(`Mock data file not found: ${filePath}`);
    res.status(404).json({ error: "Mock data file not found", path: filePath });
  }
  return false;
};

module.exports = {
  getDataPath,
  isMockedData,
  setResponseHeaders,
  serveMockData,
};
