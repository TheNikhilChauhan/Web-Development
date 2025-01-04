const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
const jwtPassword = "fjklarj";

const ALL_USERS = [
  {
    email: "harvey@gmail.com",
    password: "Harvey",
    name: "harvey",
  },
  {
    email: "louis@gmail.com",
    password: "Louis",
    name: "louis",
  },
  {
    email: "mike@gmail.com",
    password: "Mike",
    name: "mike",
  },
];

function userExists(email, password) {
  const exists = ALL_USERS.some(
    (user) => user.email === email && user.password === password
  );
  if (exists) {
    return true;
  }
  return false;
}

app.post("/signin", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  if (!userExists(email, password)) {
    return res.status(403).json({
      msg: "User doesn't exists in our in-memory db",
    });
  }

  var token = jwt.sign({ email: email }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decode = jwt.verify(token, jwtPassword);
    const email = decode.email;
    res.json({
      users: ALL_USERS.filter(function (value) {
        if (value.email == email) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Invalid token",
    });
  }
});

app.listen(4000);
