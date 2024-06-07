export const questionsData = [
  {
    id: 0,
    quizId: 1,
    content: 'Que fait le chat ?',
    isFreeForm: 0,
    media: { path: './assets/cat1.png' },
  },
  {
    id: 1,
    quizId: 1,
    content: 'Que fait le chat ?',
    isFreeForm: 0,
    media: { path: './assets/cat2.png' },
  },
  {
    id: 2,
    quizId: 1,
    content: 'Que fait le chat ?',
    isFreeForm: 0,
    media: { path: './assets/cat3.png' },
  },
  {
    id: 3,
    quizId: 1,
    content: 'Que fait le chat ?',
    isFreeForm: 0,
    media: { path: './assets/chat_ronronne.mp4' },
  },
  {
    id: 4,
    quizId: 1,
    content: 'Le chat est ?',
    isFreeForm: 0,
    media: { path: './assets/chat_stresse.mp4' },
  },
  {
    id: 5,
    quizId: 1,
    content: 'Le chat est en train ?',
    isFreeForm: 0,
    media: { path: './assets/chat_repos.mp4' },
  },
  {
    id: 6,
    quizId: 1,
    content: 'Le chat est en train ?',
    isFreeForm: 0,
    media: { path: './assets/chat_toilettage.mp4' },
  },
];

export const answersData = [
  { content: 'Il se repose', id: 1, questionId: 0, correct: false },
  { content: 'Il se roule', id: 2, questionId: 0, correct: false },
  { content: "Il s'ennuie", id: 3, questionId: 0, correct: false },
  { content: 'Il joue', id: 4, questionId: 0, correct: true },

  { content: 'Il dort', id: 5, questionId: 1, correct: true },
  { content: 'Il se roule', id: 6, questionId: 1, correct: false },
  { content: "Il s'ennuie", id: 7, questionId: 1, correct: false },
  { content: 'Il joue', id: 8, questionId: 1, correct: false },

  { content: 'Il dort', id: 5, questionId: 2, correct: true },
  { content: 'Il se roule', id: 6, questionId: 2, correct: false },
  { content: "Il s'ennuie", id: 7, questionId: 2, correct: false },
  { content: 'Il joue', id: 8, questionId: 2, correct: false },

  { content: 'il ronfle', id: 9, questionId: 3, correct: false },
  { content: 'Il reve', id: 10, questionId: 3, correct: false },
  { content: 'Il ronronne', id: 11, questionId: 3, correct: true },
  { content: 'Il dort', id: 12, questionId: 3, correct: false },

  { content: 'Stressé', id: 13, questionId: 4, correct: true },
  { content: 'Apeuré', id: 14, questionId: 4, correct: true },
  { content: 'Content', id: 15, questionId: 4, correct: false },
  { content: 'Il miaule', id: 16, questionId: 4, correct: false },

  { content: 'de dormir', id: 17, questionId: 5, correct: true },
  { content: "de s'étirer", id: 18, questionId: 5, correct: false },
  { content: 'de stresser', id: 19, questionId: 5, correct: false },
  { content: 'de se rouler', id: 20, questionId: 5, correct: false },

  { content: 'de se mordre', id: 21, questionId: 6, correct: false },
  { content: 'de se laver', id: 22, questionId: 6, correct: false },
  { content: "de s'arracher les poils", id: 23, questionId: 6, correct: false },
  { content: 'de se toiletter', id: 24, questionId: 6, correct: true },
];
