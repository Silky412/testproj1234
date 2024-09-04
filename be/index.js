
const expr = require("express")
const appp = expr()
const bp=require("body-parser")
const routes=require("./routes/Router")
const mongoose=require("mongoose")
appp.use(bp.json())
appp.use(routes)

mongoose.connect('mongodb+srv://silky:12345@cluster1.rhqpv.mongodb.net/backend?retryWrites=true')
mongoose.connection.once("open",()=>console.log("mongodb connected"))




console.log("test")
appp.listen(9000)



