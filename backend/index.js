const express = require("express");
const cors = require("cors");

const app = express();

//configurar resposta em JSON
app.use(express.json());

//resolver CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//pasta pulic
app.use(express.static("public"));

//routes

//startar servidor
app.listen(5000);
