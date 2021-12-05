// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim*/

(function(window){

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    // STEP 10:
    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using either the helloSpebaker's or byeSpeaker's 'speak' method.
    // See Lecture 50, part 1
    for (var i=0;i<names.length;i++) {

      var firstName = (names[i]).charAt(0).toLowerCase();

      if(firstName == "j"){
        console.log(byeSpeaker.speak(names[i]));
      } else {
        console.log(helloSpeaker.speak(names[i]));
      }
        

    }
      // STEP 12:
      // Compare the 'firstLetter' retrieved in STEP 11 to lower case
      // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
      // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
      // name in the loop.
      // if (/* fill in condition here */) {
      //   // byeSpeaker.xxxx
      // } else {
      //   // helloSpeaker.xxxx
      // }
        
    }(window));

