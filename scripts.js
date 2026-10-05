let score = 0;
let correctAnswer = 0;
const operations = ["+", "-", "*"];

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 11);
    const operation = operations[Math.floor(Math.random() * operations.length)];

    document.getElementById("question").textContent =
        num1 + " " + operation + " " + num2;

    if (operation === "+") {
        correctAnswer = num1 + num2;
    } else if (operation === "-") {
        correctAnswer = num1 - num2;
    } else if (operation === "*") {
        correctAnswer = num1 * num2;
    }
}

function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const message = document.getElementById("message");
    const userAnswer = Number(answerInput.value);

    if (answerInput.value === "") {
        message.textContent = "Please enter an answer.";
        message.style.color = "red";
        return;
    }

    const previousCorrectAnswer = correctAnswer;

    generateQuestion();

    if (userAnswer === previousCorrectAnswer) {
        score++;
        message.textContent = "Correct!";
        message.style.color = "green";
    } else {
        message.textContent =
            "Wrong! Correct answer is " + previousCorrectAnswer + ".";
        message.style.color = "red";
    }

    document.getElementById("score").textContent = score;
    answerInput.value = "";
    answerInput.focus();

    if (score >= 5) {
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
    }
}

=function playAgain() {
    score = 0;

    document.getElementById("score").textContent = score;
    document.getElementById("message").textContent = "";
    document.getElementById("answer").value = "";

    document.getElementById("div-success").style.display = "none";
    document.getElementById("div-questions").style.display = "block";

    generateQuestion();
    document.getElementById("answer").focus();
}

generateQuestion();
