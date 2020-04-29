const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/login", (req, res, next) => {
  res.render("login", { title: "Sign in" });
});

router.post("/login", (req, res, next) => {
  console.log(req.body);

  res.redirect("/login");
});

module.exports = router;
