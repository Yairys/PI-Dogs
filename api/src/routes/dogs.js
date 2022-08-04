const router = require("express").Router();
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { Op } = require("sequelize");
const fetch = require("node-fetch");
const { getAllDogs } = require("../controller/controller");

router.get("/", async (req, res) => {
  const { name } = req.query;
  const allDogs = await getAllDogs();

  try {
    if (name) {
      let dogName = await allDogs.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      dogName.length ? res.json(dogName) : res.json("Dog's name not found");
    } else {
      res.json(allDogs);
    }
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allDogs = await getAllDogs();

  try {
    if (id) {
      let dogById = allDogs.find((e) => e.id == id);
      dogById ? res.json(dogById) : res.json({ msg: "ID not found" });
    } else {
      res.send(allDogs);
    }
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
