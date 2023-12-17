//console.log(process.argv[2], process.argv[3]);
function RLE(chari, n){
    let str = "";
    while (n > 255){
        str += "#" + String.fromCharCode(255) + chari;
        n -= 255;
    }
    str += "#" + String.fromCharCode(n) + chari;
    return str;
}

let fs = require('fs');
let str = fs.readFileSync("input.txt").toString();
let outputString = "";
let n = 1;

for (let i = 0; i < str.length-1; i++){
    if(str[i] == str[i+1]){
        n++;
    }
    else{
        if(n > 3 || str[i] == "#"){
            outputString += RLE(str[i], n);
        }
        else{
            for(let j =0; j < n;j++){
                outputString += str[i];
            }
        }
        n = 1;
    }
}
outputString += (n > 3 || str[str.length - 1] == "#") ? RLE(str[str.length - 2], n) : str[str.length - 1];
fs.writeFileSync('code.txt', outputString);