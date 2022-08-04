const db=require('../db')
const Equity=require('../models/equity')

db.on('error',console.error.bind(console,'MongoDB connection error...'))

const main=async ()=>{
    const equities=[
        {ticker:'AAPL'},
        {ticker:'TSLA'},
        {ticker:'VUG'}
    ]

    await Equity.insertMany(equities)
    console.log('Created and inserted some equities')
}

const run=async ()=>{
    await main()
    db.close()
}

run()