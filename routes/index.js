const {Router}=require('express')
const router=Router()
const {equity,account}=require('../controllers')



/* test connection to root */
router.get('/test',(req,res)=>res.send('Hit Root!'))

/* single equity */
router.get('/equity/historical',equity.getHistoricalData)
router.get('/equity/summary',equity.getSummary)
router.get('/equity/news',equity.getSymbolNews)
router.get('/equity/socials',equity.getOrCreateSocials)


/* all equities */
router.get('/all-socials',equity.getAllSocials)



/* account(s) */
router.get('/account/all',account.getAllAcounts)
router.get('/account/find/:id',account.getAccountById)


router.get('/account/create',account.getOrCreateAccount)
router.get('/account/update',account.updateAccount)


module.exports=router


