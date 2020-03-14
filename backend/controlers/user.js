const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;

exports.get_user = async (req, res) => {
    // const token = req.header("Authorization").replace("Bearer ", "");
    // const user = jwt.verify(token, process.env.SECRET_KEY);
  const id = req.user;
  try {
    const data = await User.findOne({
      where: {id},
      attributes: { exclude: ["password","createdAt", "updatedAt"] }
       });
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
};