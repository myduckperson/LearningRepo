const person = {
    name:"John",
    surname:"Due"
}
const mysql = require('mysql');

const leTroll = require('./moduled');
console.log(leTroll);


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "iGorr4502"
});

con.connect(function(err) {
    console.log("letsgoo")
    if (err) throw err;
    console.log("Connected!");
});