const input = require('readline-sync');


//let candidateName = " ";
  /*const capitalize = (x) => {
  if (typeof x !== 'string') return x
*/
//********************Candidate Name********************//
    //let candidateFirstName = input.question("Enter your First Name:  ");
    //let candidateLastName = input.question("Enter your Last Name:  ");
    //let candidateName = candidateFirstName.toUpperCase() + " " + candidateLastName.toUpperCase();
    //console.log (`Hello + candidateFirstName + ! Good luck on your quiz.\n`);
    //console.log(candidateName);
        
/***************Candidate Questions******************
    let question1 = input.question("1) Who was the first American woman in space? ");
    let question2 = input.question("2) True or false: 5 kilometer == 5000 meters? ");
    let question3 = input.question("3) (5 + 3)/2 * 10 = ? ");
    let question4 = input.question("4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
    let question5 = input.question("5) What is the minimum crew size for the ISS? ");
console.log(question1, question2, question3, question4, question5);

 //***************Candidate Answers***********************  
     let answer1 = question1;
     let answer2 = question2;
     let answer3 = question3;   
     let answer4 = question4;
     let answer5 = question5;
console.log(answer1,answer2, answer3, answer4, answer5);

//*******************Correct Answers*******************
    let correctAnswer1 = "Sally Ride";
    let correctAnswer2 = "true";
    let correctAnswer3 = "40";
    let correctAnswer4 = "Trajectory";
    let correctAnswer5 = "3";
console.log(correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4,correctAnswer5);
//**********************Basic Printout Format**************
console.log (`Your answer: ${question1} \nCorrect Answer: ${correctAnswer1} `);
console.log (`Your answer: ${question2} \nCorrect Answer: ${correctAnswer2} `);
console.log (`Your answer: ${question3} \nCorrect Answer: ${correctAnswer3} `);
console.log (`Your answer: ${question4} \nCorrect Answer: ${correctAnswer4} `);
console.log (`Your answer: ${question5} \nCorrect Answer: ${correctAnswer5} `);

 //*******************Test Outcome Display*******************
    let numberOfCorrect = 4;
    let numberOfQuestions = 5;
    let status = "Passed"; //(grade >= 80){Passed} 
        grade = ((numberOfCorrect) / (numberOfQuestions)* 100);
console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrect} of 5 responses correct <<<\n
     >>> Status: ${status} <<<`); 
  
//////////////////////////////////////////////////////////////////////
//***************************End of Format**************************///
/////////////////////////////////////////////////////////////////////

let candidateFirstName = "";
let candidateLastName = "";
let candidateName = "";
function askForName(candidateName) {
  // TODO 1.1b: Ask for candidate's name //
     candidateFirstName = input.question("Enter your First Name:  "); //first name
     candidateLastName = input.question("Enter your Last Name:  "); //last name
     candidateName = candidateFirstName + " " + candidateLastName;                           
 return candidateName;                                              //return candidateName
 }                                              

//let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5 kilometer == 5000 meters? ","3) (5 + 3)/2 * 10 = ? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "]; //


let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = " ";
let candidateAnswer = [];
let questions; 
let correctAnswer;



/*  let question1 = ("1) Who was the first American woman in space? ");
    let question2 = ("2) True or false: 5 kilometer == 5000 meters? ");
    let question3 = ("3) (5 + 3)/2 * 10 = ? ");
    let question4 = ("4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
    let question5 = ("5) What is the minimum crew size for the ISS? "); 
*/
let question = [("1) Who was the first American woman in space? "),
                 ("2) True or false: 5 kilometer == 5000 meters? "),
                 ("3) (5 + 3)/2 * 10 = ? "),
                 ("4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? "),
                 ("5) What is the minimum crew size for the ISS? ")];

function askQuestion(candidateAnswer) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    for (let i = 0; i < 5; i++){ //cannot use i<candidateAnswer.length; length of array not defined yet
      candidateAnswers = input.question(question[i]) //asks questions & stores input as candidateAnswer
      candidateAnswer.push(candidateAnswers)  //pushes candidateAnswers into new array candidateAnswer
    }   
    return candidateAnswer;    //returns pushed values into candidateAnswers array
    }
    


function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
console.log (`Hello ${candidateFirstName}! Good luck on your quiz.\n`);

  askQuestion(candidateAnswer);
console.log(candidateAnswer); 
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