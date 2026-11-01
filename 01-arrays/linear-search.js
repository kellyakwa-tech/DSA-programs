
function linearSearch(arr, target) {
    
for (let i =0; i < arr.length; i++) {
  if (arr[i] === target) {
  return i;
}

}
return -1;

}
let numbers = [12, 7, 25, 9, 18];

console.log(linearSearch(numbers, 9));
console.log(linearSearch(numbers, 100));
