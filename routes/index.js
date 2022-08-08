const {Router}=require('express')
const router=Router()
const {equity,account,thread,reply}=require('../controllers')

router.get('/test',(req,res)=>res.send('Hit Root!'))

router.get('/equity/historical',equity.getHistoricalData)   
router.get('/equity/summary',equity.getSummary)           
router.get('/equity/news',equity.getSymbolNews)  

router.post('/socials/create',equity.createSocials)
router.get('/socials',equity.getAllSocials)
router.get('/socials/find',equity.getSocials)  
router.put('/socials/update',equity.updateSocials)
router.delete('/socials/delete',equity.deleteSocials)

router.get('/accounts',account.getAllAcounts)
router.get('/account/:id',account.getAccountById)
router.post('/account/create',account.createAccount)
router.put('/account/update/:id',account.updateAccount)
router.delete('/account/delete/:id',account.deleteAccount)

router.post('/thread/create',thread.createThread)
router.get('/threads',thread.getAllThreads)
router.delete('/thread/delete/:id',thread.deleteThread)

router.post('/reply/create',reply.createReply)
router.delete('/reply/delete/:id',reply.deleteReply)
router.put('/reply/update/:id',reply.updateReply)


module.exports=router


