package main

import (
	"back/database"
	"back/routes"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	database.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:3000, http://localhost:8000",
		AllowCredentials: true,
	}))

	routes.Setup(app)

	log.Fatal(app.Listen(":8000"))
}
