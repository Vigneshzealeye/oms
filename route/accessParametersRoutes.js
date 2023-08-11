const {
  createAccessParameters,
  allAccessParameters,
} = require("../controller/accessParametersController");
const {
  accessParametersValidator,
} = require("../middleware/accessParametersMiddleware");

const router = require("express").Router();

router.post(
  "/create-access-parameters",
  accessParametersValidator,
  createAccessParameters
);
router.get("/get-all-access-parameters", allAccessParameters);
module.exports = router;
