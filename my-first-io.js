const fs = require('fs')

let result = "";
result = process.argv[2];
var buf = fs.readFileSync(result);
const str = buf.toString();
console.log(str.split("\n").length - 1);