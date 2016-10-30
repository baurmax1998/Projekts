'use strict'
var express = require("express");
var mysql = require("mysql");
var app = express();

var connection = mysql.createPool({
    connectionLimit: 50
    , host: "localhost"
    , user: "root"
    , passwort: ""
    , database: "sampleDB"
});

app.use(express.static('public'));

app.get("/", function (req, resp) {
    resp.end('It Works!! Path Hit: ' + req.url);
    //    connection.getConnection(function (error, tempCont) {
    //        if (!!error) {
    //            tempCont.release();
    //            console.log("Error");
    //        } else {
    //            console.log("connected");
    //
    //            tempCont.query("Select * from mySamlpeTable", function (error, rows, fields) {
    //                tempCont.release();
    //                if (!!error) {
    //                    console.log("Error in the Query");
    //                } else {
    //                    console.log("Sucessful query");
    //                    resp.json(rows);
    //                    //parse with your rows/fields
    //                }
    //            })
    //        }
    //    })
});

app.listen(1337, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});