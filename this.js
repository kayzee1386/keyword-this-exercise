/*Part 1
NUMBER 1
What is the value of the keyword this in the following example:
var data = this;
console.log(data);
Answer||
The value of "this" here is the Window object.
*/



/*NUMBER 2
What does this function output? Why?
function logThis(){
    return this;
}
logThis(); // ?
Answer||
logThis() outputs the window object.
*/




/* NUMBER 3
What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}
instructor.sayHi() // ?
Answer||
The code above outputs "Hello! Tim"; This is because, "this" refers to the "instructor variable"
*/



/* NUMBER 4
What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}
instructor.displayInfo() // ?
Answer||
This outputs Cat owner? undefined;
This is because, in the displayInfo object, there is no object as "catOwner".
Therefore, the "this.catOwner" does not refer to any valuein the displayInfo object hence it is undefined.
*/



/* NUMBER 5
What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}
instructor.info.displayLocation() // ?
 Answer||
 The output will be "Oakland":
 This is because, displayLocation is a function that returns "this"(ie info object).data.location which is "Oakland"
 That means, instructor.info.displayLocation will output "Oakland"
*/

/*   NUMBER 6
What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}
instructor.info.data.logLocation() // Why might we be getting an error here?
 Answer||
 instructor.info.data.logLocation() will throw an Uncaught TypeError: instructor.info.data.logLocation()
 is not a function.
This is because instructor.info.data.logLocation() is not a function.
*/


 
/*Part 2
NUMBER 1
Call Apply Bind Exercises
Fix the following code:
*/
/* NUMBER 1
var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}
Answer||
obj.person.sayHi.call(obj)
*/


/*NUMBER 2
List two examples of "array-like-objects" that we have seen.
Answer||
a) The arguments "Array";
b) The array like object returned when you try to getElements in the DOM;
c) The jQuery Object
*/

// Functions to write:sumEvenArguments
// Make the tests pass for the following functions:

// NUMBER 3
// Write a function called sumEvenArguments which takes all of the arguments passed to a function 
// and returns the sum of the even ones.

function sumEvenArguments(){
    var empty = [...arguments];
    var result = 0;
    for(let i=0;i<empty.length;i++){
        if(empty[i]%2 === 0){
            result += empty[i]
        }
    }
    return result;
}

sumEvenArguments(1,2,3,4) // 6
sumEvenArguments(1,2,6) // 8
sumEvenArguments(1,2) // 2




//NUMBER 4
// Write a function called arrayFrom which converts an array-like-object into an array.
function arrayFrom(){
    return [].slice.call(arguments)
    
    }

function sample(){
    var arr = arrayFrom(arguments)
    if(!arr.reduce) throw "This is not an array!"
    return arr.reduce(function(acc,next){
        return acc+next;
    },0)
}


//NUMBER 5
// Write a function called invokeMax which accepts a function and a maximum amount. 
// invokeMax should return a function that when called increments a counter. 
// If the counter is greater than the maximum amount, the inner function should return "Maxed Out!"




function invokeMax(fn, maxAmt){
    let counter = 0;
    return function(a, b){
        counter++;
        if(counter > maxAmt){
            return "Maxed Out!";
        } else {
            return fn(a, b);
        }
    }
}

function add(a,b){
    return a+b
}


var addOnlyThreeTimes = invokeMax(add,3);
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(2,2) // 4
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(1,2) // "Maxed Out!"


//NUMBER 6
// Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. 
// In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.
// In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". 
// If the guess is too high return "You're too high!" and if it is too low, return "You're too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.
// You will have to make use of closure to solve this problem.

var game = guessingGame(5)
game(1) // "You're too low!" 
game(8) // "You're too high!"
game(5) // "You're too low!"
game(7) // "You got it!" 
game(1) // "You are all done playing!" 

var game2 = guessingGame(3)
game2(5) // "You're too low!" 
game2(3) // "You're too low!"
game2(1) // "No more guesses the answer was 0" 
game2(1) // "You are all done playing!"



function guessingGame(amount){
    let answer = Math.floor(Math.random()*11);
    let guesses = 0;
  return function(guess){
      guesses++;
      if(guesses < amount){
         if(guess > answer){
          return "You're too high!";
      }else if(guess < answer){
          return "You're too low!";
      }
      guesses = amount;
      return "You got it!";  
      }else if(guesses === amount){
          return `No more guesses the answer was ${answer}`;
      }
     return "You are all done playing!";
  }
}