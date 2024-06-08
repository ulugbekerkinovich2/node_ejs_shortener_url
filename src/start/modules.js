const fileUpload = require("express-fileupload");
const cors = require("cors");
const authRoute = require("../routes/аuth.route");
const usersRoute = require("../routes/users.route");
const todoRoute = require("../routes/todo.route");
const indexRoute = require("../routes/index.route");
const isAuthMiddleware = require("../middlewares/is-auth.middleware");
const path = require("path");
const modules = (app, express) => {
  app.use(cors());
  app.use(fileUpload());
  app.set("view engine", "ejs");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.static(`${process.cwd()}/public`));
  app.use(express.static(`${process.cwd()}/images`));
  app.use("/api/auth", authRoute);
  app.use("/api/users", usersRoute);
  app.use("/api/todos", todoRoute);
  app.use("/", indexRoute);
};

module.exports = modules;
