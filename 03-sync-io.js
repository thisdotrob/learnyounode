var fs = require('fs');  // Require fs module from Node core library
var contents = fs.readFileSync(process.argv[2], 'utf8');  // Synchronous method
console.log(contents.split('\n').length - 1);
