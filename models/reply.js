const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Reply=new Schema(
    {
        text:{type:String,required:true},
        upVotes:{type:Number,required:true},
        downVotes:{type:Number,required:true},
        author:{type:Schema.Types.ObjectId,ref:'Account',default:''}
    },
    {timestamps:true}
)

module.exports=mongoose.model('Thread',Thread)
