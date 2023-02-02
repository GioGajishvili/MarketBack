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
  const { username, email, passwordHash, test, testString } = req.body;
  const user = new User({
    username: username,
    email: email,
    passwordHash: passwordHash,
    test: test,
    testString: testString,
  });

  user.save();

  return res.json(req.body);
};
