const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question("Enter your First and Last Name: ");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = [];

let candidateAnswers = [];
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5 kilometer == 5000 meters? ","3) (5 + 3)/2 * 10 = ? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride", "true", 40, "Trajectory", 3];
let correctAnswer = correctAnswers.valueOf();
let numberOfCorrect = correctAnswers.length;
let numberOfQuestions = 5;
let candidateAnswer = [];
let i;

function askForName(candidateName) {
  // TODO 1.1b: Ask for candidate's name //
return candidateName;
}

function askQuestion(questions) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
     
     //loop to ask each question
     for (i = 0; i < questions.length; i++){
       candidateAnswer[i] = input.question(questions[i])
      candidateAnswers.push(candidateAnswer[i]);
   } 
       return candidateAnswers;
      //assigns value to candidate answer
}
//let candidateAnswerSheet = candidateAnswers;
//console.log(candidateAnswers);
//candidateAnswers = candidateAnswer;

function gradeQuiz(candidateAnswers) {
    
    /*for (i = 0; i < 5; i++){
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
    
     /if (candidatAnswers[i] != correctAnswers [i]){
        numberofCorrect = (numberOfCorrect - 1);
        let grade = (numberOfCorrect/numberOfQuestions) * 100;
    */
    let grade;
    return grade;
     } 


function runProgram() {
  askForName(candidateName);
  // TODO 1.1c: Ask for candidate's name //
        console.log("Hello " + candidateName + "! Good luck on your quiz.");
  askQuestion(questions);
       //console.log(candidateAnswers);
     //return(candidateAnswers);

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