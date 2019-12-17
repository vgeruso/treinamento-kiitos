const express = require("express");
const routes = express.Router();

routes.get("/kiitos", (req, res) => {
  return res.json({ msg: "Nos somos a Kiitos!" });
});

module.exports = routes;
