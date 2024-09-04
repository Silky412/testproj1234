
// const mongoose=require('mongoose')
// const schema=mongoose.Schema(
//     {
//         name:{
           
//             type:String
//         },
//         lastName:{
        
//             type:String
//         }
//     }
// )
// module.exports=mongoose.model("backdata",schema)



const mongoose=require("mongoose")
const schema=mongoose.Schema(

    {
        name:{
            type:String
        },
        lastName:{
            type:String

        }
    }
)
module.exports=mongoose.model("backenddata",schema)


