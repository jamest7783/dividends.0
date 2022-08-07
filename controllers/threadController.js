const equity = require('../models/equity')
const Thread=require('../models/thread')
const Equity=require('../models/equity')
const Account=require('../models/account')


//const createThread=async (req,res)=>{
//    const {creator,title}=req.body
//    const newThread=await Thread.create({creator,title})
//    res.status(200).json(newThread)
//}


const createThread=async (req,res)=>{
    const {equityId,accountId,title}=req.body
    const equity=await Equity.findById(equityId)
    const account=await Account.findById(accountId)
    const newThread=await Thread.create({equity:equityId,creator:accountId,title})
    equity.threads.push(newThread)
    equity.save()
    account.threads.push(newThread)
    account.save()
    res.status(200).json(newThread,equity,account)
}


 


module.exports={
    createThread
    //updateThread,
    //deleteThread
}



 