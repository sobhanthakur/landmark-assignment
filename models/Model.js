const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    modelwear: {
      type: String,
      enum: ["S", "M", "L", "XL"],
      default: "M",
    },
    height: {
      type: Integer,
      required: true,
    },
    bust: {
      type: Integer,
      required: true,
    },
    waist: {
      type: Integer,
      required: true,
    },
    highhip: {
      type: Integer,
      required: true,
    },
    lowhip: {
      type: Integer,
      required: true,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = Model = mongoose.model("model", modelSchema);
