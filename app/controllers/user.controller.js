const Role = require("../models/role.model");
const User = require("../models/user.model");

exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId, { include: Role });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const foundUser = user.toJSON();
    delete foundUser.password;
    res.status(200).json({
      message: "Success Get User by ID",
      user: {
        ...foundUser,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving user" });
  }
};

// exports.allAccess = (req, res) => {
//   res.status(200).send("Public Content.");
// };

// exports.siswaBoard = (req, res) => {
//   res.status(200).send("Siswa Content.");
// };

// exports.adminBoard = (req, res) => {
//   res.status(200).send("Admin Content.");
// };

// exports.guruBoard = (req, res) => {
//   res.status(200).send("Guru Content.");
// };
