const notes = require("../db/db.json")


module.exports = function (app) {
 app.get("/api/notes",(request,response)=>{
    response.json(notes)
 })

 app.post("/api/notes", (request, response)=>{
    notes.push(request.body);
    response.json(true);


 })

}