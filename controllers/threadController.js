const Thread=require('../models/thread')
const Equity=require('../models/equity')
const Account=require('../models/account')

/* create thread and pass to equity & account */
const createThread=async (req,res)=>{
    const {equityId,accountId,title}=req.body
    const equity=await Equity.findById(equityId)
    const account=await Account.findById(accountId)
    const newThread=await Thread.create({equity,account,title})
    equity.threads.push(newThread)
    equity.save()
    account.threads.push(newThread)
    account.save()
    res.status(200).json(newThread)
}
const getAllThreads=async (req,res)=>{
    const threads=await Thread.find()
    res.status(200).json(threads)
}
const deleteThread=async (req,res)=>{
    const {id}=req.params
    const deletedThread=await Thread.findByIdAndDelete(id)
    res.status(200).json(deletedThread)
}

module.exports={
    createThread, 
    getAllThreads,
    deleteThread
}

 

 