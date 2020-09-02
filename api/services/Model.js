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

/*
 * Get all models based on filters
 */
const fetchModels = async (req, res) => {
  try {
    // parse filter
    const filters = JSON.parse(
      Buffer.from(req.params.filters, "base64").toString("ascii")
    );

    var newFilter = {};

    if (filters.hasOwnProperty("name") && filters.name !== "") {
      newFilter["name"] = { $regex: filters.name, $options: "i" };
    }

    if (filters.hasOwnProperty("modelwear")) {
      newFilter["modelwear"] = filters.modelwear;
    }

    if (filters.hasOwnProperty("height")) {
      newFilter["height"] = numCalculation(filters.height);
    }

    if (filters.hasOwnProperty("bust")) {
      newFilter["bust"] = numCalculation(filters.bust);
    }

    if (filters.hasOwnProperty("waist")) {
      newFilter["waist"] = numCalculation(filters.waist);
    }

    const model = await Model.find(newFilter);
    res.json(model);
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }

  return res;
};

const numCalculation = (obj) => {
  return {
    $gte: obj.from,
    $lte: obj.to,
  };
};

/*
 * Update Model
 */
const update = async (req, res) => {
  try {
    // See if user already exists
    let model = await Model.findById(req.params.id);

    if (!model) {
      return res.status(404).json({ errors: [{ msg: "Model not found" }] });
    }

    for (var prop in req.body) {
      if (req.body.hasOwnProperty(prop)) {
        model[prop] = req.body[prop];
      }
    }

    // Save to DB (Commit)
    await model.save();

    res.json(model);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({ msg: err.message });
  }

  return res;
};

module.exports = { register, fetchModels, update };
