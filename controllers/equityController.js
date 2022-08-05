const yahooFinance=require('yahoo-finance')
let googleNewsAPI = require("google-news-json");
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

const getSymbolNews=async (req,res)=>{
    let {symbol}=req.body
    let news=await googleNewsAPI.getNews(googleNewsAPI.SEARCH,symbol,"en-GB")
    res.status(200).json(news) 
}

const getCommentary=async (req,res)=>{
    let {symbol}=req.body
}

module.exports={
    getHistoricalData,
    getSummary,
    getSymbolNews,
    getCommentary
}