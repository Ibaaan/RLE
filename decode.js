let fs = require('fs');
let str = fs.readFileSync("code.txt").toString();

let outputString = "";

for(let i = 0; i < str.length; i++){
    if(str[i] == '#'){
        let n = str[i+1].charCodeAt(0);
        for(let j = 0; j < n; j++){
            outputString += str[i+2];
        }
        //console.log(outputString);
        i += 2;
        
    }
    else{
        outputString += str[i];
    }
}
fs.writeFileSync('decode.txt', outputString);