package main

import (
	"github.com/gorilla/mux"
	"net/http"

	"encoding/json"
	"io/ioutil"
	"cpa-project-server/config"
	"cpa-project-server/unitDiskGraph"
	"google.golang.org/appengine"
)


func testHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		http.Error(w, "Error reading request body",
			http.StatusInternalServerError)
	}
	var conf config.Config
	err = json.Unmarshal(body, &conf)
	if err != nil {
		panic(err)
	}
	var udg unitDiskGraph.UnitDiskGraph
	udg.SetUp(conf,50)
	json.NewEncoder(w).Encode(udg)
}

func main() {


	r := mux.NewRouter()
	r.Path("/test").HandlerFunc(testHandler).Methods("POST")
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/"))).Methods("GET")
	http.Handle("/",r)
	//http.ListenAndServe(":8080",nil)
	appengine.Main()
	}
