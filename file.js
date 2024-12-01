const { error } = require("console");
const fs = require("fs");
/*
//Sync....
fs.writeFileSync("./test.txt", "hii my name is Akash");

//Async...
fs.writeFile("./test.txt", "hii this is asynchronous ", (error) => {});

//Synchronous files always return something, you do not have to tell what you have to be return
const r = fs.readFileSync("./constant.txt", "utf-8");
console.log(r);

//In the case of Asynchronous type they do not return , you have to define in case of throwing a error
//or say print something what it will return via their function.
//if I write const r = fs.readFile("./constant.txt","utf-8",(err,result) here r showing void that is the thing
fs.readFile("./constant.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error occur");
  } else {
    console.log(result);
  }
});


//you can append any test or data continuously in your file
//because it is a string file it takes all value in string so in case date which is number you have to convert in local String then you can procced
fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
///Alternative
fs.appendFileSync("./test.txt", `${Date.now()} Hey there\n`);
//Output : 291732866137569 Hey there
//291732866146997 Hey there
//291732866150248 Hey there
//each time we execute the file.js file 
*/
//when we wanted to copy a file to a different file with different name
//fs.cpSync("./test.txt","./copy.txt");

//In case of delete you can use UnlinkSync
//fs.unlinkSync("./copy.js");

//for checking statistics of a file
console.log(fs.statSync("./test.txt"));
/* output : Stats {
  dev: 3284116,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 4222124651024896,
  size: 104,
  blocks: 0,
  atimeMs: 1732866150342.0837,
  mtimeMs: 1732866150248.816,
  ctimeMs: 1732866150248.816,
  birthtimeMs: 1732863119328.1816,
  atime: 2024-11-29T07:42:30.342Z,
  mtime: 2024-11-29T07:42:30.249Z,
  ctime: 2024-11-29T07:42:30.249Z,
  birthtime: 2024-11-29T06:51:59.328Z
}
  */