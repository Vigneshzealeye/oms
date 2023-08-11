const express = require("express");

const app = express();

app.use(express.json());

require("dotenv").config();

const db = require("./model/index");

(async () => {
  try {
    await db.sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})(); //To Connect DB

app.use("/api/access-parameters", require("./route/accessParametersRoutes"));

app.listen(process.env.PORT_NO, () => {
  console.log(`app started ${process.env.PORT_NO}`);
}); //To Start B.E Server
