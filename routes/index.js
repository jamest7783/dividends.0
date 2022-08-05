const {Router}=require('express')
const router=Router()

const {equities}=require('../controllers')
const { getSummary } = require('../controllers/equityController')

router.get('/',(req,res)=>res.send('Hit Root!'))
router.get('/historical',equities.getHistoricalData)
router.get('/summary',equities.getSummary)

module.exports=router


