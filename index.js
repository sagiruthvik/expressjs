 var express = require('express');
 var bodyParser     =        require("body-parser");
 var path = require('path');
 var json = require('./data')
 var exphbs  = require('express-handlebars');

//console.log(path.join(__filename));
 var port = process.env.PORT || 5000;

 var app = express();

//  var logger = (req, res, next) => {
//     console.log("hi");
//     next();
//  }
//  app.use(logger);

//  app.get('/api/data:id', (req, res) =>{
//      res.json(json.filter(each => each.id === parseInt(req.params.id)));
//     // res.sendFile(path.join(__dirname, "index.html"));
//     res.end();
//  })


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('index',{
        title : "Home Page",
        title2 : "members data",
        json
    });
     console.log("from /get");
});

app.post('/post', function (req, res) {
    var newjson = {
        id : 6,
        name : req.body.name,
        age : req.body.age,
        email : req.body.email
    }

    if(!newjson.name || !newjson.age || !newjson.email){
       // console.log("from /post");
        return res.status(400).json({msg : "please enter all the feilds"});
    }
    console.log("from /post");
    json.push(newjson);
    //res.json(json);
    res.redirect('/');
});
 app.listen(port, () => {console.log(`server running on port ${port}`)});