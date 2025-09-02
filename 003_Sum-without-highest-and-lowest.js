/*Sum all the numbers of a given array ( cq. list ),
 except the highest and the lowest element 
( by value, not by index! ).
The highest or lowest element respectively 
is a single element at each edge, 
even if there are more than one with the same value.
Mind the input validation.*/

function sumArray(array) {
    if (!array || array.length <= 2) return 0;
    
    let total = array.reduce((a, b) => a + b, 0);
    let min = Math.min(...array);
    let max = Math.max(...array);

    return total - min - max;
}
console.log(sumArray([6, 2, 1, 8, 10])); //16