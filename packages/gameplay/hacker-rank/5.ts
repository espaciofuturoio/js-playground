// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the  function with the following parameter(s):

// : an integer
// Print

// Print a staircase as described above. No value should be returned.
// Note: The last line is not preceded by spaces. All lines are right-aligned.

// Input Format

// A single integer, , denoting the size of the staircase.

// Constraints

//  .

// Sample Input

// 6
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Explanation

// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase1(n: number) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i - 1) + "#".repeat(i + 1));
  }
}

function staircase2(n: number): void {
  Array.from({ length: n })
    .map((_, i) => " ".repeat(n - i - 1) + "#".repeat(i + 1))
    .forEach((row) => console.log(row));
}

staircase1(6);
staircase2(6);
