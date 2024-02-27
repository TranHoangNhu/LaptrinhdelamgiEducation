const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const AccountModel = require("./models/account");
const accountRouter = require("./routers/account");
const port = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000", // Cho phép các request đến từ địa chỉ này
};

app.use(cors(corsOptions));

// endpoint:register account
app.post("/register", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  AccountModel.findOne({
    username: username,
  })
    .then((data) => {
      if (data) {
        return res.json("user nay da ton tai");
      } else {
        return AccountModel.create({
          username: username,
          password: password,
        }).then((data) => {
          res.json("tao tai khoan thanh cong !");
        });
      }
    })
    .catch((err) => {
      res.status(500).json("tao tai khoan that bai !");
    });
});

// endpoint:login account
app.post("/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  AccountModel.findOne({
    username: username,
    password: password,
  })
    .then((data) => {
      if (data) {
        const token = jwt.sign(
          {
            _id: data._id,
          },
          "secret"
        );
        res.json({
          notice: "thanh cong",
          token: token,
        });
      } else {
        return res.status(300).json(data);
      }
    })
    .catch((err) => {
      res.status(500).json("co loi ben server !");
      return;
    });
});

app.use("/api/account/", accountRouter); // cái này ko biết sao ko import được biến accountRouter

app.get("/user", (req, res, next) => {
  AccountModel.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
