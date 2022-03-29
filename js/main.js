const questionnaire = document.querySelector(".questionnaire");
const Préambule = document.querySelector(".Préambule");
const currentquestion = document.querySelector(".question");
const answerInputs = document.querySelector(".answer-inputs");
const animateBox = document.querySelector(".animation");
const result = document.querySelector(".Préambule h1");
const resultMessage = document.querySelectorAll(".Préambule p");


const testBtn = document.querySelector(".start-btn");
const stepper = document.querySelectorAll(".stepper h1");
const progressBar = document.querySelector(".bar");
const questionNumber = document.querySelector(".question-number");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");


testBtn.addEventListener("click", startTest);

animateBox.addEventListener("input", (e) => {
    const input = e.target;


    if (input.type === "number") {
        const number = parseFloat(input.value);

        if (number >= input.min && number <= input.max) {
            answers[input.name] = input.value;
            console.log(answers);

            nextBtn.disabled = false;
        } else {
            nextBtn.disabled = true;
        }
    } else {
        answers[input.name] = input.id;
        console.log(answers);
        nextBtn.disabled = false;
    }
});


let currentQuestionIndex = 0;

function hideprevious() {
    if (currentQuestionIndex === 0) {
        previousBtn.classList.add("hide");
    } else {
        previousBtn.classList.remove("hide");
    }
}

function startTest() {
    stepper[0].classList.remove("select");
    stepper[1].classList.add("select");
    testBtn.style.display = "none";
    Préambule.style.display = "none";
    questionnaire.style.display = "block";
    hideprevious();
    nextBtn.disabled = true;
    showQuestion(questions[currentQuestionIndex]);

}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < 21) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
        folowProgress(currentQuestionIndex);
        hideprevious();
        transition("next");
        nextBtn.disabled = true;
        if (currentQuestionIndex === 21) {
            nextBtn.innerText = "Terminer le test";
            nextBtn.classList.add("result");
            const resultBtn = document.querySelector(".result");
            resultBtn.addEventListener("click", Results);
        } else {
            nextBtn.innerText = "Suivant";
        }
    }
});

previousBtn.addEventListener("click", () => {
    currentQuestionIndex--;
    showQuestion(questions[currentQuestionIndex]);
    folowProgress(currentQuestionIndex);
    hideprevious();
    transition("previous");
    nextBtn.disabled = true;
    if (currentQuestionIndex === 21) {
        nextBtn.innerText = "Terminer le test";
    } else {
        nextBtn.innerText = "Suivant";
        nextBtn.classList.remove("result");
    }
});

function showQuestion(question) {
    currentquestion.innerText = question.question;
    answerInputs.innerHTML = "";
    const inputAnswer = question.input.answer;
    const input = question.input;

    if (question.input.type === "radio") {
        inputAnswer.forEach((answer) => {
            answerInputs.innerHTML += `
                    <div>
                        <input type="radio" name="${input.qNumber}" id="${answer.text}">
                        <label for="${answer.text}">
                        <i class="fas ${answer.icon}"></i>
                        <span>${answer.text}</span> </label>
                    </div>`;
        });
    } else {
        answerInputs.innerHTML += `<input type="number" name="${input.qNumber}" id="${input.name}" min="${input.min}" max="${input.max}" placeholder="${input.min} - ${input.max}">
                                    <span class="input-span">${input.name}</span>`;
    }
}


function folowProgress(number) {
    const currentNmber = number + 1;

    questionNumber.innerText = currentNmber;
    progressBar.style.width = `calc(${currentNmber} * calc(100% / 22))`;
}

function transition(frame) {
    animateBox.style.animation = ` ${frame} .5s ease `;
    animateBox.addEventListener("animationend", () => {
        animateBox.style.animation = ``;
    });
}

let answers = {};

let severity = 0;

function Results() {

    if (answers["Q1"] === "Oui") {
        severity++;
    }


    if (answers["Q8"] === "Oui" || answers["Q9"] === "Oui") {
        severity++;
    }


    if (answers["Q10"] === "Fatigué(e)" || answers["Q10"] === "Très fatigué") {
        severity++;
    }


    if (answers["Q14"] === "Oui" || answers["Q15"] === "Oui") {
        severity++;
    }


    showResult(severity);


}

