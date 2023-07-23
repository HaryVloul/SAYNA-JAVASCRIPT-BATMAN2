const anchors = document.querySelectorAll(".anchor");
anchors.forEach(elem => elem.addEventListener("click", smoothing));

function smoothing(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    })
}


let logoBat = document.querySelector("#logoBat");
document.onmousemove = follow;
    function follow(e){
        var x =  e.pageX;
        var y =  e.pageY;
                        
        logoBat.style.left = (x+1)+'px';
        logoBat.style.top  = (y+1)+'px';
    }
    
    const questions = [
        {
          question: "Quel est l’autre nom de l’Homme-Mystère ?",
          response: [{text: "Le Saphinx",isGood: false},{text: "Le Saphir",isGood: false},{text: "Le Joker",isGood: false},{text: "Toutes les réponses sont exactes",isGood: true}]
        },
        {
          question: "Quelle est l’ancienne profession de Harley Quinn ?",
          response: [{text: "Infimière",isGood: false},{text: "Psychiatre",isGood: true},{text: "Dentiste",isGood: false}]
        },
        {
          question: "Quel est l’objet fétiche de Double Face ?",
          response: [{text: "Une pièce",isGood: true},{text: "Un livre",isGood: false},{text: "Un couteau",isGood: false}]
        },
        {
          question: "Quelle ville Batman défend-il ?",
          response: [{text: "Gotham City",isGood: true},{text: "Starling City",isGood: false},{text: "Tananarive",isGood: false}]
        },
        {
          question: "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
          response: [{text: "Georges Clooney",isGood: false},{text: "Val Kilmer",isGood: false},{text: "Mickael Keaton",isGood: false},{text: "Aucune des réponses n'est exacte",isGood: true}]
        },
        {
          question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
          response: [{text: "Matina et Adam",isGood: false},{text: "Elaine et Georges",isGood: true},{text: "Martha et James",isGood: false}]
        },
        {
          question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
          response: [{text: "Le Pingouin",isGood: false},{text: "L'Homme mystère",isGood: true},{text: "Le Geek",isGood: false}]
        },
        {
          question: " Qui interprète le Joker en 2008 ?",
          response: [{text: "Heath Legder",isGood: false},{text: "Haeth Ledger",isGood: false},{text: "Heath Ledger",isGood: true}]
        },
        {
          question: "En quelle année Robin fait il sa première apparition ?",
          response: [{text: "1940",isGood: true},{text: "1936",isGood: false},{text: "1941",isGood: false}]
        },
        {
          question: "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
          response: [{text: "Oracle Huntress",isGood: true},{text: "Black Canary",isGood: false},{text: "L'Epouvantail",isGood: false}]
        },
        {
          question: "Batman c’est aussi le nom d’une ville en...",
          response: [{text: "Islande",isGood: false},{text: "Turquie",isGood: true},{text: "Allemagne",isGood: false}]
        },
        {
          question: "Qui a realisé Batman en 1966 ?",
          response: [{text: "Stanley Kubrick",isGood: false},{text: "Andy Warhol",isGood: false},{text: "Leslie Martinson",isGood: true}]
        }
    ];

    const title = document.querySelector(".title");
    const question = document.querySelector("#question");
    const answerButton = document.querySelector("#answersButton");
    const next = document.querySelector(".nextQuestion");
    let image = document.createElement("img");
    let illustration = document.querySelector(".illustration");

    let questionNumber = 0
    let pointsGetted = 0;

    document.querySelector(".start").addEventListener("click", function () {
        document.querySelector(".quiz").style.display = "block";
        });
    

    function startQuiz() {
        questionNumber = 0;
        pointsGetted = 0;
        
        next.textContent = "QUESTION SUIVANTE";
        showQuestion();
    }

    function showQuestion() {
        resetState();
        
        title.innerHTML = (questionNumber+1)+"/"+(questions.length);
        let currentQuestion = questions[questionNumber];
        question.innerHTML = currentQuestion.question;

        currentQuestion.response.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.isGood){
            button.dataset.isGood = answer.isGood;
        }
        button.addEventListener("click", selectAnswer)
        });
    }

function resetState() {
    next.style.display="none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedAnswer = e.target;
    selectedAnswer.style.transform = "scale(1.05)";
    const isCorrect = selectedAnswer.dataset.isGood==="true";
    if (isCorrect) {
        selectedAnswer.classList.add("correct");
        pointsGetted++;
    } else {
        selectedAnswer.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.isGood === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.display = "block" ;
}

function showScrore() {
    let ttl;
    let message
    resetState();
    if (pointsGetted<=5) {
        ttl = pointsGetted+"/12 CE N'EST PAS TOUT A FAIT CA...";
        message = "Oula ! Heureusement que Ridler est sous les verrous... Il faut que vous vous repassiez les films, cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! Allez rien n'est perdu !";
    } else if (pointsGetted<=10) {
        ttl = pointsGetted+"/12 PAS MAL !";
        message = "Encore un peu d'entraînement avec le chevalier noir vous serait bénéfique, mais vous pouvez marcher la tête haute vos connaissances sont là.A vous de les consolider, foncez Gotham est votre terrainde chasse";
    }
    else{
        ttl = pointsGetted+"/12 BRAVO !";
        message = "Vous êtes véritablement un super fan de l'univers de Batman ! Commics, films rien ne vous échappe. Bruce Wayne a de quoi être fier. Gotham est en paix et Batman peut prendre sa retraite, vous veuillez aux grains !";
    }
document.querySelector(".quiz").style.backgroundColor = "rgb(78, 40, 9)";
title.innerHTML = ttl;
question.innerHTML = message;
next.innerHTML = "RECOMMENCER LE QUIZ";
next.style.display = "block";
}

function handleNextButton() {
    questionNumber++;
    if (questionNumber<questions.length) {
        showQuestion();
    }
    else{
        showScrore();
    }
}

next.addEventListener("click", ()=>{
    if (questionNumber<questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();