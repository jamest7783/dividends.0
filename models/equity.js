const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Equity=new Schema(
    {
        symbol:{type:String,required:true},
        threads:[{type:Schema.Types.ObjectId,ref:'Thread',default:''}],
        follows:{type:Number,required:true,default:0}
    },
    {timestamps:true}
)

module.exports=mongoose.model('Equity',Equity)

 