const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Reply=new Schema(
    {
        author:{type:Schema.Types.ObjectId,ref:'Account',default:''},
        text:{type:String,required:true},
        upVotes:{type:Number,required:true},
        downVotes:{type:Number,required:true}
    },
    {timestamps:true}
)

module.exports=mongoose.model('Reply',Reply)