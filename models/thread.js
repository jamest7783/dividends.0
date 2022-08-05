const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Thread=new Schema(
    {
        title:{type:String,required:true},
        replies:[{type:Schema.Types.ObjectId,ref:'Reply',default:''}],
        creator:{type:Schema.Types.ObjectId,ref:'Account',default:''}
    },
    {timestamps:true}
)

module.exports=mongoose.model('Thread',Thread)

