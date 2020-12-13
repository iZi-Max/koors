let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let path = require('path');

let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/public');

// ROUTES: ------------------------
app.get('/', (req, res) => {
    res.render('./index.html')
});

app.get('/login', (req, res) => {
    res.render('./pages/login.html')
});

app.get('/register', (req, res) => {
    res.render('./pages/register.html')
});

app.get('/search/profile', (req, res) => {
    res.render('./pages/searchProfile.html')
});

app.get('/search', (req, res) => {

    res.render('./pages/searchLogin.html')

});

app.get('/profile', (req, res) => {
    res.render('./pages/profile.html')
});

app.get('/settings', (req, res) => {
    res.render('./pages/settings.html')
});

app.get('/discounts', (req, res) => {
    res.render('./pages/discounts.html')
});

app.get('/balance', (req, res) => {
    res.render('./pages/balance.html')
});

app.get('/index', (req, res) => {
    res.render('./pages/indexProfile.html')
});

app.get('/feedback', (req, res) => {
    res.render('./pages/feedback.html')
});

app.get('/buy', (req, res) => {
    res.render('./pages/buyTicket.html')
});

app.get('/print', (req, res) => {
    res.render('./pages/print/ticket.html')
});

app.get('/admin', (req, res) => {
    res.render(`./pages/admin/index.html`)
});

app.get('/admin/accounts', (req, res) => {
    res.render(`./pages/admin/profiles.html`)
});

app.get('/admin/accounts/passengers', (req, res) => {
    res.render(`./pages/admin/passengers.html`)
});

app.get('/admin/accounts/passengers/1', (req, res) => {
    res.render(`./pages/admin/passenger.html`)
});

app.get('/admin/accounts/workers', (req, res) => {
    res.render(`./pages/admin/workers.html`)
});

app.get('/admin/accounts/workers/1', (req, res) => {
    res.render(`./pages/admin/worker.html`)
});

app.get('/admin/accounts/add', (req, res) => {
    res.render(`./pages/admin/addAccount.html`)
});

app.get('/admin/flights', (req, res) => {
    res.render(`./pages/admin/flights.html`)
});

app.get('/admin/flights/search', (req, res) => {
    res.render(`./pages/admin/searchFlight.html`)
});

app.get('/admin/flights/archive', (req, res) => {
    res.render(`./pages/admin/archive.html`)
});

app.get('/admin/flights/1', (req, res) => {
    res.render(`./pages/admin/flight.html`)
});

app.get('/admin/flights/add', (req, res) => {
    res.render(`./pages/admin/addFlight.html`)
});

app.get('/errors/:number', (req, res) => {
    res.render(`./pages/error-codes/${req.params['number']}.html`)
});

// --------------------------------

let server = app.listen(5000, () => {
    console.log("Server listens on port: 5000")
})