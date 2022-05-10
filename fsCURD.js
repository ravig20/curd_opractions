const fs = require('fs');
const path = require('path');
const userImagesdir = path.join(__dirname,"foldername");// name of the folder , __dirname means Current Directory
const fileuser = `${ userImagesdir}/filename.txt`;// name of the file for updating, deleting etc..

//creat a file NEW FILE
 fs.writeFileSync(fileuser,"this is my first image");

 // READ A FINLE
fs.readFile(fileuser,'utf-8',(err,item)=>{
    console.log(item);
});

//adding a data in a file
fs.appendFile(fileuser,"add more data",(err)=>{
    if (!err) console.log("add done!")
});

//rename a file 
fs.rename(fileuser,`${userImagesdir}/imagechange.txt`,(err)=>{
    if(err) throw err;
    console.log("rename done");

})

// deleting a file
fs.unlink(fileuser,(err)=>{
    if(err) throw err;
    console.log("delete file");
})
