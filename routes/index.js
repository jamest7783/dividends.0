const {Router}=require('express')
const router=Router()
const {equity,account}=require('../controllers')

/* test connection to root */
router.get('/test',(req,res)=>res.send('Hit Root!'))

/* equity(ies) */
router.get('/equity/historical',equity.getHistoricalData)
router.get('/equity/summary',equity.getSummary)
router.get('/equity/news',equity.getSymbolNews)
router.get('/equity/socials',equity.getOrCreateSocials)
router.get('/all-socials',equity.getAllSocials)

/* account(s) */
router.get('/account/all',account.getAllAcounts)
router.get('/account/:id',account.getAccountById)
router.post('/account/create',account.createAccount)
router.put('/account/update/name/:id',account.updateAccountName)


module.exports=router


