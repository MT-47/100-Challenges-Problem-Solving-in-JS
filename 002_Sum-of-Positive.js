/*You get an array of numbers, 
return the sum of all of the positives ones.
Example
[1, -4, 7, 12] => 
1+7+12=20
1+7+12=20
Note
If there is nothing to sum, 
he sum is default to 0.*/

function positiveSum(arr) {
  let initValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      initValue += arr[i];
    }
  }
  return initValue;
}

console.log(positiveSum([1, -4, 7, 12])); //20