const { Router } = require("express");

const router = new Router();

const students = ["Sasha"];

router.get("/student", (request, response) => response.send(students));

module.exports = router;
