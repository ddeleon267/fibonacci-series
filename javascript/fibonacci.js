function fibonacci(num) {
  if (num === 0 || num === 1) return num
  
  const sequence = []
  for (let i = 0; i <= num; i++){
    if (i === 0 || i === 1){
      sequence.push(i)
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2])
    }
  }
  return sequence[sequence.length - 1]
}
 /*
  4. pseudocode

  Create empty array
  return num if num === 0 || num ===1
  start counter at 0
  if counter === 0 || counter === 1
    push counter
  else
    push array[counter - 1] + array[counter - 2]
  end
  array[-1]
*/ 

/*
  1. Understand problem
  Given a num, find that num's term in the fibonacci series, where
  we start at 0, then 1, then each subsequent term is sum of prev 2 terms. 
*/

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", fibonacci(4));

  console.log("");

  console.log("Expecting: 13");
  console.log("=>", fibonacci(7));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
