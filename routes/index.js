const {Router}=require('express')
const router=Router()
const {equity,account}=require('../controllers')

/* test connection to root */
router.get('/test',(req,res)=>res.send('Hit Root!'))

/* equity market data */
router.get('/equity/historical',equity.getHistoricalData)   
router.get('/equity/summary',equity.getSummary)           
router.get('/equity/news',equity.getSymbolNews)  

/* equity socials */
router.post('/socials/create',equity.createSocials)
//router.get('/socials')
//router.get('/equity/socials-all',equity.getAllSocials)
//router.put('/equity/socials/update/:id',equity.updateSocials)
//router.delete('/socials/delete')

/* account */
router.get('/account/all',account.getAllAcounts)
router.get('/account/:id',account.getAccountById)
router.post('/account/create',account.createAccount)
router.put('/account/update/:id',account.updateAccount)
router.delete('/account/delete/:id',account.deleteAccount)






/* thread */
//router.post('/thread/create',thread.createThread)
//router.get('/thread/:id',thread.getThread)
//router.put('/thread/update/:id',thread.updateThread)
//router.delete('/thread/delete/:id',thread.deleteThread)

/* reply */
//router.post('/reply/create',reply.createReply)
//router.put('/reply/update/:id',reply.updateReply)
//router.delete('/reply/delete/:id',reply.deleteReply)





/* reply */


module.exports=router


