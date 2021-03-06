const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const modelService = require("../services/Model");

const checkObjectId = require("../../middleware/checkObjectId");

// @route    POST api/models
// @desc     Register New Model
// @access   Public

router.post(
  "/",
  [
    check("name", "Name must be present").not().isEmpty(),
    check("modelwear", "Model Wear must be present").not().isEmpty(),
    check("height", "Height must be present").not().isEmpty(),
    check("bust", "Bust must be present").not().isEmpty(),
    check("waist", "Waist must be present").not().isEmpty(),
    check("highhip", "High Hip must be present").not().isEmpty(),
    check("lowhip", "Low Hip must be present").not().isEmpty(),
    check("images", "Images must be present").not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    // Throw Exception if validation fails
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return modelService.register(req, res);
  }
);

// @route    GET api/models/:filters
// @desc     Get All models
// @access   Public

router.get("/:filters", (req, res) => {
  return modelService.fetchModels(req, res);
});

// @route    Put api/models/:id
// @desc     Update Model
// @access   Public

router.put("/:id", checkObjectId("id"), (req, res) => {
  const errors = validationResult(req);

  // Throw Exception if validation fails
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return modelService.update(req, res);
});

module.exports = router;
