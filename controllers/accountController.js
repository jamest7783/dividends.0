const Account=require('../models/account')


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
const updateAccountName=async (req,res)=>{
    const {id}=req.params
    const accountWithUpdatedName=await Account.findByIdAndUpdate(
        id,req.body,{new:true})
    res.status(200).json({accountWithUpdatedName})
}

// name,icon,reputation,threads,replies,watchlist




module.exports={
    getAllAcounts,
    getAccountById,
    createAccount,
    updateAccountName

}


 
 