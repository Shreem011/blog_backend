const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const cors = require("cors");

const uri =
  "mongodb+srv://shreem:aryal@cluster1.eqg0tpe.mongodb.net/firstdatabase?retryWrites=true&w=majority";
dotenv.config();

app.use(cors());

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello, this is the homepage!");
});
app.use(express.json());

// Routes
const postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log("backend is running");
});
