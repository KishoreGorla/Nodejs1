//Generally the module name and the variable name both are same
var fs = require('fs');


var sample = fs.readFileSync('sample.txt','utf8');
// utf8 is encoding format| you can find clean explanation here at http://stackoverflow.com/a/15128103/5388823 
console.log(sample);


fs.writeFileSync('output.txt',sample);