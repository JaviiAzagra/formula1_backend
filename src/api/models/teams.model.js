const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamsSchema = new Schema(
  {
    name: { type: String, required: true},
    full_name: { type: String, required: true},
    base: { type: String, required: true },
    team_chief: { type: String, required: true },
    team_technical: { type: String, required: true },
    chassis: { type: String, required: true},
    power_unit: { type: String, required: true},
    entry: { type: String, required: true },
    drivers:  [{type: mongoose.Types.ObjectId, ref: "drivers"}],
    drivernameone: { type: String, required:true},
    drivernamesecond: { type: String, required:true},
    driverimgone: { type: String},
    driverimgsecond: { type: String},
    img: { type: String },
    imgtwo: { type: String },
    imgthree: { type: String },
    imgfour: { type: String },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("teams", teamsSchema);

module.exports = Team;