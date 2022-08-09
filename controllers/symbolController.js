const yahooFinance=require('yahoo-finance')
const googleNewsAPI = require("google-news-json");
const Symbol=require('../models/symbol')


const createSymbol=async (req,res)=>{
    const {symbol}=req.body
    const newSymbol=await Symbol.create({symbol})
    res.status(200).json({newSymbol})
}

const getQuotes=async (req,res)=>{
    const {symbol}=req.body
    const foundSymbol=await Symbol.find({symbol})
    await yahooFinance.historical({
        symbol:"TSLA",from:"2012-01-01",to:"2012-12-31",period:"d"
    },function(error,quotes){
        if(error){throw error}
        if(!quotes[0]){res.status(200).json({alert:'Ticker & Ticker Quotes not found.'})}
        else{ 
             
            const appendQuotes=async ()=>{
              
                 foundSymbol[0].data.quotes=quotes
                //foundSymbol.save()
            }
            appendQuotes() 
        } 
    })

    res.status(200).json(foundSymbol)
}
 


module.exports={
    createSymbol,
    getQuotes
}   