const express = require('express')
var path = require('path');
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000)

app.get('/:id', function (req, res) {
    console.log(req);
    console.log(req.body);
    console.log(req.params);
    res.render('face')
})
