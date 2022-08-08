const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Account=new Schema(
    {
        name:{type:String,required:true,default:'new account'},
        icon:{type:String,required:true,default:'default image icon url'},
        reputation:{type:Number,required:true,default:10},
        threads:[{type:Schema.Types.ObjectId,ref:'Thread'}],
        replies:[{type:Schema.Types.ObjectId,ref:'Reply'}],
        watchlist:[{type:Schema.Types.ObjectId,ref:'Equity'}]
    },
    {timestamps:true}
)

module.exports=mongoose.model('Account',Account)
