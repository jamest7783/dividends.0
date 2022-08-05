const {Router}=require('express')
const router=Router()

const {equities}=require('../controllers')

router.get('/',(req,res)=>res.send('Hit Root!'))
router.get('/historical',equities.getHistoricalData)

module.exports=router


