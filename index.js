const express = require('express')
const app = express();

app.listen(3001, () => console.log('listening T 3000'))
app.use(express.state('public'))