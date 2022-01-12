const userQueries = require("../queries/userQueries");
const uuidv4 = require('uuid');
const { StatusCodes } = require('http-status-codes');

const login = (req, res) => {
  const token = req.token;
  res.status(StatusCodes.OK).json({
    token,
    userInfo: req.body.user,
    message: "Login Success!",
  });
};

const signUpUser = async (req, res) => {
  const { email, bio, password, firstName, lastName, phoneNumber, verifyPassword } =
    req.body;
  const userId = uuidv4();
  await userQueries.signUpUserQuery(
    userId,
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    verifyPassword,
    bio
  );
  res.status(StatusCodes.CREATED).send("Register Successfully!");
};

const updateUserPassword = async (req, res) => {
  const { newPassword, newVerifyPassword } = req.body;
  const { userId } = req.user;
  await userQueries.updateUserPasswordQuery(
    newPassword,
    newVerifyPassword, userId
  );
  res.status(StatusCodes.OK).send("Updated Password Successfully!");
};

const updateUserProfile = async (req, res) => {
  const { email, firstName, lastName, phoneNumber, bio } = req.body;
  await userQueries.updateUserProfileQuery(
    email,
    firstName,
    lastName,
    phoneNumber,
    bio
  );
  res.status(StatusCodes.OK).send("Updated Profile Successfully!");
};

const makeAdmin = async (req, res) => {
  const { id } = req.params;
  await userQueries.makeAdminQuery(
    id
  );
  res.status(StatusCodes.OK).send("Updated Admin Successfully!");
};

module.exports = {
  makeAdmin,
  updateUserPassword,
  updateUserProfile,
  login,
  signUpUser
};