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