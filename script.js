const TIME_LIMIT = 60;

const quizData = [
  {
    question:
      'Какой параметр влияет на дальность передачи радиорелейного сигнала?',
    answers: [
      'Мощность передатчика',
      'Состояние атмосферы',
      'Диаграмма направленности антенны',
      'Все перечисленное',
    ],
    correct: 3,
    explanation:
      'Дальность передачи радиорелейного сигнала зависит от мощности передатчика, которая определяет, насколько далеко сигнал может быть отправлен без значительного затухания. На это также влияют атмосферные условия: плотный дождь, снег, туман или высокая влажность ослабляют сигнал, особенно на высоких частотах. Характеристики антенн, такие как коэффициент усиления и диаграмма направленности, играют ключевую роль в минимизации потерь сигнала и улучшении его концентрации в нужном направлении.',
  },
  {
    question: 'Какова основная особенность модуляции QPSK по сравнению с BPSK?',
    answers: [
      'QPSK передает больше данных за символ',
      'QPSK использует меньше энергии',
      'QPSK менее устойчива к шумам',
      'QPSK не требует синхронизации',
    ],
    correct: 0,
    explanation:
      'QPSK кодирует 2 бита данных за символ, тогда как BPSK кодирует только 1 бит. Это позволяет удвоить пропускную способность без увеличения ширины полосы. Однако QPSK требует более высокого отношения сигнал/шум, что делает его менее устойчивым в условиях помех по сравнению с BPSK.',
  },
  {
    question:
      'Что характерно для распределения максимумов зоны Френеля радиорелейной линии?',
    answers: [
      'Существует лишь один (центральный) максимум и два минимума',
      'Центральный максимум дополняют два боковых, меньших по амплитуде',
      'Все максимумы равны по амплитуде',
      'Боковые максимумы не влияют на передачу сигнала',
    ],
    correct: 1,
    explanation:
      'Зона Френеля описывает области вокруг прямого радиолуча, которые участвуют в передаче сигнала. Центральный максимум содержит основную энергию сигнала, а боковые максимумы, хотя и имеют меньшую амплитуду, могут вызывать интерференцию, если в этих зонах появляются препятствия. Это нужно учитывать при проектировании линий.',
  },
  {
    question:
      'Что происходит с сигналом при использовании модуляции 64-QAM по сравнению с QPSK?',
    answers: [
      'Увеличивается пропускная способность',
      'Увеличивается устойчивость к шумам',
      'Уменьшается требуемая мощность передатчика',
      'Уменьшается ширина канала',
    ],
    correct: 0,
    explanation:
      'Модуляция 64-QAM позволяет кодировать больше данных за символ, используя 64 различных состояния сигнала. Это увеличивает скорость передачи, но также требует более высокого качества канала связи и лучшего отношения сигнал/шум для корректной декодировки.',
  },
  {
    question: 'Какие частоты используются в диапазоне E-Band?',
    answers: ['6-8 ГГц', '71-86 ГГц', '23-38 ГГц', '1-5 ГГц'],
    correct: 1,
    explanation:
      'E-Band охватывает частоты от 71 до 86 ГГц. Этот диапазон популярен для создания высокоскоростных каналов связи в городской среде, так как он поддерживает скорости передачи в несколько гигабит в секунду. Однако сильное атмосферное поглощение ограничивает дальность работы в этом диапазоне.',
  },
  {
    question: 'Что из перечисленного НЕ относится к преимуществам E-Band?',
    answers: [
      'Высокая скорость передачи данных',
      'Большая дальность без потерь',
      'Относительно небольшие габариты оборудования',
      'Высокая плотность каналов в городской среде',
    ],
    correct: 1,
    explanation:
      'E-Band обеспечивает высокую пропускную способность и низкую задержку, но из-за высокого затухания сигнала дальность передачи ограничена. Этот диапазон не подходит для дальних линий связи, особенно в условиях осадков или высокой влажности.',
  },
  {
    question:
      'Какие факторы необходимо учитывать при юстировке радиорелейного пролета, проходящего над водной поверхностью?',
    answers: [
      'Высокую влажность воздуха',
      'Интерференцию от многократных отражений сигнала от воды',
      'Длину кабеля и потери сигнала в нем',
      'Необходимость использования широкополосных антенн',
    ],
    correct: 1,
    explanation:
      'Водная поверхность отражает радиосигналы, что приводит к интерференции и ухудшению качества связи. Чтобы минимизировать эти эффекты, антенны юстируют таким образом, чтобы основной сигнал избегал пересечения с зоной сильных отражений.',
  },
  {
    question: 'Что такое X-pick в радиорелейной связи?',
    answers: [
      'Метод подавления отраженного сигнала',
      'Взаимная интерференция сигналов с различной поляризацией',
      'Процесс переключения между передатчиком и приемником',
      'Подстройка фазового угла для коррекции искажений',
    ],
    correct: 1,
    explanation:
      'X-pick представляет собой метод интерференции сигналов с различной поляризацией, используемый для подавления помех и улучшения качества связи.',
  },
  {
    question:
      'Какой фактор ограничивает использование высокопорядковых модуляций, таких как 256-QAM, в радиорелейных системах?',
    answers: [
      'Высокая стоимость оборудования',
      'Ограничение пропускной способности',
      'Требование высокого отношения сигнал/шум (SNR)',
      'Большая ширина диаграммы направленности антенны',
    ],
    correct: 2,
    explanation:
      'Высокопорядковые модуляции, такие как 256-QAM, требуют очень высокого отношения сигнал/шум для стабильной работы. Это ограничивает их использование в условиях с низким качеством сигнала.',
  },
  {
    question:
      'Почему в радиорелейных системах необходима точная юстировка антенн?',
    answers: [
      'Для снижения помех',
      'Для обеспечения максимального коэффициента усиления',
      'Для защиты от атмосферных воздействий',
      'Для упрощения монтажа',
    ],
    correct: 1,
    explanation:
      'Точная юстировка антенн необходима для обеспечения максимального коэффициента усиления и минимизации потерь сигнала. Это улучшает качество связи.',
  },
  {
    question:
      'Какая модуляция позволяет передавать больше данных, но более чувствительна к шумам?',
    answers: ['BPSK', 'QAM', 'QPSK', 'FSK'],
    correct: 1,
    explanation:
      'QAM (квадратурная амплитудная модуляция) позволяет передавать больше данных, но она более чувствительна к шумам по сравнению с другими модуляциями, такими как BPSK или QPSK.',
  },
  {
    question:
      'Какой частотный диапазон используется в радиорелейной связи для работы в городской среде?',
    answers: ['6–11 ГГц', '18–23 ГГц', '71–86 ГГц', 'Все вышеперечисленные'],
    correct: 3,
    explanation:
      'Для работы в городской среде могут использоваться разные диапазоны частот, включая 6–11 ГГц, 18–23 ГГц и 71–86 ГГц в зависимости от условий.',
  },
  {
    question: 'Какой параметр антенны определяет направленность излучения?',
    answers: [
      'Коэффициент усиления',
      'Диаграмма направленности',
      'Рабочая частота',
      'Поляризация',
    ],
    correct: 1,
    explanation:
      'Диаграмма направленности определяет, в каком направлении антенна излучает или принимает сигнал, а также распределение мощности на разных углах.',
  },
  {
    question:
      'Какое устройство отвечает за преобразование модулированного сигнала в радиоволны?',
    answers: ['Антенна', 'Передатчик', 'Кабель', 'Рефлектор'],
    correct: 1,
    explanation:
      'Передатчик отвечает за преобразование модулированного сигнала в радиоволны, которые затем излучаются антеной в пространстве.',
  },
  {
    question: 'Какую роль играет антенна в радиорелейной системе?',
    answers: [
      'Усиливает мощность передаваемого сигнала',
      'Преобразует радиочастотный сигнал в электрический',
      'Концентрирует энергию в определенном направлении для передачи и приема сигнала',
      'Снижает уровень шума в системе',
    ],
    correct: 2,
    explanation:
      'Антенна концентрирует радиочастотную энергию в определенном направлении, обеспечивая эффективную передачу и прием сигнала.',
  },
  {
    question:
      'Что происходит при использовании слишком длинной радиорелейной линии без ретрансляторов?',
    answers: [
      'Повышается уровень сигнала',
      'Сигнал полностью отражается',
      'Происходит затухание сигнала ниже порога приемника',
      'Уменьшается помехоустойчивость',
    ],
    correct: 2,
    explanation:
      'При слишком длинной радиорелейной линии без ретрансляторов происходит затухание сигнала, что может привести к его потере или снижению качества связи.',
  },
  {
    question:
      'Какую модуляцию чаще всего используют в радиорелейных системах для оптимального баланса между скоростью и устойчивостью к шумам?',
    answers: ['BPSK', 'QPSK', '64-QAM', 'BFSK'],
    correct: 1,
    explanation:
      'QPSK обеспечивает хороший баланс между скоростью передачи данных и устойчивостью к шумам, что делает её часто используемой в радиорелейных системах.',
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = TIME_LIMIT;
let incorrectAnswers = [];

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('time-left');
const resultBox = document.getElementById('result-box');
const resultText = document.getElementById('result');
const gradeText = document.getElementById('grade');
const quizContainer = document.getElementById('quiz-container');
const restartButton = document.getElementById('restart-btn');

function shuffleQuestions() {
  quizData.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  resetTimer();
  updateProgressBar();
  const currentQuestion = quizData[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  questionElement.textContent = `${questionNumber}. ${currentQuestion.question}`;
  answersElement.innerHTML = '';
  currentQuestion.answers.forEach((answer, index) => {
    const li = document.createElement('li');
    li.textContent = answer;
    li.dataset.index = index;
    li.addEventListener('click', selectAnswer);
    answersElement.appendChild(li);
  });
  nextButton.disabled = true;
  startTimer();
}

function selectAnswer(event) {
  const selected = event.target;
  const allAnswers = answersElement.querySelectorAll('li');
  allAnswers.forEach((answer) => answer.classList.remove('selected'));
  selected.classList.add('selected');
  nextButton.disabled = false;
}

function nextQuestion() {
  clearInterval(timer);
  const selectedAnswer = answersElement.querySelector('.selected');
  if (selectedAnswer) {
    const selectedIndex = Number(selectedAnswer.dataset.index);
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correct) {
      score++;
    } else {
      incorrectAnswers.push({
        question: currentQuestion.question,
        selectedAnswer: currentQuestion.answers[selectedIndex],
        correctAnswer: currentQuestion.answers[currentQuestion.correct],
      });
    }
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function startTimer() {
  timerElement.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function resetTimer() {
  timeLeft = TIME_LIMIT;
  timerElement.textContent = timeLeft;
}

function showResult() {
  quizContainer.classList.add('hidden');
  resultBox.classList.remove('hidden');
  resultText.textContent = `Вы правильно ответили на ${score} из ${quizData.length} вопросов.`;
  const grade = Math.round((score / quizData.length) * 100);
  gradeText.textContent = `Ваша оценка: ${grade}%.`;

  if (incorrectAnswers.length > 0) {
    let incorrectAnswersHTML = '<h3>Неправильные ответы:</h3><ul>';
    incorrectAnswers.forEach((item, index) => {
      const explanation = quizData.find(
        (q) => q.question === item.question
      ).explanation;
      incorrectAnswersHTML += `
        <li class="incorrect-answer">
          <p><strong>Вопрос:</strong> ${item.question}</p>
          <p><strong>Ваш ответ:</strong> <span class="wrong">${item.selectedAnswer}</span></p>
          <p><strong>Правильный ответ:</strong> <span class="correct">${item.correctAnswer}</span></p>
          <p><strong>Пояснение:</strong> <span>${explanation}</span></p>
        </li>
      `;
    });
    incorrectAnswersHTML += '</ul>';
    resultText.innerHTML += incorrectAnswersHTML;
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  updateProgressBar();
  quizContainer.classList.remove('hidden');
  resultBox.classList.add('hidden');
  loadQuestion();
}

function updateProgressBar() {
  const progress = document.getElementById('progress');
  const progressPercentage =
    ((currentQuestionIndex + 1) / quizData.length) * 100;
  progress.style.width = `${progressPercentage}%`;
}

nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

shuffleQuestions();
loadQuestion();
