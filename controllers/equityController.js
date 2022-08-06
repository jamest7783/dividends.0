const yahooFinance=require('yahoo-finance')
const googleNewsAPI = require("google-news-json");
const Equity=require('../models/equity')

/* get ticker historical data */
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

/* get ticker snapshot summary */
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

/* get current ticker news */
const getSymbolNews=async (req,res)=>{
    const {symbol}=req.body
    const news=await googleNewsAPI.getNews(googleNewsAPI.SEARCH,symbol,"en-GB")
    res.status(200).json(news) 
}

/* get current ticker socials or create them */
const createSocials=async (symbol,res)=>{
    const socials=await Equity.create({symbol})
    res.status(200).json(socials)
}
const getOrCreateSocials=async (req,res)=>{
    const {symbol}=req.body
    const socials=await Equity.find({symbol})
    !socials[0]?createSocials(symbol,res):
    res.status(200).json(socials)
}

/* get all ticker socials */
const getAllSocials=async (req,res)=>{
    const allSocials=await Equity.find()
    res.status(200).json(allSocials)
}






module.exports={
    getHistoricalData,
    getSummary,
    getSymbolNews,
    getOrCreateSocials,
    getAllSocials
} 