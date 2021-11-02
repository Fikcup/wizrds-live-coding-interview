// Given an array of integers as arg1 to function
// arg2 target integer
// Turn the indices in the array such as the add up to the target (arg2)
// Can't use the same element twice
// Smallest array possible is 2

// [1,9,-5,4] target: 4 => [1,2]
// [-5,8,6,-3,0], target: 1 => [0, 2]

let arr = [1, 9, -5, 4];
let arr2 = [-5, 8, 6, -3, 0]

let target = 4;
let target2 = 1;

const iteration = (arg1, arg2) => {
    for (let i = 0; i < arg1.length; i++) {
        for (let j = 0; j < arg1.length; j++) {
            if (i !== j) {
                if (arg1[i] + arg1[j] === arg2) {
                    console.log(i, j);
                    return;
                }   
            }
        }
    }
}

iteration(arr, target);
iteration(arr2, target2);