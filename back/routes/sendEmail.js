var express = require("express");
const User = require("../models/User");

var router = express.Router();
router.post("/", async (req, res, next) => {
  const { username, password, email } = req.params;
  function sendEmail() {
    email
      .send({
        Host: "smtp.gmail.com",
        Username: User.findOne({ username: username }),
        Password: User.findOne({ password: password }),
        To: User.findOne({ email: email }),
        From: "clncoders@gmail.com",
        Subject: "Hola",
        Body: "<email body>",
      })
      .then((message) => alert("mail sent successfully"));
  }
});
