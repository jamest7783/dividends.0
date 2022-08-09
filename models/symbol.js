const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Symbol=new Schema(
    {
        symbol:{type:String,required:true,default:''},
        data: {
            snapshot:{type:Object,required:true,default:{}},
            quotes:{type:Array,required:true,default:[]},
            news:{type:Object,required:true,default:{}}
        },
        socials: {
            threads:[{type:Schema.Types.ObjectId,ref:'Thread'}],
            follows:[{type:Schema.Types.ObjectId,ref:'Account'}]
        }
    },
    {timestamps:true}
)

module.exports=mongoose.model('Symbol',Symbol)

 