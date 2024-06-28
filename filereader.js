const files = require("fs");
let fi = `blog_4.md`;
files.readFile(fi, "utf8", (err, data) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(data);
});

const content = "Ashiq";
files.appendFile(fi, content, err =>{
  if(err){
    console.err;
    return;
  }
});

