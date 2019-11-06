const express = require("express");
const studensRouter = require("./studenRouter");
const teachersRouter = require("./teacherRouter");

const app = express();
app.use(studensRouter);
app.use(teachersRouter);

app.listen(4000);
