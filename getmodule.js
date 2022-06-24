// This is the module getting function. it gets its module from moduleexp.js

var kishore = require('./moduleexp.js');// | ./ | is used to search in present directory.


// look here at the counter part, it is actually taking the arguments. and doing everything.
// We need to intialise the 'counter variable first.'
console.log(kishore.counter(['Hello','This is','Saif']));
console.log(kishore.adder(5,6));
console.log(kishore.bi);
console.log(kishore.adder(kishore.bi,44));