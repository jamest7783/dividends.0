const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Account=new Schema(
    {
        name:{type:String,required:true},
        icon:{type:String,required:true},
        threads:[{type:Schema.Types.ObjectId,ref:'Thread',default:''}],
        replies:[{type:Schema.Types.ObjectId,ref:'Reply',default:''}],

    },
    {timestamps:true}
)

module.exports=mongoose.model('Account',Account)
