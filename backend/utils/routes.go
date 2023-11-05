package utils

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Error struct {
	Code int32  `json:"code"`
	Msg  string `json:"msg"`
}

type StandardResponeFormat struct {
	Error `json:"error"`
	Data  interface{} `json:"data"`
}

func (s StandardResponeFormat) GetSuccessResponseFormat(data interface{}) StandardResponeFormat {
	s.Error.Code = 0
	s.Error.Msg = "success"
	s.Data = data
	return s
}

func (s StandardResponeFormat) GetFailureResponseFormat() StandardResponeFormat {
	s.Error.Code = 1
	s.Error.Msg = "Something went wrong(generic error)"
	s.Data = ""
	return s
}

func InitialiseRoutes(r *gin.Engine) {
	r.GET("/", func(c *gin.Context) {
		var s_res StandardResponeFormat
		resp := s_res.GetSuccessResponseFormat([]string{"A", "B", "C"})
		// resp := s_res.GetFailureResponseFormat()
		c.JSON(http.StatusOK, resp)
	})

}
