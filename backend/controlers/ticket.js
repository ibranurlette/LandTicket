const jwt = require("jsonwebtoken");
const models = require("../models");
const Ticket = models.train;
const Type = models.type_Train;
const User = models.user;
const sequelize =require("sequelize");

exports.getAll_ticket = async (req, res) => {
	try{
		const {dateStart} =req.query;
		const ticket = await Ticket.findAll({
			 where: {dateStart: {[sequelize.Op.like]: `%${dateStart}`}},
			include: [
				{
					model: Type,
					as:"typeTrain",
					attributes: ["id", "name"]
				},
				{
					model:User,
					as:"user",
					attributes: ["id","name","username","email","password","gender","phone","addres"]
				}

			],
			attributes:{exclude: ["type_Train","typeTrain_id","user_id","createdAt", "updatedAt" ]}
		});
		res.send(ticket);
	}catch(err){
		console.log(err)
	}
}

exports.getMy_ticket = async (req, res) => {
	try{
		const data = await Ticket.findAll({
			include: [
				{
					model:Type,
					as:"typeTrain",
					attributes: ["id", "name"]
				},
				{
					model:User,
					as:"user",
					attributes: ["id","name","username","email","password","gender","phone","addres"]
				}
			],
			attributes:{exclude:["createdAt", "updatedAt"]}
		});
		res.status(200).send({message: "success to find data", data})
	}catch(err){
		console.log(err)
	}
}

exports.add_ticket = async (req, res) => {
	const {nameTrain, dateStart, startStation, user_id, typeTrain_id, startTime, destination, arrivalTime, price, qty} = req.body;
	try{
		const ticket = await Ticket.create(
		{
			nameTrain,
			typeTrain_id,
			user_id,
			dateStart,
			startStation,
			startTime,
			destination,
			arrivalTime,
			price,
			qty
		});
		const id = ticket.id;
		const data = await Ticket.findOne({
		     where: {id},
			 include: [
				{
					model: Type,
					as:"typeTrain",
					attributes: ["id", "name"]
				},
				{
					model: User,
					as:"user",
					attributes: ["id","name","username","email","password","gender","phone","addres"]
				}
		    ],
		    attributes: {exclude: ["createdAt", "updatedAt"]},
		    });
		res.status(200).send({message: "success", data:data})
	}catch(err){
		console.log(err)
	}
}

exports.getOne_ticket = async (req, res) => {
	const {id} =req.params
	try{
		const data = await Ticket.findOne({
			where: {id},
			include: [
				{
					model:Type,
					as:"typeTrain",
					attributes: ["id", "name"]
				},
				{
					model:User,
					as:"user",
					attributes: ["name","username","email","gender","phone","addres"]
				}
			],
			attributes:{exclude:["createdAt", "updatedAt"]}
		});
		res.status(200).send({message: "success to find data", data})
	}catch(err){
		console.log(err)
	}
}