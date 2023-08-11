const accessParametersValidator = async (req, res, next) => {
  try {
    let {
      effectiveDate,
      UserIdLength,
      PasswordLength,
      maxUserSessions,
      NumericCharacters,
      AlphaCharacters,
    } = req.body;

    for (let key in req.body) {
      if (!req.body[key] || req.body[key] == "") {
        if (req.body[key] !== 0) {
          return res.status(400).json({ error: `${key} Undefined` });
        }
      }
    }

    if (effectiveDate < Date.now()) {
      return res
        .status(400)
        .json({ error: "Effective Date Must Be A Future Date" });
    }
    if (UserIdLength < 1 || UserIdLength > 8) {
      return res
        .status(400)
        .json({ error: "User Id Length Must Be Between 1 and 8" });
    }
    if (PasswordLength <= 0 || PasswordLength > 8) {
      return res
        .status(400)
        .json({ error: "Password Length Must Be Between 1 and 8" });
    }

    if (maxUserSessions <= 0) {
      return res
        .status(400)
        .json({ error: "User Sessions Must be greater than Zero" });
    }
    if (NumericCharacters + AlphaCharacters > 8) {
      return res.status(400).json({
        error: "Sum of Alpha Character and Numeric must be Less than 8",
      });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ error: new Error(error).message || "some thing went wrong" });
  }
};

module.exports = {
  accessParametersValidator,
};
