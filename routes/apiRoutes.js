var initialnotes = [
    "Go to store"
]


module.exports = function (app) {
 app.get("/api/notes",(request,response)=>{
    response.json(initialnotes)
 })



}