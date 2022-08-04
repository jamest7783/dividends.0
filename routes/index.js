const {Router}=require('express')
const router=Router()

const {equities}=require('../controllers')

router.get('/',(req,res)=>res.send('Hit Root!'))
router.get('/market-data',equities.getData)

module.exports=router


