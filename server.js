const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Apni Manzil - Website is Live!</h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running'));
