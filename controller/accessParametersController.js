const { accessParameter, Sequelize, sequelize } = require("../model/index");
// let temp = sequelize.define({});

const createAccessParameters = async (req, res) => {
  try {
    let {
      effectiveDate,
      UserIdLength,
      PasswordLength,
      NumericCharacters,
      AlphaCharacters,
      forceChangePasswordInterval,
      preventPreviousPasswordUsage,
      warningAfterUnsuccessfulLogins,
      warningToAdminAfterUnsuccessfulLogins,
      lockUserIdAfterUnsuccessfulAttempts,
      maxUserSessions,
      maxConcurrentSessions,
      lockTerminalAfterSeconds,
    } = req.body;

    let tableData = await accessParameter.create({
      optionDescription,
      fieldName,
      effectiveDate,
      UserIdLength,
      PasswordLength,
      NumericCharacters,
      AlphaCharacters,
      forceChangePasswordInterval,
      preventPreviousPasswordUsage,
      warningAfterUnsuccessfulLogins,
      warningToAdminAfterUnsuccessfulLogins,
      lockUserIdAfterUnsuccessfulAttempts,
      maxUserSessions,
      maxConcurrentSessions,
      lockTerminalAfterSeconds,
    });
    return res.status(200).json({ message: "creation success" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: new Error(error).message || "something went wrong" });
  }
};
const allAccessParameters = async (req, res) => {
  try {
    let allRecords = await accessParameter.findAll();
    res.status(200).json({ message: allRecords });
  } catch (error) {
    res
      .status(500)
      .json({ error: new Error(error).message || "something went wrong" });
  }
};
module.exports = {
  createAccessParameters,
  allAccessParameters,
};
