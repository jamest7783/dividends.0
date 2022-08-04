const yF=require('yahoo-finance')
const Equity=require('../models/equity')

const getData=async (req,res)=>{
    try {
        await yF.historical({
            symbol:'AAPL',
            from:'2021-01-01',
            to:'2021-07-01',
            period:'d'
        },function(err,quotes){
            res.send(quotes)
        })

    } catch(error){
        return res.status(500).json('error',error.message)
    }
}
module.exports={
    getData
}