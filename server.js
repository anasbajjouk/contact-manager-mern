const express = require("express");
const { json } = require("express");

const app = express();
app.use(json());

app.get("/", (req, res, next) => {
  res.json({msg: "hello everyone"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server started at:", PORT));
