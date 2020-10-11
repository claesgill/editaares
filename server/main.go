package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/gorilla/handlers"
	"net/http"
	"log"
	"encoding/json"
	"os/exec"
)

const message = "Hello World"

func main(){
	// Router
	router := mux.NewRouter()
	// CORS
	header  := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"})
	origins := handlers.AllowedOrigins([]string{"*"})
	// Routes
	router.HandleFunc("/", home).Methods("GET")
	router.HandleFunc("/post/url", postURL).Methods("POST")
	// router.HandleFunc("/valid", checkValidRepo).Methods("GET")

	// Start server or log error
	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(header, methods, origins)(router)))
}


func home(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("Hello world"))
}

func postURL(w http.ResponseWriter, r *http.Request){
	var link Link
	json.NewDecoder(r.Body).Decode(&link)
	// TODO: Make response better
	fmt.Println(link.URL)
	valid := checkValidRepo(link.URL)
	if valid {
		w.Write([]byte("{\"valid\": true}"))
	} else {
		w.Write([]byte("{\"valid\": false, \"msg\": Repo '" + link.URL + "' does not exist or repo might be private}"))
	}

	// TODO: Make OS call to docker and run a docker container
	if valid {
		cmd := exec.Command("docker", "run", "-di", "react:1")
		output, err := cmd.Output()
		if err != nil {}
		fmt.Println(string(output))
	}
}

func checkValidRepo(url string)(bool){
	// TODO: this failes if link is not complete..
	res, err := http.Get(url)
	if err != nil { return false }
	if res.StatusCode != 200 { return false }
	return true
}

type Link struct {
    URL string `json:"url"`
}

// type Response struct {
// 	msg string `json:"msg"`
// 	valid bool `json:"valid"`
// }