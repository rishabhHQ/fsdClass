// Core module

// 1. fs module, imported usin require 
const ab = require('fs');
ab.writeFileSync("dummy.txt", "Learning Code");

// 2. os module
const xy = require('os');
console.log(xy.platform());     // o/p = win32 even if its 64 it will be win32
console.log(xy.hostname());     // user/client name
console.log(xy.cpus());         // cpu information
// 
console.log(process.cwd());     // cwd: current workin directory, o/p: path
console.log(process.pid);       // id of nodejs application

// 3. colors
const color = require('colors');    // before usin tis first do npm install colors
console.log(color.red("Hello"));    // red color
console.log(color.yellow("World")); // yellow color
console.log(color.black("good"));   // black color