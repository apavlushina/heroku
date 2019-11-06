const { Router } = require("express");

const router = new Router();

const teachers = ["Kelly", "Ryan"];

router.get("/teachers", (request, response) => response.send(teachers));

module.exports = router;
