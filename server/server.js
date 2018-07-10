// server.js
const jsonServer = require("json-server");
const express = require("express");
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${
        worker.process.pid
      } exited: code ${code}, signal ${signal}`
    );
  });
} else {
  if (process.env.NODE_ENV === "production") {
    server.use(express.static("client/build"));
  }
  server.use(middlewares);
  server.use("/api", router);

  if (process.env.NODE_ENV === "production") {
    server.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
    });
  }

  server.listen(port, () => {
    console.log(
      `Node cluster worker ${process.pid}: listening on port ${port}`
    );
  });
}
