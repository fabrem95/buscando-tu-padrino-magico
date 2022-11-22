require("dotenv").config();
const fs = require("fs");

const express = require("express");

const app = express();

app.use(express.static("public"));

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

app.get("*", function (req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT, () =>
	console.log(`Listening port: ${process.env.PORT}`)
);
