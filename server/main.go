package main

import (
		"fmt"
	"github.com/gorilla/mux"
	"net/http"
	"google.golang.org/appengine"
)

func renderAngularPageHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w,"Hello i will render you Angular client side page")
}

func main() {
	r := mux.NewRouter()
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/"))).Methods("GET")

	http.Handle("/",r)
	//http.ListenAndServe(":8080",nil)
	appengine.Main()
	}
