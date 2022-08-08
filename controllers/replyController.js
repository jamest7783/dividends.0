const Reply=require('../models/reply')
const Thread=require('../models/thread')
const Equity=require('../models/equity')
const Account=require('../models/account')

const createReply=async (req,res)=>{
    const {equityId,accountId,threadId,text}=req.body 
    //const equity=await Equity.findById(equityId)
    //const account=await Account.findById(accountId)
    const thread=await Thread.findById(threadId)
    const newReply=await Reply.create({thread:thread._id,text})
    thread.replies.push(newReply)
    thread.save()
    //account.replies.push(newReply) 
    //account.save()
    console.log(newReply)
    res.status(200).json(newReply)
}
const updateReply=async (req,res)=>{
    const {id}=req.params 
    const updatedReply=await Reply.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json(updatedReply)
} 
const deleteReply=async (req,res)=>{   
    const {id}=req.params
    const deletedReply=await Reply.findByIdAndDelete(id)
    res.status(200).json(deletedReply)
}

module.exports={
    createReply,
    deleteReply,
    updateReply
}