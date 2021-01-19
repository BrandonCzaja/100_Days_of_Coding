## Resources:

-   https://www.youtube.com/watch?v=RBSGKlAvoiM
-   https://www.youtube.com/watch?v=v4cd1O4zkGw

## What is a Data Structure?

-   A data structure is a way of organizing data so that it can be used effectively
-   Examples: Arrays, Objects,

## Why Data Structures?

-   They are essential ingredients in creating fast and powerful algorithms
-   They help manage and organize data
-   Make code cleaner and easier to read/understand

## Computational Complexity Analysis

-   Two important questions:
    -   How much time does it take to run the algorithm?
    -   How much space is required for the computation?

## Big-O Notation

-   Big-O Notation gives the upper bound of complexity in the WORST CASE scenario, helping to quantify performance as the input size becomes arbitrarily large
    -   Example: You are given an unordered list of unique numbers and you are asked to find the position of number 7.
        -   The worst case scenario is that 7 is the last number in the list. Your sorting algorithm would need to check ever number until it got to the end of the list reaching 7.
        -   This is considered a linear time complexity. The time required to complete the task is directly tied to how many numbers are in the list.

## Big-O Notation Formulas

-   n = The size of the input input
-   Complexities ordered from smallest to largest

#### Constant Time: O(1)

-   The time and space required to complete the algorithm is the same no matter the size of the data

#### Logarithmic Time (AKA Binary Search): O(log(n))

#### Linear Time: O(n)

-   Linear time scales directly to the amount of data. Twice the amount of data, takes twice as longs to complete the algorithm. 3x the data size takes 3 times as long and so on.

#### Linearithmic Time: O(nlog(n))

#### Quadric Time: O(n^2)

#### Cubit Time: O(n^3)

#### Exponential Time: O(b^n), b >1

#### Factorial Time: O(n!)

## Four Important rules of Big-O Notation: https://www.youtube.com/watch?v=v4cd1O4zkGw

1.  When calculating Big-O, if you have different steps in the algorithm, you add those steps together
    function something() {
    doStep1(); // O(a): ex. run through array1
    doStep2(); //O(b): ex. run through array2
    }

-   The formula would be O(a+b)

2.  Drop constants. Remember that the point of Big-O Notation is to find how the algorithm scales, not how it deals with data of a specific size.

function minMax1(array){
min, max <= Null

     foreach(e in array){
         min = MIN(e, min)
     }

     foreach(e in array){
         max = MAX(e, array)
     }

}

function minMax2(array){
min, max <= Null
foreach(e in array){
min = MIN(e, array)
max = MAX(e, array)
}
}

-   Both of these functions do exactly the same thing (although in a slightly different way). They are both O(n). While it is tempting to write the second function as O(2n), this is WRONG. We drop the constant so it would be O(n). We do not write O(2n) or O(3n), it is always O(n) because Big-O only cares about how it scales, not how many times the data is being run through

3.  When using different inputs use different variables. Remember that variables MUST HAVE A MEANING

const intersectionSize = (arrayA, arrayB)=>{
let count = 0
for(a in arrayA ) {
for( b in arrayB){
if( a == b){
count = count + 1
}
}
}
return count
}

It would be incorrect to write this as O(n^2) because n doesn't have any meaning. What is n? Which array does it go to? It should be described as O(a X b)

4.  Drop non-dominate terms of n
    const whyWouldIDoThis = (array) => {
    max = Null

    -   O(n) example

foreach(a in array){
max = Math.max(a, max)
}
print max

-   O(n^2) example
    foreach a in array{
    foreach b in array{
    print a, b
    }
    }
    }

-   This example could be described as => O(n + n^2), but should be described as O(n^2)
-   If you compare this runtime to O(n ^ 2) and O(n ^ 2 + n ^ 2), both of these run times can reduce to O(n^2). O(n + n^2) fits logically between them => O(n^2) =< O(n + n^2) =< O(n^2 + n^2). Since (n^2) is larger, we will drop the O(n+n^2)

-   Another example:
    -   f(n) = 7log(n)^3 + 15n^2 + 2n^3 + 8
    -   O(f(n)) = O(n^3) because 2n^3 would take the longest computational time for a data set of infinite size
