function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1 class='text-danger'>Result</h1>";
    gameOverHTML += "<h2 id='score' class='text-primary'> Your scores: " + quiz.score +"/10"+ "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the capital of India? (General)", ["Mumbai", "New Delhi", "Bangalore", "Kolkata"], "New Delhi"),

    new Question("What is the name of the tallest statue in the world? (General)", ["Statue of Liberty", "Spring Temple Buddha", "Statue of Unity", "Christ the Redeemer"], "Statue of Unity"),
    

    new Question("What is the chemical symbol for water? (Science)", ["H₂O", "O₂", "CO₂", "HCl"], "H₂O"),
    

    new Question(" Which gas do plants absorb from the atmosphere during photosynthesis? (Science)", ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], "Carbon Dioxide"),

    new Question("Who was the first President of India? (History)", ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"], "Dr. Rajendra Prasad"),
   
    new Question("Who was the first Education Minister of India? (History)", ["Dr. B.R. Ambedkar", "Dr. S. Radhakrishnan", "Maulana Abul Kalam Azad", "C.V. Raman"], "Maulana Abul Kalam Azad"),
   
    new Question("Who is the founder of Microsoft? (Technology)", ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"], "Bill Gates"),
   
    new Question("What does “HTML” stand for in web development? (Technology)", ["HyperText Markup Language", "High - Tech Machine Language", "Home Tool Markup Language", "HyperTool Machine Language"], "HyperText Markup Language"),
   
    new Question("What is the value of π (pi) to two decimal places? (Mathematics)", ["3.12", "3.14", "3.16", "3.18"], "3.14"),
   
    new Question("If a circle has a radius of 7 cm, what is its area? (Mathematics)", ["143 cm²", "154 cm²", "164 cm²", "147 cm²"], "154 cm²"),
];


var quiz = new Quiz(questions);


populate();