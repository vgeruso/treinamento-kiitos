const express = require("express");
const routes = require("./app/routes");

class App {
  constructor() {
    this.app = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api", routes);
  }
}

module.exports = new App().app;
