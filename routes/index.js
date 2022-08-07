const {Router}=require('express')
const router=Router()
const {equity,account,thread}=require('../controllers')

/* test connection to root */
router.get('/test',(req,res)=>res.send('Hit Root!'))

/* equity market data */
router.get('/equity/historical',equity.getHistoricalData)   
router.get('/equity/summary',equity.getSummary)           
router.get('/equity/news',equity.getSymbolNews)  

/* equity socials */
router.post('/socials/create',equity.createSocials)
router.get('/socials',equity.getAllSocials)
router.get('/socials/find',equity.getSocials)
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
// NO .get b/c read from .populate() in equity controllers
//router.put('/thread/update',thread.updateThread)
//router.delete('/thread/delete',thread.deleteThread)



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


