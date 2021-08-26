const express = require('express');
const app = express();
//console.log(app);


const server = app.listen(3000,() =>{
    console.log('Start Server : localhost: 3000');
})

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    res.render('index.html')
  })


  let mysql      = require('mysql');
  let connection = mysql.createConnection({
    host     : 'example.org',
    user     : 'bob',
    password : 'secret'
  });
  

  app.get('/db', function (req, res) {
    let pool  = mysql.createPool({
        connectionLimit : 10,
        host            : 'example.org',
        user            : 'bob',
        password        : 'secret',
        database        : 'my_db'
      });
      pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('select * from Test', function (error, results, fields) {
            res.send(JSON.stringify(results));
            console.log('results',results);
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
  })
  