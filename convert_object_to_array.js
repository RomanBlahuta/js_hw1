// Converts an object into an array form as 
// [["key1", "value1"], ["key2", "value2"]]

function toArray(someObj) {
    return Object.entries(someObj);
}