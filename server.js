const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const apiRoutes = require("./routes/api.js");

const PORT = process.env.PORT || 3001;


const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifideTopology: true
});

// routes
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`On behalf of the staff of the Independent ${PORT} Motel, I wish you all sweet dreams.`);
});