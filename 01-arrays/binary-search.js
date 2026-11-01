function binarySearch(arr, target) {
let left = 0;
let right = arr.length - 1;

while (left <= right) {
    let mid = Math.floor((left+right)/2);
    if (arr[mid] ===target) {
        return mid; 
    }
if (target > arr[mid]) {
 left = mid+1;
}
 if (target < arr[mid]){
    right =mid-1;
 }

}
return -1
}

let numbers = [2, 5, 8, 12, 16, 23, 38];
console.log(binarySearch(numbers, 23));
console.log(binarySearch(numbers, 50));