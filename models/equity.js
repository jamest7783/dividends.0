const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Equity=new Schema(
    {
        ticker:{type:String,required:true}
    },
    {timestamps:true}
)

module.exports=mongoose.model('Equity',Equity)

