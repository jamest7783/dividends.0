const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Thread=new Schema(
    {
        equity:{type:Schema.Types.ObjectId,ref:'Equity',default:''},
        account:{type:Schema.Types.ObjectId,ref:'Account',default:''},
        title:{type:String,required:true},
        replies:[{type:Schema.Types.ObjectId,ref:'Reply',default:''}]
    },
    {timestamps:true}
)

module.exports=mongoose.model('Thread',Thread)

