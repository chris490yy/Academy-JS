var fs = require('fs');
var filename = process.argv[2];
var count = [0,0,0,0,0,0,0,0];

fs.exists(filename, (exists) => {
    if(!exists){
        console.log('the file is not found');
    } else{
        countWords();
    }
});

function countWords() {
    var readableStream = fs.createReadStream(filename);
    var words = [];

    readableStream.setEncoding('utf8');
    readableStream.on('open', function() {
        console.log('start to stream');
    });

    readableStream.on('data', function(chunk) {
        console.log('in processing data');    
        words = chunk.split(' ');
        words.forEach(countLength);
        resultOutput();
    });
}


function resultOutput() {
    console.log('<3: ' + count[2]);
    console.log('=3: ' + count[3]);
    console.log('=4: ' + count[4]);
    console.log('=5: ' + count[5]);
    console.log('=6: ' + count[6]);
    console.log('>6: ' + count[7]);
}

function countLength(element) {
    if(element.length < 3) {
            count[2]++;
        } else if(element.length > 6) {
            count[7]++;
        } else {
            count[element.length]++;
        }
}