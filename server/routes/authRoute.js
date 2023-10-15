const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth");

router.route("/registration").post(auth.Registration);
router.route("/login").post(auth.Login);
router.route("/checkemail/:email").get(auth.checkEmail);



module.exports = router;
