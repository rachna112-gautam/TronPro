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

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
