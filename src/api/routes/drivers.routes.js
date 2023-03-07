const express = require("express");
const { isAuth } = require("../middlewares/auth");
const { uploadFile, deleteFile } = require("../middlewares/cloudinary");
const Driver = require("../models/drivers.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allDrivers = await Driver.find().populate('teams');
    return res.status(200).json(allDrivers);
  } catch (error) {
    return next(error);
  }
});


router.get("/byUser/", [isAuth], async (req, res, next) => {
  try {
    const userID = req.user._id;
    const driver = await Driver.find({user: userID});
    return res.status(200).json(driver);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const driverToFind = await Driver.findById(id);
    return res.status(200).json(driverToFind);
  } catch (error) {
    return next(error);
  }
});

router.post("/create", [isAuth],uploadFile.single("img"), async (req, res, next) => {
  const userID = req.user._id;
  try {
    const driver = req.body;
    if (req.file) {
      driver.img = req.file.path;
    }
    driver.user = userID
    const newDriver = new Driver(driver);
    const created = await newDriver.save();
    return res.status(201).json(created);
  } catch (error) {
    return next(error);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const driver = await Driver.findById(id);
    if (driver.img) {
      deleteFile(driver.img);
    }
    const driverToDelete = await Driver.findByIdAndDelete(id);
    return res.status(200).json(`The 'driver' has been deleted --> ${driverToDelete}`);
  } catch (error) {
    return next(error);
  }
});

router.put("/edit/:id", uploadFile.single("img"), async (req, res, next) => {
  try {
    const id = req.params.id;
    const driverDb = await Driver.findById(id);
    if (driverDb.img) {
      deleteFile(driverDb.img);
    }
    const driver = req.body;
    if (req.file) {
      driver.img = req.file.path;
    }
    const driverModify = new Driver(driver);
    driverModify._id = id;
    const driverUpdated = await Driver.findByIdAndUpdate(id, driverModify);
    return res.status(200).json(`Successfully updated --> ${driverUpdated}`);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;