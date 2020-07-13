let notes = require("../db/db.json")
const { response } = require("express")





module.exports = function (app) {
 app.get("/api/notes",(request,response)=>{
    response.json(notes)
 })

 app.post("/api/notes", (request, response)=>{
    const newNote = request.body;
    newNote.id = Number(Math.random().toString().slice(2,13));
    notes.push(newNote);
    response.json(newNote);
 })

 app.delete("/api/notes/:id", (request, response)=>{
    var noteswithOneRemoved = notes.filter((each)=>each.id !== Number(request.params.id))
    console.log(request.params.id)
    console.log(noteswithOneRemoved);
    notes = noteswithOneRemoved;
    response.send("works");
 })

}