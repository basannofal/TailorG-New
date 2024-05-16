const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8001
const Auth_Route = require("./routes/authRoute");
const Shop_Route = require("./routes/shopRoute");
const Customer_Route = require("./routes/customerRoute");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Tailor G");
});

app.use("/", Auth_Route);
app.use("/", Shop_Route);
app.use("/", Customer_Route);



app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});

//you can change port number form config.js in server folder
