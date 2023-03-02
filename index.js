const express = require('express')
const app = express()
const port = 3000

const handleIncomingUploadWebhook = require('./handler.js')

app.post('/box-skill', async (req, res) => {
    
    await handleIncomingUploadWebhook.handleUpload(req, res);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})