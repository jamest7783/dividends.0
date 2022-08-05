const {Router}=require('express')
const router=Router()

const {equities}=require('../controllers')
const { getSummary } = require('../controllers/equityController')

router.get('/',(req,res)=>res.send('Hit Root!'))
router.get('/historical',equities.getHistoricalData)
router.get('/summary',equities.getSummary)
router.get('/news',equities.getSymbolNews)

module.exports=router


