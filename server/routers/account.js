const express = require("express");
const router = express.Router();
const AccountModel = require("../models/account");

// get all account
router.get("/", (req, res, next) => {
  AccountModel.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json("loi server");
    });
});

// add new account
router.post("/", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  AccountModel.findOne({
    username: username,
  })
    .then((data) => {
      if (data) {
        return res.json("Username existed!");
      } else {
        return AccountModel.create({
          username: username,
          password: password,
        }).then((data) => res.json("Successful add new account!"));
      }
    })
    .catch((err) => res.json("Happened error from server!"));
});

// update account
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const newPassword = req.body.newPassword;

  console.log(id);

  AccountModel.findByIdAndUpdate(id, {
    password: newPassword,
  })
    .then((data) => {
      console.log(newPassword);
      res.json("Succesful update new password!");
    })
    .catch((err) => res.json("Change password fail!"));
});

// delete account
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  AccountModel.deleteOne({
    _id: id,
  })
    .then((data) => res.json("Deleted account!"))
    .catch((err) => res.json("Error from server!"));
});

module.exports = router;
