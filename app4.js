// const { Socket } = require('dgram');
// const http = require('http');

// const server = http.createServer();

// server.on('connection',(Socket) => {
//     console.log('New connection...')
// });

// server.listen(3000);

// //console.log('Listening on port 3000...');
var time = 0;
var timer = setInterval(function(){
    console.log(time+ ' seconds have passed');
    time += 2;
    if(time > 8){
        clearInterval(timer);
    }
},2000);