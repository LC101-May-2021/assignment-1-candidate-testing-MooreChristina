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
     candidateFirstName = candidateFirstName[0].toUpperCase() + candidateFirstName.slice(1);
     console.log (`Hello ${candidateFirstName}! Good luck on your quiz.\n`);
     candidateName = candidateFirstName + " " + candidateLastName;                           
 return candidateName;                                              //return candidateName
 }                                              

/*  let question1 = ("1) Who was the first American woman in space? ");
    let question2 = ("2) True or false: 5 kilometer == 5000 meters? ");
    let question3 = ("3) (5 + 3)/2 * 10 = ? ");
    let question4 = ("4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
    let question5 = ("5) What is the minimum crew size for the ISS? "); 
*/
let questions = [("1) Who was the first American woman in space? "),
                 ("2) True or false: 5 kilometer == 5000 meters? "),
                 ("3) (5 + 3)/2 * 10 = ? "),
                 ("4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? "),
                 ("5) What is the minimum crew size for the ISS? ")];
//Part 2 //
let candidateAnswer = "";
let candidateAnswers = [];
//let i;
function askQuestion(){
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    for (let i = 0; i <= 5; i++){ //cannot use i<candidateAnswer.length; length of array not defined yet
      candidateAnswer = input.question(questions[i]) //asks questions & stores input as candidateAnswer
      candidateAnswers.push(candidateAnswer)  //pushes candidateAnswer into new array candidateAnswers
    }   
    return candidateAnswers.toUpperCase();    //returns pushed values into candidateAnswers array 
    //console.log(candidateAnswers) in runProgram section and received array of answers input by candidate. Now, candidateAnswers has values in correct index position//
    }

let candidateAnswerKey = candidateAnswer.toString().split(',');
console.log(candidateAnswerKey);
let question; 
let correctAnswer = ["Sally Ride","true","40","Trajectory","3"];
let correctAnswers = correctAnswer.toString().split(',');
let differenceInAnswers = [];
let numberOfQuestions = 5;     //number of questions; can be value of questions array 
let grade = 0;
let status = "FAILED!";
//correctAnswer = correctAnswer.toUpperCase();
//candidateAnswer = candidateAnswer.toString().slice().split(',').map(String);
//correctAnswer = correctAnswer.toString().split(',').map(String);

//correctAnswers = correctAnswer. 
//Part 3 //
function gradeQuiz(candidateAnswerKey) {
    /*for (let i = 0; i<=5; i++){
            if (candidateAnswerKey(i) == correctAnswer[i].toUpperCase()){
        
            }
                let numberOfCorrect = (numberOfCorrect + 1);
                let grade = ((numberOfCorrect) / (numberOfQuestions)* 100);  //calculate grade
            if (grade >= 80){
                status = "Congratulations! You passed the quiz."
            }*/
            return grade;
            }  
//console.log(numberOfCorrect, status, grade);

/*let candidateReport = console.log(`
Candidate Name: ${candidateName}\n ${questions[0]}\nYour Answer: ${candidateAnswer[0]}\nCorrect Answer: ${correctAnswer[0]}\n\n
>>> Overall Grade: ${grade}% (${numberOfCorrect} of 5 responses correct <<<\n
>>> Status: ${status} <<<`); */

function runProgram() {
  askForName(candidateName);
  // TODO 1.1c: Ask for candidate's name //


  askQuestion(candidateAnswer);

 
console.log(candidateAnswer.push(candidateAnswers));
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