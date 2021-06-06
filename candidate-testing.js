const input = require('readline-sync');
/* 
 TODO 2: modify your quiz app to ask 5 questions 
TODO 1.1a: Define candidateName 
TODO 1.2a: Define question, correctAnswer, and candidateAnswer 

*/
let candidateName =  "";
let question = "";
let correctAnswer = "";
let candidateAnswer = "";
//const wrongAnswer = 0;


//question#1 info
let candidateAnswer1 = "";

let question1 = ("Who was the first American woman in space? ");
let correctAnswer1 = "Sally Ride";

//question# 2 info
let question2 = ("True or false: 5 kilometer == 5000 meters? ");
let correctAnswer2 = "true";
let candidateAnswer2 = "";

//question#3 info
let question3 = ("(5 + 3)/2 * 10 = ? ");
let correctAnswer3 = 40;
let candidateAnswer3 = "";

//question#4 info
let question4 = ("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
let correctAnswer4 = "Trajectory";
let candidateAnswer4 = "";

//question#5 info
let question5 = ("What is the minimum crew size for the ISS? ");
let correctAnswer5 = 3;
let candidateAnswer5 = "";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
//return askForName;  
input.question ("Enter your name: ");
 
}
 

let questions = [question1, question2, question3, question4, question5];

let correctAnswers = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];

let candidateAnswers = [candidateAnswer1, candidateAnswer2, candidateAnswer3, candidateAnswer4, candidateAnswer5];

  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//questions = [question1, "True or false: 5 kilometer == 5000 meters? ", (5 + 3)/2 * 10 = ? ]
function askQuestion(candidateAnswer1, candidateAnswer2, candidateAnswer3, candidateAnswer4, candidateAnswer5) {
//  return askQuestion;{
 
    input.question (question1, question2, question3, question4, question5);


  }

}
function correctAnswers = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

function gradeQuiz(candidateAnswer) {
let correctAnswers = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];
{
  //if candidateAnswers !== correctAnswers;
  //return wrongAnswer;
  } 
}

  let grade;
  

  return grade;


function runProgram() {
  askForName(candidateName);
  // TODO 1.1c: Write a message to the console greeting the user using the name they just provided. //
  console.log("Hello "  +"!  " + "Good luck on your quiz. " );

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};