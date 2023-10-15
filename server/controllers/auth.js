const conn = require("../db/conn");
const moment = require("moment-timezone");

//Registration USERS
const Registration = (req, res) => {
  const currentDateTimeISOString = new Date().toISOString().substring(0, 10);
  console.log(currentDateTimeISOString);

  const timezone = "Asia/Kolkata"; // Set the desired time zone to India/Kolkata
  const currentDateTimeInTimeZone = moment()
    .tz(timezone)
    .format()
    .substring(11, 19);
  console.log(currentDateTimeInTimeZone);

  const { fname, lname, sname, email, pass, phone } = req.body;
  const values = [
    sname,
    fname,
    lname,
    phone,
    email,
    pass,
    currentDateTimeISOString,
    currentDateTimeInTimeZone,
  ];

  const q =
    "INSERT INTO `tg_shop_master`(`shop_name`, `fname`, `lname`, `mobile_number`, `email`, `password`, `date`, `time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  conn.query(q, values, (err, data) => {
    if (err) {
      res.status(500).json({ msg: "Shop Cannot Added" });
    } else {
      res.json(data);
    }
  });
};

//Login USERS
const Login = (req, res) => {
  const { email, pass } = req.body;
  const values = [email, pass];

  const q = "SELECT * FROM `tg_shop_master` WHERE email = ? and password = ?";

  conn.query(q, values, (err, data) => {
    if (err) {
      res.status(500).json({ msg: "Data Error" });
    } else {
      if (data.length > 0) {
        res.json(data);
      } else {
        res.status(500).json({ msg: "Invalid Login Detail" });
      }
    }
  });
};



//checkEmail USERS
const checkEmail = (req, res) => {

  const  email  = req.params.email
  const values = [email];

  const q = "SELECT * FROM `tg_shop_master` WHERE email = ?";

  conn.query(q, values, (err, data) => {
    if (data.length > 0) {
      res.status(200).json({ exists: true });
    } else {
      res.status(200).json({ exists: false });
    }

  });
};

module.exports = { Registration, Login, checkEmail };
