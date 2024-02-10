const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("profile.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

// Bind the router db to the app
// server.profile = router.profile;

server.use(middlewares);
server.use(router);

server.listen(port);
