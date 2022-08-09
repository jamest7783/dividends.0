const yahooFinance=require('yahoo-finance')
const googleNewsAPI = require("google-news-json");
const Symbol=require('../models/symbol')


const createSymbol=async (req,res)=>{
    const newSymbol=await Symbol.create({symbol:'tsla'})
    res.status(200).json({newSymbol})
}
const updateSymbol=async (req,res)=>{
    const {id}=req.params
    const updatedSymbol=await Symbol.findById(id)

    res.status(200).json(updatedSymbol)
}



module.exports={
    createSymbol,
    updateSymbol
}   