// var express = require('express');

// var app = express();

// app.set('view engine', 'ejs');

// app.get('/', function(req,res){
//     console.log('request was made: ' + req.url);
//     //res.send('This is the homepage.');
//     res.render('index');
// });

// app.get('/contact', function(req,res){
//     console.log('request was made: ' + req.url);
//     //res.send('This is the contactpage.');
//     res.render('contact');
// });

// app.get('/profile/:name', function(req,res){
//     var data = {age: 29, job: 'software', hobbies:['eating', 'fighting', 'fishing']};
//     res.render('profile', {person: req.params.name, data: data});
// });
// app.listen(3000);


// var express = require('express');

// var app = express();

// app.set('view engine', 'ejs');

// app.get('/', function(req,res){
//     console.log('request was made: ' + req.url);
//     //res.send('This is the homepage.');
//     res.render('index');
// });

// app.get('/contact', function(req,res){
//     console.log('request was made: ' + req.url);
//     //res.send('This is the contactpage.');
//     res.render('contact');
// });

// app.get('/profile/:name', function(req,res){
//     var data = {age: 29, job: 'software', hobbies:['eating', 'fighting', 'fishing']};
//     res.render('profile', {person: req.params.name, data: data});
// });
// app.listen(3000);





















var buffer1 = Buffer.alloc(100);
var buffer2 = new Buffer('GFG');
var buffer3 = Buffer.from([1, 2, 3, 4]);

// Writing data to Buffer
buffer1.write("Happy Learning");

// Reading data from Buffer
var a = buffer1.toString('utf-8');
console.log(a);

// Check object is buffer or not
console.log(Buffer.isBuffer(buffer1));

// Check length of Buffer
console.log(buffer1.length);

// Copy buffer
var bufferSrc = new Buffer('ABC');
var bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

var Data = bufferDest.toString('utf-8');
console.log(Data);

// Slicing data
var bufferOld = new Buffer('GeeksForGeeks');
var bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());

// concatenate two buffer
var bufferOne = new Buffer('Happy Learning ');
var bufferTwo = new Buffer('With GFG');
var bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());


