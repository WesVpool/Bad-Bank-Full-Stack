var express     = require('express');
var app         = express();
var cors        = require('cors');
var dal         = require('./dal.js');

// serve static files from public
app.use(express.static('public'));
app.use(cors());

// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    //else create user
    dal.create(req.params.name, req.params.email, req.params.password)
        .then((user) => {
            console.log(user);
            res.send(user);
        });
});


// login user
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email:      req.params.email,
        password:   req.params.password
    });
});

// all accounts
app.get('/account/all', function (req, res) {
    dal.all()
        .then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

// deposit
app.get('/account/deposit/:email/:amount', function (req, res) {
    res.send({
        email:          req.params.email,
        depositAmount:  req.params.amount    
    });
});

// withdraw
app.get('/account/withdraw/:email/:amount', function (req, res) {
    res.send({
        email:          req.params.email,
        withdrawAmount:  req.params.amount    
    });
});

app.get('/account/balance', function (req, res) {
    res.send({
        name:       'peter',
        email:      'peter@mit.edu',
        balance:    0
    });
});

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port)