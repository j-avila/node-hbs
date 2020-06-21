const express = require("express")
const app = express()
const hbs = require("hbs")

app.use(express.static(__dirname + "/public"))
hbs.registerPartials(__dirname + "/views/partials")
app.set("view engine", "hbs")
require("./hbs/helplers")

const port = process.env.PORT || 3000

let companyInfo = {
	sitename: "le basurero",
	username: "josefo",
	companyname: "da company",
	year: new Date().getFullYear(),
}
app.get("/", (req, res) => {
	res.render("index", companyInfo)
})

app.get("/about", (req, res) => {
	res.render("about", companyInfo)
})

app.listen(port, () => {
	console.log(`escuchando en el puerto ${port}`)
})
