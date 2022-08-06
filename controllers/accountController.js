const Account=require('../models/account')


const createAccount=async (name,reputation,threads,replies,watchlist,res)=>{
    const newAccount=await Account.create({
        name,reputation,threads,replies,watchlist})
    res.status(200).json(newAccount)
}
const getOrCreateAccount=async (req,res)=>{
    const {name,reputation,threads,replies,watchlist}=req.body
    const foundAccount=await Account.find({
        name,reputation,threads,replies,watchlist})
    !foundAccount?createAccount(name,reputation,threads,replies,watchlist,res):
    res.status(200).json(foundAccount)
}

module.exports={
    getOrCreateAccount
}


 
 