const jwt = require("jsonwebtoken");
const models = require("../models");
const Ticket = models.train;
const Type = models.type_Train;
const User = models.user;

exports.getAll_ticket = async (req, res) => {
	try{
		const {startTime} =req.params;
		const ticket = await Ticket.findAll({
			include: [
				{
					model: Type,
					as:"typeTrain",
					attributes: ["id", "name"]
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
	 // const token = req.header("Authorization").replace("Bearer ", "");
  //   const user = jwt.verify(token, process.env.SECRET_KEY);
  //    const id = req.user;
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
			attributes:{exclude:["typeTrain_id","user_id","createdAt", "updatedAt"]}
		});
		res.status(200).send({message: "success to find data", data})
	}catch(err){
		console.log(err)
	}
}

exports.add_ticket = async (req, res) => {
	const {nameTrain, dateStart, startStation, typeTrain_id, startTime, destination, arrivalTime, price, qty} = req.body;
	try{
		const ticket = await Ticket.create(
		{
			nameTrain,
			typeTrain_id,
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
				}
		    ],
		    attributes: {exclude: ["user_id","createdAt", "updatedAt"]},
		    });
		res.status(200).send({message: "success", data:data})
	}catch(err){
		console.log(err)
	}
}
