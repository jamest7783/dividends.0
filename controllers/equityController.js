const yahooFinance=require('yahoo-finance')
let googleNewsAPI = require("google-news-json");
const Equity=require('../models/equity')

/* get ticker historical data */
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

/* get ticker snapshot summary */
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

/* get current ticker news */
const getSymbolNews=async (req,res)=>{
    let {symbol}=req.body
    let news=await googleNewsAPI.getNews(googleNewsAPI.SEARCH,symbol,"en-GB")
    res.status(200).json(news) 
}


const getSocials=async (req,res)=>{
    let {symbol}=req.body
    let socials=await Equity.find()
    res.status(200).json(socials)
}


const findOrCreateSocials=async (req,res)=>{
    let {symbol}=req.body
    let socials=await Equity.find({symbol})
    res.status(200).json(socials)
}


Equity.f



module.exports={
    getHistoricalData,
    getSummary,
    getSymbolNews,
    findOrCreateSocials
} 