const express = require('express');
const url = require('url');
const path = require('path');

const Invoke_Hyperledger = require('./Invoke_Hyperledger');
const Query_Hyperledger = require('./Query_Hyperledger');

const app = express();

app.listen(8000, console.log(`App listening at http://localhost:8000`));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/employee.html'));
})

app.get('/image_employer', function (req, res) {
  res.sendFile(path.join(__dirname + '/src/employer_find_candidate.webp'));
})

app.get('/image_employee', function (req, res) {
  res.sendFile(path.join(__dirname + '/src/employee_CV_Writer.webp'));
})

app.get('/employee', function (req, res) {
  res.sendFile(path.join(__dirname + '/employee.html'));
})

app.get('/employer', function (req, res) {
  res.sendFile(path.join(__dirname + '/employer.html'));
})

app.get('/query_hyperledger', function (req, res) {
  q = url.parse(req.url, true).query;
  Query_Hyperledger('retrieve', q.key).then((response) => {
    res.send(response)
  });
});

app.get('/invoke_hyperledger', function (req, res) {
  q = url.parse(req.url, true).query;
  Invoke_Hyperledger('store', q.key, q.time, q.workExp, q.eduExp, q.contact).then((response) => {
    res.send({ "status": "success","key":response[0],"time":response[1],"workExp":response[2],"eduExp":response[3],"contact":response[4]})});
});
