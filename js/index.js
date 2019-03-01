// 1 task
// Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).
// function convert(amount) { /* your code */ }
// convert(2) // 16

function convert(amount) {
  console.log(amount * 8);
}
convert(5);

// 2 task
// A function which returns reversed string.
// function reverse(str) { /* your code */ }
// reverse('abc') // 'cba'
function reverse(str) {
  let newStr = '';
  for(let i = str.length-1; i>=0; i--){
    newStr+=str[i];
  }
  console.log(newStr);
}
reverse('123456789');

// 3 task

// A function which prints the stair picture of size n
// function printStairs(n) { /* your code */ }
// printStairs(3)
// #
// ##
// ###

function printStairs(n) {
  let line, stair;
  for(let i = 0; i < n; i++){
    line = i+1;
    stair = '#'.repeat(line);
    console.log(stair);
  }
}
printStairs(3);

// 4 task
// A function which returns total sum of a range
// function sumRange(start, end) { /* your code */ }
// sumRange(2, 4) // 9
// sumRange(-1, 3) // 5

function sumRange(start, end) {
  let sum = 0;
  for(let i = start; i <= end; i++){
    sum+=i;
  }
  console.log(sum);
}
sumRange(2, 4);

// 5 task 
// Write a function which returns the smallest of three numbers.
// function min(a, b, c) { /* your code */ }
// min(10, 5, 11) // 5
// min(3, 8, 4) // 3

//наркоманський варіант)))))
function min(a, b, c) { 
  let minNumber;
  if(a > b || a === b  && c > b || a === c){
    minNumber = b;
  } else if( b > a &&  c > a){
    minNumber = a;
  } else {
    minNumber = c;
  }
  console.log(minNumber);
}
min(4,6, 5);
// і норм
function min(a, b, c) { 
  let minNumber = Math.min(a, b, c);
  console.log(minNumber);
}
min(4,6, 5);

// 6 task
// A function which prints the pyramid picture of size n
// function printPyramid(n) { /* your code */ }
// printStairs(3)
//   #
//  ###
// #####

function printPyramid(n){
	for(let i = 0; i < n; i++) {
	  if(i % 2 === 0){
		  let output = '';
		    for(let j = 0; j < n-i; j++) {
		        output += ' ';
		    }
		    for(let k = 0 ; k <= i; k++) {    
		       output += '# ';
		    }
		    console.log(output);  
		} 
	}
}
printPyramid(14);

// 7 task
// A function which transforms first and last letter to uppercase (use built in string’s method).
// function firstAndLastToUpper(str) { /* your code */ }
// firstAndLastToUpper('abc') // 'AbC'

function firstAndLastToUpper(str) {
  let newStr = str[0].toUpperCase() + str.slice(1, -1) + str[str.length-1].toUpperCase();
  console.log(newStr);
}
firstAndLastToUpper('abc');

// 8 task
// A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.
// function cursorCheck(str) { /* your code */ }
// cursorCheck('Hello I am OstaP') // true
// cursorCheck('Superman is here') // false

function cursorCheck(str) {
  let newStr = str.toLowerCase();
  if(newStr.includes("ostap") 
     || newStr.includes("ironman") 
     || newStr.includes("cursor")){
    console.log('true');
  } else {
    console.log('false');
  }
}
cursorCheck('ostap');

// 9 task

// 10 task
// A function which removes duplication of letters in string. The function must be case-insensitive.
// function removeDuplicationLetters(str) { /* your code */ }
// removeDuplicationLetters('Hello I am Iron Man') // 'Helo I am rn '

function removeDuplicationLetters(str){
	let uniq="";
	for(let i=0; i < str.length; i++) {
		if(uniq.indexOf(str.charAt(i))==-1 || str.charAt(i) == ' ') {
		uniq += str[i];
		}
	}
  console.log(uniq);
}
removeDuplicationLetters('Hello I am Iron Man');
