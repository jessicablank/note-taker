let notes = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");

module.exports = function (app) {
   //get notes from the database
 app.get("/api/notes",(request,response)=>{
    response.json(notes)
 })

 //saving a note to the database and adding a randomly generated
 //unique id
 app.post("/api/notes", (request, response)=>{
    const newNote = request.body;
    newNote.id = uuidv4();
    notes.push(newNote);
    response.json(newNote);
 })

 //deleting the note from the database
 app.delete("/api/notes/:id", (request, response)=>{
    var noteswithOneRemoved = notes.filter((each)=>each.id !== (request.params.id))
    notes = noteswithOneRemoved;
    response.send("Unique id is randomly generated for each note thanks to npm uuid.");
 })

 //showing the active note when the user clicks on it
 app.get("/api/notes/:id", (request, response)=>{
   var chosenNote = notes.filter((each)=>each.id === (request.params.id))
   activeNote = chosenNote;
   response.send("Unique id is randomly generated for each note thanks to npm uuid.");
})
}