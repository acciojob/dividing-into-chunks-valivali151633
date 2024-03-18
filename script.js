
const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  let ans = [];
  let initialAns = []
  let sum = 0;


  for(let i=0 ; i<arr.length ; i++)
  {
    sum += arr[i];
    // console.log(sum)
    if(sum <= n){
        initialAns.push(arr[i]);
        console.log(initialAns)
   }
   else{
    ans.push(initialAns);
    initialAns=[];
    sum = 0;
    i--
   }

}
(initialAns && ans.push(initialAns));

return ans
};

const n = prompt("Enter n: ");
// let n = 5;
// console.log(divide(arr, n))
alert(JSON.stringify(divide(arr, n)));
