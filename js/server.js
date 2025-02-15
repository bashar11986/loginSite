const expr = require('express');
const app = expr();
const mssql = require("mssql");

// Get request
app.get('/', function (req, res) {

    // Config  database credential
    const config = {
        user: 'bmcf',
        password: 'A@123456789',
        server: '172.25.22.206',
        database: 'cfmanagement'
    };

    // Connect to database
    mssql.connect(config, function (err) {

        // Create Request object to perform
        // query operation
        let request = new mssql.Request();

        // Query to the database and get the records
        request.query('select * from Folders',
            function (err, records) {

                if (err) console.log(err)
                //console.log("records: ", records);
                // Send records as a response
                // to browser
                res.send(records);

            });
    });
});
console.log("mssql: ", mssql);
let server = app.listen(5000, function () {
    console.log('Server is listening at port 5000...');
});