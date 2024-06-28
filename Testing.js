// Identify why a developer would want to test their code
// Explain the red-green-refactor cycle
// Differentiate between manual and automated testing 
// Demonstrate an understanding of unit testing

function concatSTrings(strA, strB){
    return strA + strB;
}
concatSTrings("abc", "def");   

//JEST

expect (concatSTrings("abc", "def")). toBe ("abcdef");

/* 
TTD approach to programming:

1. Write failing test
2. Re-write code to pass 
3. Optimize code without changing its results

*/


