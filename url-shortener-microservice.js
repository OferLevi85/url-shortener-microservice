    var url = require('url');
    var express = require('express');
    var app = express();

    app.get("*", function(req, res) {
        
        // { "original_url":"http://foo.com:80", "short_url":"https://little-url.herokuapp.com/8170" }
        var jsonResponse = JSON.stringify(
            { 
                "original_url":"https://originalURLExample.com",
                "short_url": "https://ofer-url-short-microservice.herokuapp.com/shortendExample"
            });
        res.end(jsonResponse);
    })
    app.listen(process.env.PORT || 8080);