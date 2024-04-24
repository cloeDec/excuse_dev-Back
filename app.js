const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const excuse = require("./modules/excuse");

app.use(cors());
app.use(express.json());

app.use("/excuse", excuse);

app.listen(port, () => {
    console.log(`Application à l'écoute sur le port http://127.0.0.1:${port}/ !`);
  });