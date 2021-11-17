const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/login_register_server", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));
//userSchema

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//Routes
app.get("/", (req, res) => {
  res.send("MyApi");
});

//login method
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: " Login Successfully", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send("User not registered....");
    }
  });
});

//register method
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (error, user) => {
    if (user) {
      res.send({ message: "User already registered..." });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((error) => {
        if (error) {
          res.send(error);
        } else {
          res.send({ message: "User Successfully Registered..." });
        }
      });
    }
  });
});

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
