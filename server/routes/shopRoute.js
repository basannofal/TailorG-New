const express = require("express");
const router = express.Router();

const Shop = require("../controllers/shop");

router.route("/getshopdetail/:id").get(Shop.GetShopDetail);



module.exports = router;
