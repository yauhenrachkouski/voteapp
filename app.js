require("dotenv").config();

const express = require("express");
const app = express();
const api = require("./routes/index");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for frontend
app.use(express.static('frontend'));

// Route for backend
app.use("/api", api);

// Route for rest
app.use("*", (req,res)=>{
  res.status(404).send("This route doesn't exist");
});

app.listen(process.env.PORT, process.env.HOST, () =>
	console.log(`Server listens http://${process.env.HOST}:${process.env.PORT}`)
);
