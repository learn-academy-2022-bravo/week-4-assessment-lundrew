// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


describe('remFirstShuff', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it('takes in an array, removes the first item from the array and shuffles the remaining content', () => {
      expect(remFirstShuff(colors1)).toEqual(expect.arrayContaining(colors1));
      expect(remFirstShuff(colors2)).toEqual(expect.arrayContaining(colors2));
    });
  });


// // b) Create the function that makes the test pass.


// // create a function called "remFirstShuff" 
// // input param of "array"
// // use shift() method to remove first element of array
// // create a for loop to iterate through the array
// // include Math.random() method to randomize the array
// // return the new randomized array

const remFirstShuff = (array) => {

    array.shift()  

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array

}




// // --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// // a) Create a test with expect statements for each of the variables provided.

// const nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// const nums2 = [109, 5, 9, 67, 8, 24]
// // Expected output: [5, 109]

describe('minMax', () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
    it('takes an array of numbers and returns an array of the minimum and maximum numbers in that order', () => {
        expect(minMax(nums1)).toEqual([-8, 90]);
        expect(minMax(nums2)).toEqual([5, 109]);
    });
  });


// // b) Create the function that makes the test pass.

// // create a function called "minMax"
// // create param called "array"
// // create a variable called "max" and "min"
// // use reduce() method to obtain only 1 value
// // create a function and use the Math.max/Math.min methods to obtain the max number and min number
// // return the min and max number

const minMax = (array) => {
    
    var max = array.reduce(function(a, b) {
        return Math.max(a, b) 
    })

    var min = array.reduce(function(a, b) {
        return Math.min(a, b) 
    })

    return [min, max] 

}


 


// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.

// const testArray1 = [3, 7, 10, 5, 4, 3, 3]
// const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


describe('combine', () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    it('takes in two arrays as arguments and returns one array with no duplicate values', () => {
      expect(combine(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1]);
    });
  });



// b) Create the function that makes the test pass.

//create a function called "combine"
//create two parameters "array1" and "array2"
//create a variable where array1 and array2 are joined with concat() method
//create a variable "uniqueChars" with an empty array
//use the new variable "combined" and access each array with .forEach()
//include a param called "element" 
//create if statement the element being pushed comes out as no duplicate.


const combine = (array1, array2) => {

    let combined = array1.concat(array2)
    let uniqueChars = [];

combined.forEach((element) => {
    if (!uniqueChars.includes(element)) {
        uniqueChars.push(element);
    }

});
    return uniqueChars
}
