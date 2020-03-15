// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

function maxTotal (arr) {
    var maxIndices = [];
    for (let j=0; j<5; j++) {
        let currmax = 0;
        for (let i=0; i<arr.length; i++) {
            if (arr[i] >= arr[currmax] && maxIndices.includes(i) == false) {
                currmax = i;
            }
        }
        maxIndices.push(currmax);
    }
    var sum = 0;
    for (let k=0; k<maxIndices.length; k++) {
        sum += arr[maxIndices[k]];
    }
    return sum;
}