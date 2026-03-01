const express = require('express');
const path = require('path');
const app = express();

// Render kadun milnara port kiva default 3000 port vapara
const PORT = process.env.PORT || 3000;

// Tumchya sarv files (index.html, style.css, images) 'public' folder madhye aahet
// Tyanna static mhanun serve karnyasathi hi line garjechi aahe
app.use(express.static(path.join(__dirname, 'public')));

// Jar koni main URL var aale tar 'public/index.html' file dakhavne
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server chalu karnya sathi
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
