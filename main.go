package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	http.Handle("/", http.FileServer(http.Dir("public")))

	log.Println("Listening on port 8080")
	http.ListenAndServe(":8080", nil)
}
