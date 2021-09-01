let users = {
  admin: {
    id: 'admin',
    name: 'Admin',
    occ: 'teacher',
    avatarURL: "https://www.w3schools.com/w3images/avatar2.png",
    answers: {},
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9', '6ni6ok3ym7mf1p33lnez', 'loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do', 'xj352vofupe1dqz9emx13r']
  },
  sarah: {
    id: 'sarah',
    name: 'Sarah',
    occ: 'student',
    avatarURL: "https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/42-512.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: []
  },
  tyler: {
    id: 'tyler',
    name: 'Tyler',
    occ: 'student',
    avatarURL:  "https://icon-library.com/images/icon-for-student/icon-for-student-8.jpg",
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: [],
  },
  sam: {
    id: 'sam',
    name: 'Sam',
    occ: 'student',
    avatarURL: "https://icon-library.com/images/icon-for-student/icon-for-student-14.jpg",
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: [],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'admin',
    timestamp: 1467166872634,
    question: {
      text: 'Question 1'
    },
    optionOne: {
      votes: ['sarahedo'],
      text: 'Answer 1',
    },
    optionTwo: {
      votes: [],
      text: 'Answer 2',
    },
    optionThree: {
      votes: ['sarahedo'],
      text: 'Answer 3',
    },
    optionFour: {
      votes: [],
      text: 'Answer 4'
    },
    correctAnswer: {
      text: 'Answer 3' 
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'admin',
    timestamp: 1468479767190,
    question: {
      text: 'Question 2'
    },
    optionOne: {
      votes: [],
      text: 'Answer 1',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'Answer 2'
    },
    optionThree: {
      votes: [],
      text: 'Answer 3',
    },
    optionFour: {
      votes: ['johndoe', 'sarahedo'],
      text: 'Answer 4'
    },
    correctAnswer: {
      text: 'Answer 3' 
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'admin',
    timestamp: 1488579767190,
    question: {
      text: 'Question 3'
    },
    optionOne: {
      votes: [],
      text: 'Answer 1',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'Answer 2'
    },
    optionThree: {
      votes: [],
      text: 'Answer 3',
    },
    optionFour: {
      votes: ['sarahedo'],
      text: 'Answer 4'
    },
    correctAnswer: {
      text: 'Answer 3' 
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'admin',
    timestamp: 1482579767190,
    question: {
      text: 'Question 4'
    },
    optionOne: {
      votes: [],
      text: 'Answer 1',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'Answer 2'
    },
    optionThree: {
      votes: [],
      text: 'Answer 3',
    },
    optionFour: {
      votes: ['sarahedo'],
      text: 'Answer 4'
    },
    correctAnswer: {
      text: 'Answer 3' 
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'admin',
    timestamp: 1489579767190,
    question: {
      text: 'Question 5'
    },
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'Answer 1',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'Answer 2'
    },
    optionThree: {
      votes: ['tylermcginnis'],
      text: 'Answer 3',
    },
    optionFour: {
      votes: ['johndoe'],
      text: 'Answer 4'
    },
    correctAnswer: {
      text: 'Answer 3' 
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'admin',
    timestamp: 1493579767190,
    question: {
      text: 'Question 6'
    },
    optionOne: {
      votes: ['johndoe'],
      text: 'Answer 1',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'Answer 2'
    },
    optionThree: {
      votes: ['johndoe'],
      text: 'Answer 3',
    },
    optionFour: {
      votes: ['tylermcginnis'],
      text: 'Answer 4'
    },
    correctAnswer: {
      text: 'Answer 3' 
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUser(id) {
  return new Promise((res, rej) => {
      setTimeout(() => res(users[id]), 1000)
  });
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion ({ questionText, optionOneText, optionTwoText, optionThreeText,  optionFourText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    question: {
      text: questionText,
    },
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
    optionThree: {
      votes: [],
      text: optionThreeText,
    },
    optionFour: {
      votes: [],
      text: optionFourText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question)

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
