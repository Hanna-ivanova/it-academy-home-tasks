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

// task 3
let someNumber = 0;
do {
  someNumber = prompt("Enter any number greater than 100");
}
while (someNumber < 100  && someNumber);
while (someNumber.replace (/\d/g, '').length) 
do {
  someNumber = prompt("Enter any number greater than 100");
}
while (someNumber < 100  && someNumber);

//03-homework
let array = [
  'mail@mail.312412',
  'mail213_123@mail.com',
  '_@mail.ru',
  '324mail@mail.ru',
  't@test.ru'
] 

function validateEmail(email) {
  const re = /\w+@[a-zA-Z0-9.-]+?\.[a-zA-Z]{2,6}/; //i have found so many regular expressions for e-mail validation, have a clue what every sign stands for, but no idea what the requirements for validations are
  return re.test(email);
}
    

    for (let i=0; i< array.length; i++) {
      console.log(validateEmail(array[i]));
    }