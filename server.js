const express = require("express");
const connectDB = require("./config/db");

//Routes
const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const contactsRoutes = require("./routes/contacts");

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json());

//TEST
app.get("/", (req, res, next) => {
  res.json({ msg: "hello everyone" });
});

//Define routes
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server started at:", PORT));
