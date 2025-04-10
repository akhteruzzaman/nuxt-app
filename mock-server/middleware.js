const { getDataPath, isMockedData, serveMockData } = require("./utils");

// Middleware to handle dynamic requests
const mockRequestHandler = (req, res) => {
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
    return serveMockData(filePath, req, res);
  }
  // Check without query parameters as a fallback
  else if (queryString && isMockedData(method, apiPath)) {
    console.log(`Found match without query parameters: ${apiPath}`);
    // Use file path without query parameters
    const fallbackPath = getDataPath(method, `/api/${apiPath}`);
    return serveMockData(fallbackPath, req, res);
  } else {
    console.error(`URL not mocked: ${mockUrl}`);
    res.status(404).json({ error: "Not Found", url: mockUrl });
    return false;
  }
};

module.exports = mockRequestHandler;
