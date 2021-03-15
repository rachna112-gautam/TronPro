// const fetch = require('node-fetch');

// const url = 'https://api.trongrid.io/v1/contracts/TTiNyKZzV9fyogNJZ24HtWzdf8ock9EdmS/events';

// const options = {
// 	method: 'GET',
// 	qs: { event_name: 'NewDeposit', order_by: 'block_timestamp,desc', limit: '10' }
// };

// fetch(url, options)
// 	.then((res) => res.json())
// 	.then((json) => console.log(json.data[0].result))
// 	.catch((err) => console.error('error:' + err));

//     var url = "mongodb://localhost:27017/";

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});