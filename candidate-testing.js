const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
//let candidateFirstName = input.question("Enter your First Name:  ");
//let candidateLastName = input.question("Enter your Last Name:  ");
//let candidateName = candidateFirstName +" " + candidateLastName;
//console.log(candidateName)
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//let question = "Enter your name: ";
let correctAnswer;
let candidateAnswer = [];
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5 kilometer == 5000 meters? ","3) (5 + 3)/2 * 10 = ? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers;
let question = " "; 
//let candidateName = " ";
  /*const capitalize = (x) => {
  if (typeof x !== 'string') return x
*/
//********************Candidate Name********************//
    let candidateFirstName = input.question("Enter your First Name:  ");
    let candidateLastName = input.question("Enter your Last Name:  ");
    let candidateName = candidateFirstName.toUpperCase() + " " + candidateLastName.toUpperCase();
    console.log ("Hello " + candidateFirstName + "! Good luck on your quiz. \n");
    console.log(candidateName);
/********************************************************************/
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    /*let candidateFirstName = input.question("Enter your First Name:  "); //formatting first name
        candidateFirstName = $<candidateFirstName>
   // let candidateLastName = input.question("Enter your Last Name:  ");
  
  //return candidateName.charAt(0).toUpperCase() + s.slice(1) //formatting first name
 */ 
}
  
        
//***************Candidate Questions******************//
    let question1 = input.question("1) Who was the first American woman in space? ");
    let question2 = input.question("2) True or false: 5 kilometer == 5000 meters? ");
    let question3 = input.question("3) (5 + 3)/2 * 10 = ? ");
    let question4 = input.question("4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
    let question5 = input.question("5) What is the minimum crew size for the ISS? ");
console.log(question1, question2, question3, question4, question5);

 //***************Candidate Answers***********************//     
     let answer1 = question1;
     let answer2 = question2;
     let answer3 = question3;   
     let answer4 = question4;
     let answer5 = question5;
console.log(answer1,answer2, answer3, answer4, answer5);

//*******************Correct Answers*******************//
    let correctAnswer1 = "Sally Ride";
    let correctAnswer2 = "true";
    let correctAnswer3 = "40";
    let correctAnswer4 = "Trajectory";
    let correctAnswer5 = "3";
console.log(correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4,correctAnswer5);
//**********************Basic Printout Format**************//
console.log (`Your answer: ${question1} \nCorrect Answer: ${correctAnswer1} `);
console.log (`Your answer: ${question2} \nCorrect Answer: ${correctAnswer2} `);
console.log (`Your answer: ${question3} \nCorrect Answer: ${correctAnswer3} `);
console.log (`Your answer: ${question4} \nCorrect Answer: ${correctAnswer4} `);
console.log (`Your answer: ${question5} \nCorrect Answer: ${correctAnswer5} `);

 //*******************Test Outcome Display*******************//
    let numberOfCorrect = 4;
    let numberOfQuestions = 5;
    let status = "Passed"; //(grade >= 80){Passed} 
        grade = ((numberOfCorrect) / (numberOfQuestions)* 100);
console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrect} of 5 responses correct <<<\n
     >>> Status: ${status} <<<`); 
  

//***************************End of Format**************************//
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    //for (let i = 0; i < question.length; i++){
    //candidateAnswer[i] = input.questions[i]
   
    } 
    
    


function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
//console.log("Hello " + candidateFirstName + "! Good luck on your quiz." );

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