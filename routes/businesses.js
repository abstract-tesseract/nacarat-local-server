const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

// GET /businesses
router.get("/businesses.json", (req, res) => {
  const businesses = db.get("businesses").value();

  res.send(businesses);
});

// GET /businesses/:businessId
router.get("/businesses/:businessId.json", (req, res) => {
  const business = db
    .get("businesses")
    .get(req.params.businessId)
    .value();

  res.send(business);
});

// PUT - Update About by :businessId
router.put("/businesses/:businessId/profile/about.json", (req, res) => {
  db
    .get("businesses")
    .get(req.params.businessId)
    .get("profile")
    .get("about")
    .assign(req.body)
    .write();

  res.send({
    status: 200
  });
});

// PUT - Update email :businessId
router.put("/businesses/:businessId/profile/email.json", (req, res) => {
  db
    .get("businesses")
    .get(req.params.businessId)
    .get("profile")
    .get("email")
    .assign(req.body)
    .write();

  res.send({
    status: 200
  });
});

// PUT - Update phone :businessId
router.put("/businesses/:businessId/profile/phone.json", (req, res) => {
  db
    .get("businesses")
    .get(req.params.businessId)
    .get("profile")
    .get("phone")
    .assign(req.body)
    .write();

  res.send({
    status: 200
  });
});

// PUT - update social media by :businessId and :type
router.put("/businesses/:businessId/profile/socialMedias/:type.json", (req, res) => {
  db
    .get("businesses")
    .get(req.params.businessId)
    .get("profile")
    .get("socialMedias")
    .get(req.params.type)
    .assign(req.body)
    .write();

  res.send({
    status: 200
  });
});

// DELETE - delete social media by :businessId and :type
router.delete("/businesses/:businessId/profile/socialMedias/:type.json", (req, res) => {
  db
    .get("businesses")
    .get(req.params.businessId)
    .get("profile")
    .get("socialMedias")
    .unset(req.params.type)
    .write();

  res.send({
    status: 200
  });
});

module.exports = router;