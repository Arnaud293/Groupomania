const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

module.exports.getOneUser = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("Id unkown : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Id Unknown : " + err);
  }).select("-password");
};
