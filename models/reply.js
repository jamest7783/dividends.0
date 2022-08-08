const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Reply=new Schema(
    {
        equity:{type:Schema.Types.ObjectId,ref:'Equity',default:''},
        account:{type:Schema.Types.ObjectId,ref:'Account',default:''},
        thread:{type:Schema.Types.ObjectId,ref:'Thread',default:''},
        text:{type:String,required:true},
        upVotes:{type:Number,required:true,default:0},
        downVotes:{type:Number,required:true,default:0}
    },
    {timestamps:true}
)

module.exports=mongoose.model('Reply',Reply)
