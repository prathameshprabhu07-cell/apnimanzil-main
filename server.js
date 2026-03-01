const express = require('express');
const path = require('path');
const app = express();

// RENDER SATHI ATYANT MHATVACHE: 
// Render swataha ek PORT assign karte, mhanun process.env.PORT vaparne garjeche ahe.
const PORT = process.env.PORT || 3000;

// Tumche static files (HTML, CSS, JS) 'public' folder madhye asaveet
app.use(express.static(path.join(__dirname, 'public')));

// Default route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
