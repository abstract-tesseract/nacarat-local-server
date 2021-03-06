const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
const _ = require("underscore");
//const pushid = require('pushid')

// get all businesses
router.get("/nacarat/businesses.json", (req, res) => {
    const businesses = db
        .get("nacarat")
        .get("businesses")
        .value();

    res.send(businesses);
});

// Get business by id
router.get("/nacarat/businesses/:businessId.json", (req, res) => {
    const business = db
        .get("nacarat")
        .get("businesses")
        .get(req.params.businessId)
        .value();

    res.send(business);
});

// Update businessName by :businessId
router.patch("/nacarat.json", (req, res) => {
    console.log("BODY", req.body);

    // db
    //     .get("nacarat")
    //     .get("businesses")
    //     .get(req.params.businessId)
    //     .get("profile")
    //     .get("name")
    //     .assign(req.body)
    //     .write();

    res.send({
        status: 501
    });
});

// Update About by :businessId
router.put("/nacarat/businesses/:businessId/profile/about.json", (req, res) => {
    db
        .get("nacarat")
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

// Update About by :businessId
router.put("/nacarat/businesses/:businessId/profile/type.json", (req, res) => {
    db
        .get("nacarat")
        .get("businesses")
        .get(req.params.businessId)
        .get("profile")
        .get("type")
        .assign(req.body)
        .write();

    res.send({
        status: 200
    });
});

// Update email by :businessId
router.put("/nacarat/businesses/:businessId/profile/email.json", (req, res) => {
    db
        .get("nacarat")
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

// Update phone by :businessId
router.put("/nacarat/businesses/:businessId/profile/phone.json", (req, res) => {
    db
        .get("nacarat")
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

// Update hours of operation by :businessId
router.put("/nacarat/businesses/:businessId/profile/hoursOfOperation.json", (req, res) => {
    db
        .get("nacarat")
        .get("businesses")
        .get(req.params.businessId)
        .get("profile")
        .get("hoursOfOperation")
        .assign(req.body)
        .write();

    res.send({
        status: 200
    });
});

// Update social media by :businessId and :type
router.put("/nacarat/businesses/:businessId/profile/socialMedias/:type.json", (req, res) => {
    db
        .get("nacarat")
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

// Update social media by :businessId and :type
router.patch("/nacarat/businesses/:businessId/profile/socialMedias.json", (req, res) => {
    db
        .get("nacarat")
        .get("businesses")
        .get(req.params.businessId)
        .get("profile")
        .get("socialMedias")
        .assign(req.body)
        .write();

    res.send({
        status: 200
    });
});

// Delete social media by :businessId and :type
router.delete("/nacarat/businesses/:businessId/profile/socialMedias/:type.json", (req, res) => {
    db
        .get("nacarat")
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

// Update address by :businessId
router.put("/nacarat/businesses/:businessId/profile/address.json", (req, res) => {
    db
        .get("nacarat")
        .get("businesses")
        .get(req.params.businessId)
        .get("profile")
        .get("address")
        .assign(req.body)
        .write();

    res.send({
        status: 200
    });
});

module.exports = router;
