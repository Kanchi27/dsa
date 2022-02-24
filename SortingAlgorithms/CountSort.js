// Count Sort : when the array constitutes of countable nos for eg ; 0's and 1's array, lowercase string array, count freq of those nos and
// then sort, max elements Range alloweed (max-min) for count Sort , 1 million
// application :check anagram
//Time Complexity : O(n)
// Space Complexity : O(R) - where range is the no of unique elements in the array ,  max - min

function countSort(arr) {
    let countArr = [];
    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i]] = countArr[arr[i]] + 1 || 1;
    }
    countArr = countArr.filter(count => count);
    let index = 0;
    for (let i = 0; i < countArr.length; i++) {
        for (j = 1; j <= countArr[i]; j++) {
            arr[index++] = i
        }
    }
    return arr
}


console.log(countSort([1, 1, 0, 2, 0, 0, 1, 3, 0, 1, 1, 5]))