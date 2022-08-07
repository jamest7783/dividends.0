const Thread=require('../models/thread')


const createThread=async (req,res)=>{
    const {creator,title}=req.body
    const newThread=await Thread.create({creator,title})
    res.status(200).json(newThread)
}


 


module.exports={
    createThread
    //updateThread,
    //deleteThread
}



let restaurant = await Restaurant.findById(req.params.id)
    let reviewBody = { ...req.body, restaurant: req.params.id }
    let newReview = await Review.create(reviewBody)
    
    restaurant.reviews.push(newReview._id)
    restaurant.save()
    res.send(newReview)