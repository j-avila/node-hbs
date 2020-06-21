http = require("http")

http
	.createServer((req, resp) => {
		resp.writeHead(200, { "Content-Type": "application/json" })

		let output = {
			name: "jose",
			age: 35,
			url: req.url,
		}

		resp.write(JSON.stringify(output))
		// resp.write("Hola Mundo")
		resp.end()
	})
	.listen(8080)

console.log("listenging port 8080")
