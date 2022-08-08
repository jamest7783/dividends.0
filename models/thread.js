const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Thread=new Schema(
    {
        equity:{type:Schema.Types.ObjectId,ref:'Equity'},
        account:{type:Schema.Types.ObjectId,ref:'Account'},
        title:{type:String,required:true},
        replies:[{type:Schema.Types.ObjectId,ref:'Reply'}]
    },
    {timestamps:true}
)

module.exports=mongoose.model('Thread',Thread)

