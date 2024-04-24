const express = require("express");
const excuseService = require("../services/excuseService");
const router = express.Router();

router.get("/", (req, res) => {
    excuseService.fetchExcuse().then(results => {
        res.status(200).json(results);
    }).catch(err => {
        console.error("Oops...", err);
        res.status(500).json({"message": "Error" + err.sqlMessage});
    });
});

router.post("/", (req, res) => {
    excuseService.addExcuse(req.body).then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

router.get("/:http_code", (req, res) => {
    excuseService.fetchExcuseById(req.params.http_code).then(result => {
        res.status(200)
        res.json(result[0]);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

module.exports = router;
