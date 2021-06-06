const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers = [];
let candidateAnswers;

let candidateLastName = "";
let candidateFirstName = "";


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
     candidateFirstName = input.question("Enter your first name: ");
     candidateLastName =  input.question("Enter your last name: ");
     candidateName = (candidateFirstName + " " + candidateLastName);
     return candidateName;
       
}

//question#1 info
//const question1 = ("Who was the first American woman in space? ");
//const correctAnswer1 = "Sally Ride";
let candidateAnswer1 = "";

//question# 2 info
//const question2 = ("True or false: 5 kilometer == 5000 meters? ");
const correctAnswer2 = "true";
let candidateAnswer2 = "";

//question#3 info
//const question3 = ("(5 + 3)/2 * 10 = ? ");
const correctAnswer3 = 40;
let candidateAnswer3 = "";

//question#4 info
//const question4 = ("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
const correctAnswer4 = "Trajectory";
let candidateAnswer4 = "";

//question#5 info
//const question5 = ("What is the minimum crew size for the ISS? ");
const correctAnswer5 = 3;
let candidateAnswer5 = "";

 

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer1 = input.question("Who was the first American woman in space? ");
  candidateAnswer2 = input.question("True or false: 5 kilometer == 5000 meters? ");
  candidateAnswer3 = input.question("(5 + 3)/2 * 10 = ? ");
  candidateAnswer4 = input.question("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
  candidateAnswer5 = input.question("What is the minimum crew size for the ISS? ");
candidateAnswer = [candidateAnswer1, candidateAnswer2, candidateAnswer3, candidateAnswer4, candidateAnswer5];
}
//let correctAnswer = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];

function gradeQuiz(candidateAnswers) {
  // console.log(correctAnswer); 
   //console.log(candidateAnswer);  
       
   const correctAnswer1 = "Sally Ride";
   
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 



  let grade = 0;
      


  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName +"! " + "Good luck on your quiz. " );
  askQuestion();
  gradeQuiz(this.candidateAnswers);
    console.log(correctAnswer); 
    console.log(candidateAnswer);
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