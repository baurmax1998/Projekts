'use strict'
var express = require("express");
var mysql = require("mysql");
var app = express();


//var connection = mysql.createConnection({
//    host: "localhost"
//    , user: "root"
//    , passwort: ""
//    , database: "sampleDB"
//});

var connection = mysql.createPool({
    connectionLimit: 50
    , host: "localhost"
    , user: "root"
    , passwort: ""
    , database: "sampleDB"
});


//connection.connect(function (error) {
//    if (!!error) {
//        console.log("Error");
//    } else {
//        console.log("connected");
//    }
//});

app.get("/", function (req, resp) {
    //about msql
    //    connection.query("select *from mySamlpeTable", function (error, rows, fields) {
    //        if (!!error) {
    //            console.log("Error in the Query");
    //        } else {
    //            console.log("Sucessful query");
    //            console.log(rows);
    //            //parse with your rows/fields
    //        }
    //    })
    connection.getConnection(function (error, tempCont) {
        if (!!error) {
            tempCont.release();
            console.log("Error");
        } else {
            console.log("connected");

            tempCont.query("Select * from mySamlpeTable", function (error, rows, fields) {
                tempCont.release();
                if (!!error) {
                    console.log("Error in the Query");
                } else {
                    console.log("Sucessful query");
                    resp.json(rows);
                    //parse with your rows/fields
                }
            })
        }
    })
})


app.listen(1337);