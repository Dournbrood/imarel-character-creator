var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/moo', function (request, response, next) {
  response
    .status(200)
    .send('mooOoOOoOOOoooo');
});

router.get('/potato', function (request, response, next) {
  response
    .status(200)
    .send('(: :) <- Dubiously a potato..?');
});

router.get('/character', function (request, response, next) {
  response
    .status(200)
    .send(
      {
        name: "Phoebe Arisaan",
        race: "Tallis-Vyss",
        class: "Technomancer",
        age: "19",
        gender: "Female",
        items: [
          {
            active: true,
            name: "Base Stats",
            stats: ["Spell Hit", "Melee Hit", "Dodge", "Stealth", "Attacks Per Round"],
            values: [65, 50, 50, 50, 1],
            tags: [
              ["Percentage", "Base"],
              ["Percentage", "Base"],
              ["Percentage", "Base"],
              ["Percentage", "Base"],
              ["Base"]
            ]
          },
          {
            active: true,
            name: "Gift of the Blood",
            stats: ["Armor Rating", "Mystic Defense", "Feats of Strength"],
            values: [-7, -7, 25],
            tags: [
              ["Percentage"],
              ["Percentage"],
              ["Percentage", "Base"]
            ]
          },
          {
            active: false,
            name: "Blacksilver Breastplate",
            stats: ["Armor Rating", "Mystic Defense"],
            values: [-35, -25],
            tags: [
              ["Percentage"],
              ["Percentage"]
            ]
          }
        ]
      }
    )

})

module.exports = router;
