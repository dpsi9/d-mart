require("dotenv").config();

const express = require("express");
const monoose = require("mongoose");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const homeRoutes = require("./controllers/home");
const categories = require("./controllers/allCategories");
const productController = require("./controllers/product.controller");
const userController = require("./controllers/user.controller");
const { register, login } = require("./controllers/auth.controller");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.set("view engine", "ejs"), app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

monoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("", homeRoutes);
app.get("/register", async (req, res) => {
  res.render("signup");
});
app.post("/register", register);

app.get("/login", async (req, res) => {
  res.render("signin");
});
app.post("/login", login);

app.use("/categories", categories);
app.use("/users", userController);
app.use("/products", productController);

app.get("/payment", (req, res) => {
  try {
    res.render("payment");
  } catch (error) {
    console.log(error);
  }
});

app.get("/gateway", (req, res) => {
  try {
    res.render("gateway");
  } catch (error) {
    console.log(error);
  }
});

app.get("/otp", (req, res) => {
  try {
    res.render("otp");
  } catch (error) {
    console.log(error);
  }
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started port ${port}`);
});
