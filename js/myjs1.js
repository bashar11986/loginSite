let x;
x =7;
var y = 2;
const z =100; 
//console.log("my result is : " ,x+y)

// for(var i=1; i< z; i++)
// {
//     if(i == 5) break;
// console.log(i + " = ", Math.pow(i,2))
// }
// console.log("###___ Random ___###\n\n")
// for(var i=1; i< z; i = i+1)
// {
// var t = Math.random()*100;
// console.log( Math.floor(t))
// }
// var k = 3.4;
// console.log(k , Math.floor(k))
// console.log(k , Math.ceil(k))



// for(j= 0; j<= 10; j = j+2)
// {console.log(j)}

// var s = "basha@rgmail.com";
// if(s.includes("@")) console.log("t")
// else console.log("f")
// var n = s.indexOf("@")
// console.log(n)


// Requiring modules
const express = require('express');
const app = express();
const mssql = require("mssql");

// Get request
app.get('/', function (req, res) {

    // Config your database credential
    const config = {
        user: 'bmcf',
        password: 'A@123456789',
        server: '172.25.22.206',
        database: 'cfmanagement'
    };

    // Connect to your database
    mssql.connect(config, function (err) {

        // Create Request object to perform
        // query operation
        let request = new mssql.Request();

        // Query to the database and get the records
        request.query('select * from student',
            function (err, records) {

                if (err) console.log(err)

                // Send records as a response
                // to browser
                res.send(records);

            });
    });
});

let server = app.listen(5000, function () {
    console.log('Server is listening at port 5000...');
});
