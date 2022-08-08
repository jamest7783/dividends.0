const {Router}=require('express')
const router=Router()
const {equity,account,thread,reply}=require('../controllers')

/* test connection to root */
router.get('/test',(req,res)=>res.send('Hit Root!'))

/* equity market data */
router.get('/equity/historical',equity.getHistoricalData)   
router.get('/equity/summary',equity.getSummary)           
router.get('/equity/news',equity.getSymbolNews)  

/* equity socials */
router.post('/socials/create',equity.createSocials)
router.get('/socials',equity.getAllSocials)
router.get('/socials/find',equity.getSocials) // <-- uses req.body instead of ID 
router.put('/socials/update',equity.updateSocials)
router.delete('/socials/delete',equity.deleteSocials)

/* account */
router.get('/accounts',account.getAllAcounts)
router.get('/account/:id',account.getAccountById)
router.post('/account/create',account.createAccount)
router.put('/account/update/:id',account.updateAccount)
router.delete('/account/delete/:id',account.deleteAccount)

/* thread */
router.post('/thread/create',thread.createThread)
router.delete('/thread/delete',thread.deleteThread)

/* reply */
router.post('/reply/create',reply.createReply)
router.delete('/reply/delete/:id',reply.deleteReply)
router.put('/reply/update/:id',reply.updateReply)


module.exports=router


