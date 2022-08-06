const Account=require('../models/account')



/* create or find */
const getAllAcounts=async (req,res)=>{
    const allAccounts=await Account.find()
    res.status(200).json(allAccounts)
}
const getAccountById=async (req,res)=>{
    const {id}=req.params
    const foundAccount=await Account.findById(id)
    !foundAccount[0]?res.status(200).json(foundAccount):
    res.status(200).json({alert:"Account not found"})
}
const createAccount=async (req,res)=>{
    const {name,icon}=req.body
    const newAccount=await Account.create({name,icon})
    res.status(200).json(newAccount)
}




/*const createAccount=async (name,icon,reputation,threads,replies,watchlist,res)=>{
    const newAccount=await Account.create({
        name,icon,reputation,threads,replies,watchlist})
    res.status(200).json(newAccount)
}*/
const getOrCreateAccount=async (req,res)=>{
    const {name,icon,reputation,threads,replies,watchlist}=req.body
    const foundAccount=await Account.find({
        name,icon,reputation,threads,replies,watchlist})
    !foundAccount[0]?createAccount(name,icon,reputation,threads,replies,watchlist,res):
    res.status(200).json(foundAccount)
}

/* update */
const updateAccount=async (req,res)=>{
    const body= req.body 
    res.status(200).json({name:"Larry"})
}

module.exports={
    getAllAcounts,
    getAccountById,
    createAccount,
    updateAccount
}


 
 