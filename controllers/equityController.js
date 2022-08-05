const yahooFinance=require('yahoo-finance')
const Equity=require('../models/equity')


const getHistoricalData=async (req,res)=>{
    let {symbol,from,to,period}=req.body 
    await yahooFinance.historical({
        symbol,from,to,period
    },function(error,quotes){
        if(error){throw error}
        !quotes[0]?res.status(200).json({alert:'Ticker not found.'}):
        res.status(200).json(quotes)
    })
}

const getSummary=async (req,res)=>{
    let {symbol}=req.body
    await yahooFinance.quote({
        symbol,modules:['price','summaryDetail']
    },function(error,summary){
        if(error){throw error}
        !summary?res.status(200).json({alert:'Ticker not found.'}):
        res.status(200).json(summary)
    })
}

module.exports={
    getHistoricalData,
    getSummary
}