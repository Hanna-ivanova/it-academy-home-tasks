// task 1  the easier is the better, if needed i can try to do it in a bit complicated way, just let me know
let str = "#";
for (let i = str.length; i < 8; i++) {
    console.log(str.repeat(i)); 
}

//task 2
let chessline = "";
const uneven = "#"
const even = " ";
while (chessline.length < 64) {
    chessline += uneven + even;
 }
 for (let i = 1; i < 4; i++) {
    console.log (chessline.substring(1, 9));
    console.log (chessline.substring(2, 9));
}