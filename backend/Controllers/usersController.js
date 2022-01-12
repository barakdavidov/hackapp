const userQueries = require("../queries/userQueries");

exports.login = (req, res) => {
  try {
    const token = req.token;
    res.send({
      token: token,
      userInfo: req.body.user,
      message: "Login Success!",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

exports.signUpUser = async (req, res) => {
  try {
    const { email, bio, password, firstName, lastName, phoneNumber, verifyPassword } =
      req.body;
    const userId = uuidv4();
    await userQueries.signUpUserQuery(
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      userId,
      bio,
      verifyPassword
    );
    res.send("Register Successfully!");
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

exports.updateUserPassword = async (req, res) => {
  try {
    const { newPassword, newVerifyPassword } = req.body;
    const { userId } = req.user;
    await userQueries.updateUserPasswordQuery(
      newPassword,
      newVerifyPassword, userId
    );
    res.send("Updated Password Successfully!");
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const { email, firstName, lastName, phoneNumber, bio } = req.body;
    await userQueries.updateUserProfileQuery(
      email,
      firstName,
      lastName,
      phoneNumber,
      bio
    );
    res.send("Updated Profile Successfully!");
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

exports.makeAdmin = async (req, res) => {
  try {
    const {userId} = req.body;
    await userQueries.makeAdminQuery(
      userId
    );
    res.send("Updated Admin Successfully!");
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};







