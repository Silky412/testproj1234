const routerExp=require("express")
const res = require("express/lib/response")
const router=routerExp.Router()
const schemaData=require("../schema/Schema")
console.log("test schema",schemaData)

const arr=["shopping","cooking","cleaning"]

router.get("/",async(req,res)=>{ 
    
      const d= await schemaData.find()
    
    res.send(d)
})

router.post("/add",async(req,res)=>{
    const d =await schemaData.create(req.body)
    res.send(d)
})
// router.delete("/delete",(req,res)=>
// {arr.pop()
   
// res.send(arr)}
// )

module.exports = router