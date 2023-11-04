const express = require("express");
const router = express.Router();

const Customer = require("../controllers/customer");

router.route("/getcustomers/:id").get(Customer.GetCustomers);
router.route("/getcustomerdetail/:id/:custid").get(Customer.GetCustomerDetail);
router.route("/addcustomer/:id").post(Customer.AddCutomer);



module.exports = router;
