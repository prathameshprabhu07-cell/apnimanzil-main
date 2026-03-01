// Express framework load kara
const express = require('express');
const path = require('path');
const app = express();

// Render sathi PORT dynamic asne garjeche ahe (Default 10000)
const PORT = process.env.PORT || 10000;

// Tumche index.html, CSS ani JS files 'public' folder madhye asave
// He middleware static files serve karel
app.use(express.static(path.join(__dirname, 'public')));

// Main Route - Jeva koni tumchya URL var yeil
app.get('/', (req, res) => {
    // Jar index.html file baher asel tar path badla, pan 'public' folder best ahe
    res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
        if (err) {
            // Jar file sapdli nahi tar error dakhavel
            res.status(500).send("<h1>Apni Manzil - Website Setup Incomplete</h1><p>index.html file sapdli nahi.</p>");
        }
    });
});

// Server chalu karnyachi command
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Tumcha server successfully chalu jhala ahe port ${PORT} var!`);
});
