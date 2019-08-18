const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const AuthRoutes = require('./routes/auth-routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(AuthRoutes);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`App running on port ${PORT}`);
});
