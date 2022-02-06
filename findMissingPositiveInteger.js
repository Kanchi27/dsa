function firstMissingPositive(nums) {
    const mySet = new Set(nums);
    let min = 1;

    while (mySet.has(min)) {
      min++;
    }

    return min;
};

console.log(firstMissingPositive([3,5,8]))
