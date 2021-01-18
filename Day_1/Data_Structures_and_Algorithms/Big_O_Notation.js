// https://www.youtube.com/watch?v=v4cd1O4zkGw

// Examples are in Pseudocode

///////////////////////
// Linear Time: O(N)
///////////////////////

/* 
boolean contains(array, x) {
    for each element in array {
        if element == x {
        return true
        }
    }
}
*/

// This is linear time because the space and time required to complete the algorithm is directly related to how much data there is. N = Size of the array

// Linear Example:
/*
    You need to mow a square lawn that is 100m x 100m. What is the Big-O Notation equation to solve how long it will take to mow it?

    Well, I know that the formula is Linear because the time needed is directly proportional to how much land there I have to mow.
        - Ways to write Linear Time: 
            - O(N) or in this case O(a) : a = area (N is just a variable and can be changed)
            - O(s^2) : s = length of one side. 
            - These are the same thing: O(a) and O(s^2) are the same because area = side^2
*/

////////////////////////
// Quadratic Time: O(N^2)
///////////////////////

/*
void printPairs(array){
    for each x in array {
        for each y in array {
            print x, y
        }
    }
}
*/

// This will loop through the array and print pair values: (2,5) and (5,2)
// This will be O(N^2) because the array has N number of elements and it prints N^2 pairs (each pair twice, once as x,y and once as y,x)

////////////////////////////////////////////
// Four Important rules of Big-O Notation: https://www.youtube.com/watch?v=v4cd1O4zkGw
///////////////////////////////////////////

// 1. When calculating Big-O, if you have different steps in the algorithm, you add those steps together
// function something() {
//     doStep1(); // O(a): ex. run through array1
//     doStep2(); //O(b): ex. run through array2
// }
//The formula would be O(a+b)

// 2.  Drop constants. Remember that the point of Big-O Notation is to find how the algorithm scales, not how it deals with data of a specific size.
// function minMax1(array){
//     min, max <= Null

//     foreach(e in array){
//         min = MIN(e, min)
//     }

//     foreach(e in array){
//         max = MAX(e, array)
//     }
// }

// function minMax2(array){
//     min, max <= Null
//     foreach(e in array){
//         min = MIN(e, array)
//         max = MAX(e, array)
//     }
// }

// Both of these functions do exactly the same thing (although in a slightly different way). They are both O(n). While it is tempting to write the second function as O(2n), this is WRONG. We drop the constant so it would be O(n). We do not write O(2n) or O(3n), it is always O(n) because Big-O only cares about how it scales, not how many times the data is being run through

// 3.  When using different inputs use different variables. Remember that variables MUST HAVE A MEANING

// const intersectionSize = (arrayA, arrayB)=>{
//     let count = 0
//     for(a in arrayA ) {
//         for( b in arrayB){
//             if( a == b){
//                 count = count + 1
//             }
//         }
//     }
//     return count
// }

// It would be incorrect to write this as O(n^2) because n doesn't have any meaning. What is n? Which array does it go to? It should be described as O(a X b)

// 4.  Drop non-dominate terms of n
// const whyWouldIDoThis = (array) => {
//     max = Null
//     // O(n) example
//     foreach(a in array){
//         max = Math.max(a, max)
//     }
//      print max

//     // O(n^2) example
//     foreach a in array{
//         foreach b in array{
//         print a, b
//         }
//     }
// }

// This example could be described as => O(n + n^2), but should be described as O(n^2)
//  - If you compare this runtime to O(n ^ 2) and O(n ^ 2 + n ^ 2), both of these run times can reduce to O(n^2). O(n + n^2) fits logically between them => O(n^2) =< O(n + n^2) =< O(n^2 + n^2). Since (n^2) is larger, we will drop the O(n+n^2)
