const {Router}=require('express')
const router=Router()

router.get('/',(req,res)=>res.send('Hit Root!'))

module.exports=router


