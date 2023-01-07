//os , path

// const os = require("os");
// console.log(os.userInfo())
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.totalmem());
// console.log(os.freemem())


// console.log(__dirname);
// console.log(__filename)


const path = require('path');

// const extenionName = path.extname('index.txt');
// console.log(extenionName)

const joinName=path.join(__dirname+'/../views');
console.log(joinName)