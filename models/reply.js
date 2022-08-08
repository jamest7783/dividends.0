const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Reply=new Schema(
    {
        thread:{type:Schema.Types.ObjectId,ref:'Thread'},
        author:{type:Schema.Types.ObjectId,ref:'Account'},
        text:{type:String,required:true},
        upVotes:{type:Number,required:true,default:0},
        downVotes:{type:Number,required:true,default:0}
    },
    {timestamps:true}
)

module.exports=mongoose.model('Reply',Reply)
