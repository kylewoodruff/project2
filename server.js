require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
// eslint-disable-next-line no-unused-vars
var passport = require("passport");
require("./config/passport-setup");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
var db = require("./models");
var app = express();
var port = process.env.PORT || 3000;
// eslint-disable-next-line no-unused-vars
const emailJob = require("./cronjobs/cronjobs");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(port, function() {
    console.log("Listening on port" + port);
  });
});

// Cron job
// emailJob();

module.exports = app;