function showResult(severity) {
    stepper[1].classList.remove("select");
    stepper[2].classList.add("select");
    testBtn.style.display = "block";
    Préambule.style.display = "block";
    questionnaire.style.display = "none";
    testBtn.textContent = " Recommencer le test";
    testBtn.addEventListener("click", () => {
        window.location.reload();
    });
    result.innerText = "Résultats";

    if (severity === 0) {
        resultMessage[0].innerText =
            "Votre situation "
        resultMessage[1].innerText =
            "Restez chez vous ";
        resultMessage[0].style.fontSize = "30px";
        resultMessage[0].style.fontWeight = "bold";
        resultMessage[0].style.color = "#787878";
    } else if (severity === 1) {
        resultMessage[0].innerText =
            "Nous vous conseillons";
        resultMessage[1].innerText =
            "Restez chez vous";
        resultMessage[0].style.fontSize = "30px";
        resultMessage[0].style.fontWeight = "bold";
        resultMessage[0].style.color = "#787878";
    } else if (severity === 2) {
        resultMessage[0].innerText =
            "Vous pouvez faire une téléconsultation";
        resultMessage[1].innerText =
            "Restez chez vous au maximum ";
        resultMessage[0].style.fontSize = "30px";
        resultMessage[0].style.fontWeight = "bold";
        resultMessage[0].style.color = "#787878";
    } else {
        resultMessage[0].innerText = "Appelez le 141";
        resultMessage[1].innerText =
            "Restez chez vous au maximum";

        resultMessage[0].style.color = "#d63031";
        resultMessage[0].style.fontSize = "50px";
        resultMessage[0].style.fontWeight = "bold";
    }
}










const questions = [{
        question: "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",

        input: {
            type: "radio",
            qNumber: "Q1",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Quelle est votre température corporelle ?",

        input: {
            type: "number",
            qNumber: "Q2",
            name: "degrés",
            min: 34,
            max: 42,
        },
    },
    {
        question: "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?",

        input: {
            type: "radio",
            qNumber: "Q3",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours?",

        input: {
            type: "radio",
            qNumber: "Q4",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours?",

        input: {
            type: "radio",
            qNumber: "Q5",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous de la diarrhée ces dernières 24 heures(au moins 3 selles molles)",

        input: {
            type: "radio",
            qNumber: "Q6",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous une fatigue inhabituelle ces derniers jours ?",

        input: {
            type: "radio",
            qNumber: "Q7",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous une fatigue inhabituelle ces derniers jours ?",

        input: {
            type: "radio",
            qNumber: "Q8",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle?",

        input: {
            type: "radio",
            qNumber: "Q9",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Comment vous sentez-vous ? Bien/Assez bien/mal/très mal",

        input: {
            type: "radio",
            qNumber: "Q10",
            answer: [{
                    text: "Bien",
                    icon: " far fa-laugh",
                },
                {
                    text: "Assez bien",
                    icon: " far fa-smile",
                },
                {
                    text: "Fatigué(e)",
                    icon: " far fa-frown",
                },
                {
                    text: "Très fatigué",
                    icon: "far fa-dizzy",
                },
            ],
        },
    },
    {
        question: "Quel est votre âge ?",

        input: {
            type: "number",
            qNumber: "Q11",
            name: "ans",
            min: 15,
            max: 110,
        },
    },
    {
        question: "Quel est votre poids ?",

        input: {
            type: "number",
            qNumber: "Q12",
            name: "kg",
            min: 20,
            max: 250,
        },
    },
    {
        question: "Quelle est votre taille ? ",

        input: {
            type: "number",
            qNumber: "Q13",
            name: "cm",
            min: 80,
            max: 250,
        },
    },
    {
        question: "Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",

        input: {
            type: "radio",
            qNumber: "Q14",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: " Êtes-vous diabétique ? ",

        input: {
            type: "radio",
            qNumber: "Q15",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous ou avez-vous eu un cancer ?",

        input: {
            type: "radio",
            qNumber: "Q16",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? ",

        input: {
            type: "radio",
            qNumber: "Q17",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",

        input: {
            type: "radio",
            qNumber: "Q18",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous une maladie chronique du foie ?",

        input: {
            type: "radio",
            qNumber: "Q19",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Êtes-vous enceinte ?",

        input: {
            type: "radio",
            qNumber: "Q20",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
                {
                    text: "Non applicable",
                    icon: "fa-male",
                },
            ],
        },
    },
    {
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires",

        input: {
            type: "radio",
            qNumber: "Q21",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide",

        input: {
            type: "radio",
            qNumber: "Q22",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
];