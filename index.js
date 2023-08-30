const questions = [{
	question: "What is capital of India?",
	answers: [
		{ text: "Gandhinagar", correct: false },
		{ text: "Surat", correct: false },
		{ text: "Delhi", correct: true },
		{ text: "Mumbai", correct: false }
	]
},
{
	question: "What is the capital of Thailand?",
	answers: [
		{ text: "Lampang", correct: false, isSelected: false },
		{ text: "Phuket", correct: false },
		{ text: "Ayutthaya", correct: false },
		{ text: "Bangkok", correct: true }
	]
},
{
	question: "What is the capital of Gujarat",
	answers: [
		{ text: "Surat", correct: false },
		{ text: "Vadodara", correct: false },
		{ text: "Gandhinagar", correct: true },
		{ text: "Rajkot", correct: false }
	]
},
{
	question: "Who is iron man of india?",
	answers: [
		{ text: "Rajendra Prasad", correct: false },
		{ text: "Jawaharlal nehru", correct: false },
		{ text: "Vallabhbhai patel", correct: true },
		{ text: "Narendra Modi", correct: false }
	]
},
{
	question: "What is new laws to replace in indian government?",
	answers: [
		{ text: "IPC,CrPC,IEA", correct: true },
		{ text: "NCBC,AP,IPC", correct: false },
		{ text: "No Change", correct: false },
		{ text: "THE CENTRAL SILK BOARD ACT", correct: false }
	]
},
{
	question: "Who is prime minister of india current?",
	answers: [
		{ text: "Nirmala Sitharaman", correct:false },
		{ text: "Dharmendra Pradhan", correct: false },
		{ text: "Rajnath Singh", correct: false },
		{ text: "Narendra Modi", correct: true }
	]
},
{
	question: "Who is Defence Minister of India current?",
	answers: [
		{ text: "Nirmala Sitharaman", correct:false },
		{ text: "Rajnath Singh", correct: true },
		{ text: "Dharmendra Pradhan", correct: false },
		{ text: "Narendra Modi", correct: false }
	]
},
{
	question: "Who is missile man of india?",
	answers: [
		{ text: "A. P. J. Abdul Kalam", correct: true },
		{ text: "C.V. Raman", correct:false },
		{ text: "Dr. Meghnad Saha", correct: false },
		{ text: "Venkatraman Radhakrishnan", correct: false }
	]
},
{
	question: "Who is great father of indian?",
	answers: [
		{ text: "Mahatma Gandhi", correct: true },
		{ text: "A. P. J. Abdul Kalam", correct:false },
		{ text: "Har Gobind Khorana", correct: false },
		{ text: "Venkatraman Radhakrishnan", correct: false }
	]
},
{
	question: "How many line in Ashoka Chakra?",
	answers: [
		{ text: "250 lines", correct:false },
		{ text: "24 lines", correct: true },
		{ text: "15 lines", correct: false },
		{ text: "30 lines", correct: false }
	]
}
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("ans-btns");
const nextButton = document.getElementById("next-question");
const message = document.getElementById("show");
let currQuestionindex = 0;
let score = 0;
let start=function startQuiz() {
	message.innerHTML='';
	currQuestionindex = 0;
	score = 0;
	nextButton.innerHTML = "NEXT";
showQES();
}
let showQES=function showQuestions() {
	resetState();
	let currentQuestions = questions[currQuestionindex];
	let qusNo = currQuestionindex + 1;//question number to show
	questionElement.innerHTML = qusNo + ". " + currentQuestions.
		question;
	currentQuestions.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButton.appendChild(button);//to display the in html button so we use apppedchild 
	    if(answer.correct){
			button.dataset.correct=answer.correct;
		}
		button.addEventListener("click",selectAnswer);
	});
}
function resetState(){//to remove answers button
	nextButton.style.display='none';
	while(answerButton.firstChild){
		answerButton.removeChild(answerButton.firstChild);
	}
}
function selectAnswer(t){
	const selectedButton=t.target;
	const isCorrect=selectedButton.dataset.correct === "true";
	if(isCorrect){
		selectedButton.classList.add("correct");//if coorest change green color
	    score++;
	}else{
		selectedButton.classList.add("incorrect");//is in correct change red color
	}
	Array.from(answerButton.children).forEach(button=>{
		if(button.dataset.correct==="true"){
			button.classList.add("correct");
		}
		button.disabled=true;//once clik cannot be change button
	});
	nextButton.style.display="block";//after compelet that question go next questions so use
}
function showScore(){
	resetState();
	questionElement.innerHTML=`You are score ${score} out of ${questions.length} `
    nextButton.innerHTML='Play Again';
	nextButton.style.display="block";
	message.innerHTML="<center>Thank You For attening Have you Enjoy!!</center>";	
}

let handel=function handelNextButton(){
	currQuestionindex++;
	if(currQuestionindex<questions.length){
		showQES();
	}else{
		showScore();
	}
}
nextButton.addEventListener("click",()=>{
	if(currQuestionindex<questions.length){
		handel();
	}else{
		start();
	}
});
start();

 