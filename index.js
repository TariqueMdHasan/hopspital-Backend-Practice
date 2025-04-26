const express = require('express')
const app = express()

app.use(express.json())

const user = [
    {
        name: 'John',
        kidney: [{
            isHealthy: false
        }
    ]
    }
]



app.get("/", (req, res)=> {
    let totalKidney = user[0].kidney.length;
    let goodKidney = 0;
    let badKidney = 0;
    for(let i=0; i<user[0].kidney.length; i++){
        if(user[0].kidney[i].isHealthy){
            goodKidney++
        }else{
            badKidney++
        }
    }

    // res.send(`total number of kidney is: ${totalKidney} and number of good kidney is: ${goodKidney} and number of bad kidney is ${badKidney}`)
    res.json({
        Totalkidney: `total number of kidney is: ${totalKidney}`,
        goodKidney: `number of good kidney is: ${goodKidney}`,
        badKidney: `number of bad kidney is ${badKidney}`,
        // kidneyData: user[0].kidney
    })
    
})

app.post("/", (req, res)=> {
    const health = req.body.isHealthy
    user[0].kidney.push({
        isHealthy: health
    })
    let healthBool = (health)? "increased": "decreased"

    res.json({
        message: `kidney count manipulation ${healthBool}`
    })

})


app.delete("/", (req, res)=> {
    const posKideny = user[0].kidney.filter((item)=> item.isHealthy != false)
    user[0].kidney = posKideny
    const newUserData = user[0].kidney
    res.json({
        newUser: newUserData
    })
})
    


// app.put("/", (req, res)=> {
    
// })
app.listen(5000)