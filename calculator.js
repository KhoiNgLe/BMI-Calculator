const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/bmiCalculator', function(req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator',function(req,res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var n = weight/(height*height);
  res.send("Your BMI is " + n);

});


app.listen(port, function() {
  console.log('Run 3000');
});
