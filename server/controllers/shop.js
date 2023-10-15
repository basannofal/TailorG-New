const conn = require("../db/conn");

//GetShopDetail USERS
const GetShopDetail = (req, res) => {
  const  id  = req.params.id
  const values = [id];

  const q = "SELECT * FROM `tg_shop_master` WHERE id = ?";

  conn.query(q, values, (err, data) => {
    if (err) {
      res.status(500).json({ msg: "Data Error" });
    } else {
      res.json(data);
    }
  });
};

module.exports = { GetShopDetail };
