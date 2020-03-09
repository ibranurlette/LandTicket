const jwt = require("jsonwebtoken");
const models = require("../models");
const Ticket = models.train;
const Type = models.type_Train;
const User = models.user;
const Payment = models.payment;

exports.geAll_payment = async (req, res) => {
	try{
		const payment = await Payment.findAll({
			include: [
			{
				model:Ticket,
				as:"train",
				attributes: ["id", "nameTrain", "typeTrain_id", "dateStart", "startStation", "startTime","destination","arrivalTime", "price", "user_id"]
			}
			],
			attributes: {exclude: ["createdAt", "updatedAt"]}
		});
		res.send(payment)
	}catch(err){
		console.log(err)
	}
}

exports.add_payment = async (req, res) =>{
		const {Train_id, qty, Total_price, status, attachment} = req.body;
	try{
		const payment = await Payment.create({
			Train_id, qty, Total_price, status, attachment
		})
		const id = payment.id;
		const data = await Payment.findOne({
			where: {id},
			include: [
			{
				model:Ticket,
				as:"train",
				attributes: ["id", "nameTrain", "typeTrain_id", "dateStart", "startStation", "startTime","destination","arrivalTime", "price", "user_id"]
			}
			],
			attributes: {exclude: ["createdAt", "updatedAt"]}
		});
		res.status(200).send({message: "success to create data", data:data})
	}catch(err){
		console.log(err)
	}
}
exports.getOne_payment = async (req, res) => {

	try{
		const {id} = req.params;
		const payment = await Payment.findOne({
			where: {id},
			include: [
			{
				model:Ticket,
				as:"train",
				attributes: ["id", "nameTrain", "typeTrain_id", "dateStart", "startStation", "startTime","destination","arrivalTime", "price", "user_id"]
			}
			],
			attributes: {exclude: ["createdAt", "updatedAt"]}
		});
		res.status(200).send({message: "success to find data", data:payment})

	}catch(err){
		console.log(err)
	}
}

exports.edit_payment = async (req, res) => {
	const {qty, Total_price, status,attachment} = req.body;
	// const train = req.body.train_id;
	try{
		const id = req.params.id;
		const payment = await Payment.update({
			qty, Total_price, status,attachment},
			{where: {id }});
		if(payment.length > 0 && payment[0]){
			const data = await Payment.findOne({
				where: {id},
				include: [
			{
				model:Ticket,
				as:"train",
				attributes: ["id", "nameTrain", "typeTrain_id", "dateStart", "startStation", "startTime","destination","arrivalTime", "price", "user_id"]
			}
			],
			attributes: {exclude: ["createdAt", "updatedAt"]}
			})
			res.status(200).send({message: "succes to update data", data});
		}else{
			 res.status(404).send({ message: "success" });
		}
	}catch(err){
		console.log(err)
	}
}
