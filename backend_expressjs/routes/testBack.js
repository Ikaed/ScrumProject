var express = require('express');
var router = express.Router();

//import fetch from "../node_modules/cross-fetch/node_modules/node-fetch/lib/index.js";
//fetch = require('cross-fetch/node_modules/node-fetch/lib/index.mjs');
//import fetch from 'node-fetch';
const fetch = require('node-fetch');

router.get('/', function(req, res, next) {
    res.send('Working  ok');
    //res.json({ ok: 'Working ?' })
});

router.get('/po', function(req, res, next) {

    
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + 'kiruna' + '&units=metric&appid=96b93715b2af3387f93252f194d5a149')
            .then(function (response) {
                return response.json();
            })
            .then(function (data){
                console.log(data);
                res.json(data);
    });

    /*axios
        .post(url, data, {
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(({data}) => {
            console.log(data);
    });*/
    
    //res.send('Working  ok');
    //res.json({ ok: 'Working ?' })
});

module.exports = router;