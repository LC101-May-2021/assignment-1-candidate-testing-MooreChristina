const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question("Enter your First and Last Name: ");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = [];

let candidateAnswers = [];
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5 kilometer == 5000 meters? ","3) (5 + 3)/2 * 10 = ? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride", "true", 40, "Trajectory", 3];
let correctAnswer; 
let numberOfCorrect;// = number of correct answers received
let numberOfQuestions = 5;
let candidateAnswer = [];
let i;
let status = "";
let grade;
let checkAnswer;

function askForName(candidateName) {
  // TODO 1.1b: Ask for candidate's name //
return candidateName;
}


function askQuestion(questions) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
     
     //loop to ask each question
     for (i = 0; i < questions.length; i++){
       candidateAnswer[i] = input.question(questions[i])
     candidateAnswers.push(candidateAnswer[i])
   }  
       return candidateAnswers; //assigns value to candidate answer
}

console.log(candidateAnswers);
//candidateAnswers = candidateAnswer;

function gradeQuiz(candidateAnswers, correctAnswers) {
    //candidateAnswers[i] === correct
    //let grade = ((numberOfCorrect/numberOfQuestions) * 100);
    //for (i = 0; i < 5; i++){
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
      // if  checkAnswer = (candidateAnswers = [], correctAnswers = []) => {
            if(candidateAnswers.length != correctAnswers.length){
        let count = 0;
           // for(let i = 0; i < candidateAnswers.length; i++){
                let candidateAnswer1 = candidateAnswers[i];
                let correctAnswer = correctAnswers[i];
                let incorrectAnswer = correctAnswer - candidateAnswer1;
            console.log(incorrectAnswer);
            numberOfCorrect = (5-incorrectAnswer);
            } 
            return numberOfCorrect
            grade = ((numberOfCorrect/numberOfQuestions) * 100);{
            if (grade < 80){
              status = "FAILED!"
            }
            else {
                status = "PASSED!"
             }  
             } return grade;
        }  

function runProgram() {
  askForName(candidateName);
  // TODO 1.1c: Ask for candidate's name //
        console.log("Hello " + candidateName + "! Good luck on your quiz.");
  askQuestion(questions);
       //console.log(candidateAnswers);
     //return(candidateAnswers);

  gradeQuiz(this.candidateAnswers);
console.log(grade);
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