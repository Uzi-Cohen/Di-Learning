const fs = require('fs')
const contents = fs.readFileSync('text', 'utf8')
let final=0;
let counter = 0;
let flag = false;
for (let j = 0; j < contents.length; j++) {
  if (contents.substr(j, 1) === '<') {
    --final;
  }else{
    ++final;
  }
  counter++;
  if(final==-1 && flag == false){
    console.log("counter",counter);
    flag=true;
  }
}

console.log("final", final-1);
