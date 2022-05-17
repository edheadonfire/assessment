/*
Indepedent Studio Services
https://issprops.com

Software Developer Candidate Assessment
*/

// #1
// Q: What is the difference between let and var
// A: let is within the same scope but var is more for everywhere



// #2
// Q: Write a function that takes 2 arguments, first one is an array, second one is a string. 
// loop through the array and find a matching result of the second argument. 
// return the matched index of the array, if there is any
function getIndex(array,value){
	// I could also make sure that array is an array and that value is a value but I'm not sure that's the point of the question
    for (let i = 0; i < array.length; i++) {
 		if(array[i] === value){
            return i
        }
	}
    return -1 
}


// #3
// Q: Fix the bug
function average(a, b) {
	return (a + b) / 2.0;
}

console.log(average(2, 1));


// #4
// Q: What is the output?
let a = 22;
let b = 'abc';
let c = 51;
let d = a + b + c;
// 22abc51 adding a string converts to concatination 
console.log(d);


// #5
// Q: Call the function in Q #2 with the following data and what is the output?
let animals = ['Dog', 'Cat', 'Lion', 'Tiger', 'Elephant', 'Turtle', 'Bear'];
let find = 'Whale';
// -1 other options include returning null, throwing error, false  
// 
