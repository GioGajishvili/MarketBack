const { User } = require("./User");

exports.get = (req, res) => {
  console.log(req.query);
  User.find({ ...req.qeury, isEnabled: true }, (err, get) => {
    if (get) {
      return res.json(get);
    } else {
      return res.status(404).send({ message: "not found!" });
    }
  });
};

exports.post = (req, res) => {
  const { firstName, lastName, email, passwordHash } = req.body;
  const user = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    passwordHash: passwordHash,
  });

  user.save();

  return res.json(req.body);
};
