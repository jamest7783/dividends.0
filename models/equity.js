const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Equity=new Schema(
    {
        symbol:{type:String,required:true},
        snapshot:{type:Object},
        news:{type:Object},
        historicalData:{type:Object},
        threads:[{type:Schema.Types.ObjectId,ref:'Thread'}],
        follows:[{type:Schema.Types.ObjectId,ref:'Account'}]
    },
    {timestamps:true}
)

module.exports=mongoose.model('Equity',Equity)

 