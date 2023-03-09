const express = require("express");
const { isAuth } = require("../middlewares/auth");
const { uploadFile, deleteFile } = require("../middlewares/cloudinary");
const Team = require("../models/teams.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allTeams = await Team.find();
    return res.status(200).json(allTeams);
  } catch (error) {
    return next(error);
  }
});


router.get("/byUser/", [isAuth], async (req, res, next) => {
  try {
    const userID = req.user._id;
    const team = await Team.find({user: userID});
    return res.status(200).json(team);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const teamToFind = await Team.findById(id);
    return res.status(200).json(teamToFind);
  } catch (error) {
    return next(error);
  }
});

router.post("/create", uploadFile.single("img"), async (req, res, next) => {
  const userID = req.user._id;
  try {
    const team = req.body;
    if (req.file) {
      team.img = req.file.path;
    }
    team.user = userID
    const newTeam = new Team(team);
    const created = await newTeam.save();
    return res.status(201).json(created);
  } catch (error) {
    return next(error);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const team = await Team.findById(id);
    if (team.img) {
      deleteFile(team.img);
    }
    const teamToDelete = await Team.findByIdAndDelete(id);
    return res.status(200).json(`The 'team' has been deleted --> ${teamToDelete}`);
  } catch (error) {
    return next(error);
  }
});

router.put("/edit/:id", uploadFile.single("img"), async (req, res, next) => {
  try {
    const id = req.params.id;
    const teamDb = await Team.findById(id);
    if (teamDb.img) {
      deleteFile(teamDb.img);
    }
    const team = req.body;
    if (req.file) {
      team.img = req.file.path;
    }
    const teamModify = new Team(team);
    teamModify._id = id;
    const teamUpdated = await Team.findByIdAndUpdate(id, teamModify);
    return res.status(200).json(`Successfully updated --> ${teamUpdated}`);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;