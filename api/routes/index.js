const express = require("express");
const router = express.Router();

const login = "admin";
const password = 123;

router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/login", (req, res, next) => {
  res.render("login", { title: "Sign in" });
});

router.post("/login", (req, res, next) => {
  const body = req.body;
  if (body.login === login && body.password === password) {
    res.redirect("/admin");
    console.log("login do admina");
  } else {
    res.redirect("/login");
    console.log(DUPA);
  }
});

module.exports = router;
