const express = require("express");
const router = express.Router();

const { login, register,auth_reload } = require("../controlers/auth");
const { auth,uploadupload } = require("../middleware/auth");
const { upload } = require("../middleware/upload");

const {getAll_ticket, getMy_ticket, add_ticket, getOne_ticket} = require("../controlers/ticket");
const {geAll_payment, add_payment, getOne_payment, edit_payment, delete_payment, paymentProof} = require("../controlers/payment");
const {getTypetrain} = require("../controlers/typetrain");
const {get_user} = require("../controlers/user");

router.get("/", (req, res) => {
  res.send("<strong>ibra</strong>");
});

// route auth
router.post("/login", login);
router.post("/register", register);
router.get("/auth", auth, auth_reload);
// route user
router.get("/user",auth, get_user);
router.get("/type_train", getTypetrain);
// router train
router.get("/tickets", getAll_ticket)
router.get("/Mytickets", getMy_ticket)
router.post("/ticket", add_ticket)
router.get("/ticket/:id", getOne_ticket)
// router payment
router.get("/payments", auth, geAll_payment)
router.post("/payment", auth, add_payment)
router.get("/payment/:id", auth, getOne_payment)
router.put("/payment/:id", auth, edit_payment)
router.delete("/payment/:id", delete_payment)
router.post("/upload/:id", upload.single("payment"), paymentProof);




module.exports = router;