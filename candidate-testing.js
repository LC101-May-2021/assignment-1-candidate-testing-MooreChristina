const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let correctAnswers = [];
let candidateAnswer;
let questions = [];
//let correctAnswers = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];
let candidateAnswers;

let candidateLastName = "";
let candidateFirstName = "";


/*function askForName() {
  // TODO 1.1b: Ask for candidate's name //
     candidateFirstName = input.question("Enter your first name: ");
     candidateLastName =  input.question("Enter your last name: ");
     candidateName = (candidateFirstName + " " + candidateLastName);
     return candidateName;
       
}
*/

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let candidateFirstName = input.question("Please enter your first name: ", "<first name goes here>");
let candidateLastName = input.question("Please enter your last name: ", "<last name goes here>");
candidateName = (candidateFirstName + " " + candidateLastName);
if (candidateName!= null) {

   console.log("Hello " + candidateName + "! Good luck on the quiz.");

}
//
}
//question#1 info
//let question1 = input.question("Who was the first American woman in space? ");
//const correctAnswer1 = "Sally Ride";
let candidateAnswer1 = "";

//question# 2 info
//let question2 = input.question("True or false: 5 kilometer == 5000 meters? ");
const correctAnswer2 = "true";
let candidateAnswer2 = "";

//question#3 info
//let question3 = input.question("(5 + 3)/2 * 10 = ? ");
const correctAnswer3 = 40;
let candidateAnswer3 = "";

//question#4 info
//let question4 = ("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
const correctAnswer4 = "Trajectory";
let candidateAnswer4 = "";

//question#5 info
//let  question5 = ("What is the minimum crew size for the ISS? ");
const correctAnswer5 = 3;
let candidateAnswer5 = "";

 
 

function askQuestion(){
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer 
     question1 = input.question("1) Who was the first American woman in space? ");
         candidateAnswer1 = question1;
     question2 = input.question("2) True or false: 5 kilometer == 5000 meters? ");
        candidateAnswer2 = question2;
     question3 = input.question("3) (5 + 3)/2 * 10 = ? ");
        candidateAnswer3 = (question3);
     /*question4 = input.question("4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
        candidateAnswer4 = question4;
     question5 = input.question("5) What is the minimum crew size for the ISS? ");
        candidateAnswer5 = question5;
  candidateAnswers = [candidateAnswer1, candidateAnswer2, candidateAnswer3, candidateAnswer4, candidateAnswer5];
  */
  candidateAnswers = [candidateAnswer1, candidateAnswer2, candidateAnswer3];
   // for (i = 0; i <= questions.length; i++);{
	//	candidateAnswer = input(questions[i].question);
  // }
  candidateAnswer = ("Your answer: " + [candidateAnswer1, candidateAnswer2, candidateAnswer3, candidateAnswer4, candidateAnswer5]);
   }        
 
//candidateAnswer = [candidateAnswer1, candidateAnswer2, candidateAnswer3, candidateAnswer4, candidateAnswer5];

//let correctAnswer = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];

function gradeQuiz(candidateAnswers) {
  // console.log(correctAnswer); 
   //console.log(candidateAnswer);  
       
   correctAnswer1 = "Sally Ride";
   
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 



  let grade = 0;
      


  

  return grade;
}

function runProgram() {
  askForName();

  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  
  gradeQuiz(this.candidateAnswers);
  console.log (candidateName);
    console.log(correctAnswer,candidateAnswer);
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