const express = require("express");
const z = require("zod");
const app = express();

const schema = z.array(z.number());

app.use(express.json());

function validateInput(obj) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
  console.log(obj);
  const response = schema.safeParse(obj);
  console.log(response);
}

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;

  const response = schema.safeParse(kidneys);

  if (!response.success) {
    res.status(401).json({
      msg: "input is invalid",
    });
  } else {
    res.send({ response });
  }
});

app.post("/login", function (req, res) {
  const response = validateInput(req.body);
  if (!response.success) {
    res.json({
      msg: "Your inputs are invalid",
    });
    return response;
  }
});

//global catches

app.use(function (err, req, res, next) {
  res.json({
    msg: "Sorry something is up with our server",
  });
});

app.listen(4000);
