const LocalStrategy = require("passport-local").Strategy;
const { pool } = require("./dbconfig");
const bcrypt = require("bcrypt");

function initialize(passport) {
  const authenticateUser = (email, passport, done) => {};

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      authenticateUser
    )
  );
}
