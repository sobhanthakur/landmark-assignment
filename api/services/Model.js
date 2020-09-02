const Model = require("../../models/Model");
require("dotenv").config();

/*
 * Register New Model
 */
const register = async (req, res) => {
  try {
    // Create new Model
    model = new Model(req.body);

    // Save to DB (Commit)
    await model.save();

    res.json(model);
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }

  return res;
};

module.exports = { register };
