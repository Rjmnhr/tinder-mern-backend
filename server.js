import express from "express";
import mongoose from "mongoose";
import { User } from "./models/user.js";
import Cors from "cors";

//App config
const app = express();
const port = process.env.PORT || 8001;
const CONNECT_URL =
  "mongodb+srv://rj_mnhr:renjith@cluster0.oy1zhmu.mongodb.net/TinderUsers";

//Middleware
app.use(Cors());
app.use(express.json());

//DB Config
mongoose
  .connect(CONNECT_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

//API Endpoints

//register
app.post("/api/register", (req, res) => {
  const { name, email, age, img_URL } = req.body;
  const user = new User({ name, email, age, img_URL });
  user
    .save()
    .then(() => res.status(201).send(user))
    .catch((e) => res.status(400).send(e));
});

app.get("/api/users", (req, res) => {
  User.find()
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send(err));
});

//Listener

app.listen(port, () => console.log(`Server is up on ${port}`));
