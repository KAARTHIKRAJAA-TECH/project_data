const jsonServer = require("json-server"); // Import json-server library
const server = jsonServer.create(); // Create a server
const router = jsonServer.router("db.json"); // Load routes from db.json
const middlewares = jsonServer.defaults(); // Default middlewares
const port = process.env.PORT || 8080; // Choose port

server.use(middlewares);
server.use(router);

// Start the server
server.listen(port, () => {
  console.log(`✅ JSON Server is running on port ${port}`);
});
