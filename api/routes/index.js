const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/login", (req, res, next) => {
  res.render("login", { title: "Sign in" });
});

// router.post("/admin", (req, res, next) => {
//   console.log(req.body);

//   res.redirect("/admin");
// });

module.exports = router;
