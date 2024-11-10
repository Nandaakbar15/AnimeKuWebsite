const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");
const router = require("./routes/route");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const apiRouter = require("./api/routeApi");

// set up the view engine
app.set("view engine", "ejs");

app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// connect to the db
require("./config/db");

// cookie parser
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// untuk membaca data json
app.use(express.json());

// method override
app.use(methodOverride("_method"));

// flash message
app.use(flash());

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

// api route
app.use(apiRouter);

// route
app.use(router);
