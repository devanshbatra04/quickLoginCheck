const express           = require('express'),
      bodyParser        = require('body-parser');
const app               = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/login', (req, res) => {
    console.log(req.body);

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