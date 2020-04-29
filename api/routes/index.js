const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/admin", (req, res, next) => {
  res.render("admin", { title: "Admin" });
});

module.exports = router;
