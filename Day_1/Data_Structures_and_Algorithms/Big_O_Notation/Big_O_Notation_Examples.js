// https://www.youtube.com/watch?v=v4cd1O4zkGw

// Examples are in Pseudocode

////////////////////////
// Constant Time: O(1)
///////////////////////

/*
Examples: 

    a = 1
    b = 2
    c = a + 5*b
    // This runs in Constant Time because it does not depend on (n). Regardless of how big (n) is, it will take the same amount of time to evaluate (c) because the equation doesn't care how big the data set is.

    i = 0
    while i < 11 Do i = i + 1
    - This is also done in Constant time because (n) is not involved in this equation. It doesn't matter if the data set, (n), is infinite because the loop only runs while i is less than 11 

*/

///////////////////////
// Linear Time: O(n)
///////////////////////

/* 
Examples: 

    i = 0
    while i < n Do i = i + 1

    - This is Linear because I have to loop through the the data set (n) number of times.
    - The computation time scales 1:1 with the growth of the data set
    - f(n) = n
    - O(f(n)) = O(n)


    i = 0
    while i < n Do i = i + 3

    - Even though I am adding 3 to i each time this is still a linear equation, I just get through the data set 3x faster
    - f(n) = n/3
    - O(f(n)) = O(n)


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

////////////////////////////////////////////////////
// Logarithmic Time (AKA Binary Search): O(log(n))
////////////////////////////////////////////////////
/*
    - Example: 
        - Suppose I have a sorted array and I want to find the index of a particular value in the array, if it exists. What is the time complexity of the following algorithm?

        //Create variables for the ends of the array
        low = 0
        high = n-1

        While low <= high Do

        // Create another variable for the middle index of the array
        mid = (low + high) / 2

        // If mid equals the desired value, return it. Otherwise if mid is less than the desired value, cut the array in half and make the low end variable equal (mid + 1) to represent the new lowest index. If mid is greater than the desired value cut the array in half in the other direction and reassign the high variable (mid - 1) to represent the new highest index
        if array[mid] == value: return mid
        Else If array[mid] < value: low = mid + 1
        Else If array[mid] > value: hi = mid - 1

        // If the value is not in the array return the default response
        return -1

        - Answer: O(log2(2)) ==> O(log(n)) ==> Logarithmic Time
        - This is a really fast way to do a binary search of an array because each time the algorithm runs, half of the array is discarded unless the desired value is found




*/

////////////////////////
// Quadratic Time: O(n^2)
///////////////////////

/*
    for(i = 0; i < n; i = i + 1)
    for(j = 0; j < n; j = j + 1)
    - f(n) = n*n = n^2
    - O(f(n)) = O(f(n^2))
    - This is Quadratic because (n) work is done twice, therefore (n*n) = n^2 = O(n^2)
    
    for(i = 0; i < n; i = i + 1)
    for(j = i; j < n; j = j + 1)
    - In the outer loop, i will loop (n) times so i is directly related to the size of (n)
        - i = 0 => i does (n) work
        - i = 1 => i does (n-1) work
        - i = 2 => i does (n-2) work
        - etc
    - So for the inner loop it would look like this
        - (n) + (n-1)  - The first (n) is the outer loop, and the (n-1) is the second loop
        - (n) + (n-2)
        - etc
        - The equation for this is n(n+1)/2. In Big-O ==> O(n(n+1)/2) ==> O(n^2/2 + n/2) ==> O(n^2) ==> Quadratic Time


    - Example:
        i = 0
        While i < n Do
            j = 0
            While j < 3*n Do
                j = j + 1
            j = 0
            While j < 2*n Do
                j = j + 1
            i = i + 1

        f(n) = n * (3n + 2n) = 5n^2 ==> O(f(n)) ==> O(n^2) ==> Quadratic Time
*/
