use strict";
$(function () {
var questions = [ {
    questionID: 1,
    text: "Назовите столицу страны Казахстан?",
    answers: [ {
        text: "Алма-Ата",
        correct: false,
        value: 1
      }, {
        text: "Астана",
        correct: true,
        value: 2
      }, {
        text: "Караганда",
        correct: false,
        value: 3
      }, {
        text: "Актау",
        correct: false,
        value: 4
      }
    ]
  }, {
    questionID: 2,
    text: "Назовите столицу страны Италия?",
    answers: [ {
        text: "Неаполь",
        correct: false,
        value: 1
      }, {
        text: "Рим",
        correct: true,
        value: 2
      }, {
        text: "Помпеи",
        correct: false,
        value: 3
      }, {
        text: "Милан",
        correct: false,
        value: 4
      }
    ]
  }, {
    questionID: 3,
    text: "Назовите страну, где столица Кито?",
    answers: [ {
        text: "Эквадор",
        correct: true,
        value: 1
      }, {
        text: "ЦАР",
        correct: false,
        value: 2
      }, {
        text: "Палау",
        correct: false,
        value: 3
      }, {
        text: "Туркмения",
        correct: false,
        value: 4
      }
    ]
  }, {
    questionID: 4,
    text: "Назовите страну, где столица Бриджтаун?",
    answers: [ {
        text: "Барбадос",
        correct: true,
        value: 1
      }, {
        text: "Фиджи",
        correct: false,
        value: 2
      }, {
        text: "Республика Корея",
        correct: false,
        value: 3
      }, {
        text: "Македония",
        correct: false,
        value: 4
      }
    ]
  }, {
    questionID: 5,
    text: "В какой стране находится город Берген?",
    answers: [ {
        text: "Норвегия",
        correct: true,
        value: 1
      }, {
        text: "Франция",
        correct: false,
        value: 2
      }, {
        text: "Швеция",
        correct: false,
        value: 3
      }, {
        text: "Дания",
        correct: false,
        value: 4
      }
    ]
  }
];
localStorage.setItem('questions', JSON.stringify(questions));
})
