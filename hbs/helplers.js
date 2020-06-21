const hbs = require("hbs")

// helplers
hbs.registerHelper("getYear", () => new Date().getFullYear())

hbs.registerHelper("toCaps", txt => {
	let words = txt.split(" ")
	words.forEach((word, index) => {
		words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
	})
	return words.join(" ")
})
