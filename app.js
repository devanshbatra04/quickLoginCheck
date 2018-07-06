const express           = require('express'),
      bodyParser        = require('body-parser');
const app               = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.post('/login', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    if (
        req.body.email === 'chuck@example.com' && req.body.password === 'Norris@1234'
    ) res.sendStatus(200);
    else {
        res.sendStatus(406);
    }

});

app.get('/', (req,res) => res.render('index'));

let port = process.env.PORT || 4000,
    ip   = '0.0.0.0';

app.listen(port, ip, () => console.log("Listening on port ",    port));