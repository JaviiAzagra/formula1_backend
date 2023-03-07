const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const driversSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    podiums: { type: String, required: true, trim: true },
    points: { type: String, required: true, trim: true },
    grand_prix: { type: String, required: true, trim: true },
    world_champions: { type: String, required: true, trim: true },
    highest_race_finish: { type: String, required: true, trim: true },
    highest_grid_position: { type: String, required: true, trim: true, unique: true},
    birth_date: { type: String, required: true, trim: true},
    img: { type: String, required: true, trim: true },
    team: [{type: mongoose.Types.ObjectId, ref: "teams"}],
  },
  {
    timestamps: true,
  }
);

const Driver = mongoose.model("drivers",driversSchema);

module.exports = Driver;