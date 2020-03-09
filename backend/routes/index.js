const express = require("express");
const router = express.Router();

const { login, register } = require("../controlers/auth");
const { auth } = require("../middleware/auth");

const {getAll_ticket, getMy_ticket, add_ticket} = require("../controlers/ticket");
const {geAll_payment, add_payment, getOne_payment, edit_payment} = require("../controlers/payment");
const {get_user} = require("../controlers/user");

router.get("/", (req, res) => {
  res.send("<strong>ibra</strong>");
});

// route auth
router.post("/login", login);
router.post("/register", register);
// route user
router.get("/user",auth, get_user);
// router train
router.get("/tickets", getAll_ticket)
router.get("/Mytickets", getMy_ticket)
router.post("/ticket", auth, add_ticket)
// router payment
router.get("/payments", auth, geAll_payment)
router.post("/payment", auth, add_payment)
router.get("/payment/:id", auth, getOne_payment)
router.put("/payment/:id", auth, edit_payment)




module.exports = router;