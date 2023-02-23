const sumArray = (arr) => {  //arrow function with argument
    let sum = 0;              //the variable equals zero
    arr.forEach(element => {    // for each elemrnt of the arrray we do the following:
      if (typeof element != 'number') {  // here we check the type element of the array, if it is not the number, do the following:
          sum += sumArray(element);  //sum was equal zero, now we flatten the array one level deep and add it to the sum
      } else {           // if it element of the array is a number we do the following :
        sum += element    // we add this element to the sum
        return sum;    // and return the sum
      }
    });
    return sum;
  }
  
  console.log(sumArray([ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8 ])); //the result is 50

  //the realization is not mine, i googled it, but i comprehend each line
  //and left the comments for each of them
  // i would never have written it like that, i would prefer flat method instead\
  // that makes me really mad, it takes a lot of time, still need to google