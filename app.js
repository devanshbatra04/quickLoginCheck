const express           = require('express');
const app               = express();


app.set('view engine', 'ejs');

app.get('/', (req,res) => res.render('index'));

let port = process.env.PORT || 4000,
    ip   = '0.0.0.0';

app.listen(port, ip, () => console.log("Listening on port ",    port));