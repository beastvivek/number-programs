const isEven = function (number) {
  return number % 2 === 0;
}

const getEvenOrOdd = function (number) {
  return isEven(number) ? "Even" : "Odd";
}

const main = function () {
  console.log(getEvenOrOdd(11));
}

main();

/*
First checks for syntax error if any gives error and quits. If not, then goes forward.

Creates a global symbol table with no symbols 
Name of symbol | typeof Symbol | Value of Symbol

Then node reads line 1 right hand side. Finds function keyword and starts allocating it to a memory location until it finds the closing curly braces till line 3. Then gives reference of that memory location to the variable isEven. And adds the variable to global symbol table.

Name of symbol | typeof Symbol | Value of Symbol
isEven         |  function     | [memory address of the function]

Then node reads line 5 right hand side. Finds function keyword and starts allocating it to a memory location until it finds the closing curly braces till line 7. Then gives reference of that memory location to the variable getEvenOrOdd. And adds the variable to global symbol table.

Name of symbol | typeof Symbol | Value of Symbol
isEven         |  function     | [memory address of the function]
getEvenOrOdd   |  function     | [memory address of the function]

After that node reads line 9 right hand side. Finds function keyword and starts allocating it to a memory location until it finds the closing curly braces till line 11. Then gives reference of that memory location to the variable main. And adds the variable to global symbol table.

Name of symbol | typeof Symbol | Value of Symbol
isEven         |  function     | [memory address of the function]
getEvenOrOdd   |  function     | [memory address of the function]
main           |  function     | [memory address of the function]

THen it comes to line 13 and finds a function call of main with no arguments so it goes to the memory location of the function that main was refering to and starts executing it.

Creates a symbol table for the main function

main()
Name of symbol | typeof Symbol | Value of Symbol

Then comes to line 10 and finds another function call. function getEvenOrOdd is called with a parameter of 11.

So, the memory location where the variable getEvenOrOdd is refering to is called with value 11 assigned to variable number.

Then, Symbol Table for getEvenOrOdd is created.

getEvenOrOdd()
Name of symbol | typeof Symbol | Value of Symbol
number         |  number       | 11

Node reads the function and finds another function isEven being called. So, node goes to the memory location where the variable isEven refers and executes the function with assigning variable number a value of 11.

Then, Symbol table for the function block is created.

isEven()
Name of symbol | typeof Symbol | Value of Symbol
number         |  number       | 11

Then node checks the condition of whether (number % 2) === 0. Here, number is 11 which results to a false value.

After this the funtion isEven return false and the isEven() Symbol table is destroyed.

Then it comes back to getEvenOrOdd() where it returns "Odd" and then getEvenOrOdd() symbol table is also destroyed.

It returns to main function where console.log() gets the parameter "Odd" and the function sends the string to standard output and returns undefiened. 

Then symbol table for main is destroyed and node comes to line 13 and reaches end and stops.

Destroys the global symbol table also.

*/