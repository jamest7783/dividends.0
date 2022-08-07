const yahooFinance=require('yahoo-finance')
const googleNewsAPI = require("google-news-json");
const Equity=require('../models/equity')

/* data */
const getHistoricalData=async (req,res)=>{
    const {symbol,from,to,period}=req.body 
    await yahooFinance.historical({
        symbol,from,to,period
    },function(error,quotes){
        if(error){throw error}
        !quotes[0]?res.status(200).json({alert:'Ticker not found.'}):
        res.status(200).json(quotes)
    })
}
const getSummary=async (req,res)=>{
    const {symbol}=req.body
    await yahooFinance.quote({
        symbol,modules:['price','summaryDetail']
    },function(error,summary){
        if(error){throw error}
        !summary?res.status(200).json({alert:'Ticker not found.'}):
        res.status(200).json(summary)
    })
}
const getSymbolNews=async (req,res)=>{
    const {symbol}=req.body
    const news=await googleNewsAPI.getNews(googleNewsAPI.SEARCH,symbol,"en-GB")
    res.status(200).json(news) 
}


/* socials */
const createSocials=async (req,res)=>{
    const {symbol}=req.body
    const newSocials=await Equity.create({symbol})
    res.status(200).json(newSocials)
}
const getAllSocials=async (req,res)=>{
    const allSocials=await Equity.find()
    res.status(200).json(allSocials) 
}
const getSocials=async (req,res)=>{
    const {symbol}=req.body
    const socials=await Equity.find({symbol})
    res.status(200).json(socials) 
}
const deleteSocials=async (req,res)=>{
    const {symbol}=req.body
    const deletedSocials=await Equity.findOneAndDelete({symbol})
    res.status(200).json(deletedSocials)
}


module.exports={
    getHistoricalData,
    getSummary,
    getSymbolNews,
    createSocials,
    getSocials,
    getAllSocials,
    deleteSocials
} 