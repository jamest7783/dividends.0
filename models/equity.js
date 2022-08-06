const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Equity=new Schema(
    {



        symbol:{type:String,required:true},
        threads:[{type:Schema.Types.ObjectId,ref:'Thread',default:''}],
        follows:[{type:Schema.Types.ObjectId,ref:'Account',default:''}]



    },
    {timestamps:true}
)

module.exports=mongoose.model('Equity',Equity)

 