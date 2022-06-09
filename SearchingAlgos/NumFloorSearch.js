// given an array and a key, return key if present in array , else return floor of the number present in array
// eg [1,3, 4, 5, 7],key:5. => 5
// eg [1,3, 4, 5, 7],key:6. => 5
// eg [3, 4, 5, 7],key:1. => 0 

// Time : O(n)
// Space : O(1)
function findNumFloor(arr, key) {
    let result = 0;
    for (let i of arr) {
        if (key == i) {
            return key;
        } else if (i < key) {
            result = i;
        }
    }
    return result
}

function findNumFloorBinarySearchIterative(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let result = 0;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === key) {
            result = arr[mid];
            return result
        } else if (arr[mid] > key) {
            end = mid - 1;
        } else if (arr[mid] < key) {
            result = arr[mid];
            start = mid + 1;
        }
    }
    return result;
}

var result = 0;
function findNumFloorBinarySearch(arr, key, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return result;
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
        result = arr[mid]
        return result;
    } else if (arr[mid] > key) {
        return findNumFloorBinarySearch(arr, key, 0, mid)
    } else if (arr[mid] < key) {
        result = arr[mid];
        return findNumFloorBinarySearch(arr, key, mid + 1, arr.length - 1)
    }

}
console.log(findNumFloorBinarySearchIterative([3, 4, 5, 7], 1));
console.log(findNumFloorBinarySearchIterative([1, 3, 4, 5, 7], 6));
console.log(findNumFloorBinarySearchIterative([1, 3, 4, 5, 7], 5));
console.log(findNumFloorBinarySearchIterative([2, 4, 5, 7, 10, 12], 11));
