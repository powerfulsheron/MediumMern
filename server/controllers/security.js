const createToken = require("../lib/auth").createToken;
const User = require("../models/user.js");

module.exports = {
  login: (req, res) => {
    User.login(req.body.email, req.body.password)
      .then(user => {
        const token = createToken(user);
        res.status(201).send({ token });
      })
      .catch(err => {
        res.status(400).send({
          error: "Invalid username/password " + err
        });
      });
  },

  register: (req, res) => {
    const user = new User(req.body);
    user
      .register()
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => {
        res.status(400).send({
          error: "Invalid username/password " + err
        });
      });
  }
};
