const yahooFinance=require('yahoo-finance')
const googleNewsAPI = require("google-news-json");
const Symbol=require('../models/symbol')


const createSymbol=async (req,res)=>{
    const newSymbol=await Symbol.create({symbol:'tsla'})
    res.status(200).json({newSymbol})
}
const updateSymbol=async (req,res)=>{
    const {id}=req.params
    const foundSymbol=await Symbol.findById(id)
 
    await yahooFinance.historical({
        symbol:"TSLA",from:"2012-01-01",to:"2012-12-31",period:"d"
    },function(error,quotes){
        if(error){throw error}
        if(!quotes[0]){res.status(200).json({alert:'Ticker & Ticker Quotes not found.'})}
        else{
            foundSymbol.data.quotes=quotes
            foundSymbol.save()
        }
    })

    res.status(200).json(foundSymbol)
}



module.exports={
    createSymbol,
    updateSymbol
}   