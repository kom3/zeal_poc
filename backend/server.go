package main

import (
	"stocks_data_crawler/utils"

	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()

	utils.InitialiseRoutes(r)

	r.Run()

}
