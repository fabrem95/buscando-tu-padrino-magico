require("dotenv").config();
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const { MostOcurrentInArray } = require("./helpers/helpers");

const express = require("express");

const app = express();

app.use(
	express.static("public"),
	cors(),
	bodyParser.urlencoded({ extended: true })
);
app.use(bodyParser.json());

app.get("/getFormEnums", function (req, res) {
	try {
		const FormEnums = JSON.parse(
			fs.readFileSync(__dirname + "/data/FormEnums.json")
		);

		res.send(FormEnums);

		res.end();
	} catch (error) {
		console.log(error);
	}
});

app.put("/putFormEnums", function (req, res) {
	try {
		const { favouriteSports, rtcInitiationReasons } = req.body;

		const FormEnums = JSON.parse(
			fs.readFileSync(__dirname + "/data/FormEnums.json")
		);

		FormEnums.favouriteSports.push;

		res.end();
	} catch (error) {
		console.log(error);
	}
});

//TODO: Agregar imagen a DB de padrinos

//TODO: Crear endpoint para crear padrino

app.post("/requestPadrino", function (req, res) {
	try {
		let Matches = [];

		const Answer = req.body;

		const Padrinos = JSON.parse(
			fs.readFileSync(__dirname + "/data/Padrinos.json")
		);

		Padrinos.forEach((padrino) => {
			if (padrino.emotional === Answer.emotional) Matches.push(padrino.id);
			if (padrino.favouriteSport === Answer.favouriteSport)
				Matches.push(padrino.id);
			if (padrino.foodTaste === Answer.foodTaste) Matches.push(padrino.id);
			if (padrino.hobbies === Answer.hobbies) Matches.push(padrino.id);
			if (padrino.musicTaste === Answer.musicTaste) Matches.push(padrino.id);
			if (padrino.oddparentType === Answer.oddparentType)
				Matches.push(padrino.id);
			if (padrino.rtcInitiationReason === Answer.rtcInitiationReason)
				Matches.push(padrino.id);
			if (padrino.socialAptitudes === Answer.socialAptitudes)
				Matches.push(padrino.id);
		});

		const MatchedPadrino = Padrinos.find(
			(P) => P.id == MostOcurrentInArray(Matches)
		);

		res.json(MatchedPadrino);

		res.end();
	} catch (error) {
		console.log(error);
	}
});

app.get("*", function (req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT, () =>
	console.log(`Listening port: ${process.env.PORT}`)
);
