let notes = require("../db/db.json")
const { response } = require("express")





module.exports = function (app) {
   //get notes from the database
 app.get("/api/notes",(request,response)=>{
    response.json(notes)
 })

 //saving a note to the database and adding a randomly generated
 //unique id
 app.post("/api/notes", (request, response)=>{
    const newNote = request.body;
    newNote.id = Number(Math.random().toString().slice(2,13));
    notes.push(newNote);
    response.json(newNote);
 })

 //deleting the note from the databse
 app.delete("/api/notes/:id", (request, response)=>{
    var noteswithOneRemoved = notes.filter((each)=>each.id !== Number(request.params.id))
    notes = noteswithOneRemoved;
    response.send("works");
 })

 //Shows the active note
 app.get("/api/notes/:id", (request, response)=>{
   var chosenNote = notes.filter((each)=>each.id === Number(request.params.id))
   console.log(request.params.id)
   response.send("works");
})
}