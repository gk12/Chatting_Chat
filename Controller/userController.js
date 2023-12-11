const User = require('../Model/userModel');

const createUser = async (req, res) => {
  const { username, name, email, password } = req.body;
  try {
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) {
      return res.end('user already exists with same username or email');
    }

    await User.Create({});
    res.status(201).json({
      message: 'user created successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: 'something went wrong',
    });
  }
};

const login = async (req, res) => {
  // username can we username or email for login
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (!user) {
      return res.end('Invalid username or password');
    }
    res.status(200).json({
      message: 'user logged in successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: 'something went wrong',
    });
  }
};

const updateUsers = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) {
      return res.end('user already exists with same username or email');
    }

    if (name) {
      user.name = name;
    }
    if (password) {
      user.password = password;
    }
    await user.save();
    res.json({
      message: 'user saved successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: 'something went wrong',
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.end(users);
  } catch (error) {
    res.json({
      message: 'Error while gtting users',
    });
  }
};

module.exports = {
  createUser,
  login,
  updateUsers,
  getAllUsers,
};
