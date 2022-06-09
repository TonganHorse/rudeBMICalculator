const express = require('express');
const res = require('express/lib/response');
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '../client')))







port = process.env.PORT || 80

app.listen(port, () => {
    console.log(`listening on ${port}`)
})