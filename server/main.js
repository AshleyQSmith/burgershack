import express from "express"
import bp from "body-parser"

let server = express()
const port = 3000

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())



import BurgerController from "./controllers/BurgerController"
let burgerController = new BurgerController()

server.use('/api/burgers', burgerController.router)

server.use((req, res, next) => {
  res.status(404).send("Route not found")
})


server.listen(port, () => {
  console.log("server is running on port", port)
})
