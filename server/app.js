const express = require('express')

const app = express()

app.use(express.json())

const start = async () => {
    try {
        app.listen(5000, () => {
            console.log(`Server started on port: 5000`)
        })
    } catch (e) {
        console.log(e)
    }
}


start()




