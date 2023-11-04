const conn = require("../db/conn");
const moment = require("moment-timezone");

//GetCustomers USERS
const GetCustomers = (req, res) => {
  const id = req.params.id;

  const q =
    "SELECT * FROM `tg_customer_master` WHERE sm_id = ? ORDER by id DESC";

  conn.query(q, [id], (err, data) => {
    if (err) {
      res.status(500).json({ msg: "Data Error" });
    } else {
      res.status(200).json(data);
    }
  });
};

//Add Cutomer 
const AddCutomer = (req, res) => {
    const id = req.params.id
  const curDate = new Date().toISOString().substring(0, 10);

  const timezone = "Asia/Kolkata"; // Set the desired time zone to India/Kolkata
  const CurTime = moment().tz(timezone).format().substring(11, 19);

  const { cname, cphone, ccity, caddress, cemail, checked } = req.body;
  const values = [
    cname,
    ccity,
    cemail,
    caddress,
    checked,
    cphone,
    curDate,
    CurTime,
    id
  ];

  const q =
    "INSERT INTO `tg_customer_master`(`cus_name`, `cus_city`, `cus_email`, `cus_address`, `cus_gender`, `cus_number`, `date`, `time`, `sm_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  conn.query(q, values, (err, data) => {
    if (err) {
      res.status(500).json({ msg: "Customer Cannot Added" });
    } else {
      res.json(data);
    }
  });
};



//Get Customers Details
const GetCustomerDetail = (req, res) => {
  const id = req.params.id;
  const custId = req.params.custid;

  const q =
    "SELECT * FROM `tg_customer_master` WHERE id = ? AND sm_id = ? ORDER by id DESC";

  conn.query(q, [custId,id], (err, data) => {
    if (err) {
      res.status(500).json({ msg: "Data Error" });
    } else {
      res.status(200).json(data);
    }
  });
};

module.exports = { GetCustomers, AddCutomer, GetCustomerDetail };
