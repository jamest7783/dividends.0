const yahooFinance=require('yahoo-finance')
const googleNewsAPI = require("google-news-json");
const Symbol=require('../models/symbol')


const createSymbol=async (req,res)=>{
    const {symbol}=req.body
    const createdSymbol=await Symbol.create({symbol})
    res.status(200).json({createdSymbol})
}



const findOrCreateSymbol=async (req,res)=>{
    const {symbol}=req.body
    const foundSymbol=await Symbol.find({symbol})
    if(foundSymbol){res.status(200).json(foundSymbol)}
    else{
        const createdSymbol=await Symbol.create({symbol})
        res.status(200).json(createdSymbol)
    }
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