// Глобальные переменные для хранения состояния
let currentQuestion = 0;
let countTests = 0;
const tasks = [
    {
        question: "[Бакина М. А. Новообразования в современной поэзии] [Русская речь] [№ 2] [1975] [67--74]",
        answer: "Бакина М. А. Новообразования в современной поэзии // Русская речь. № 2. 1975. С. 67--74.",
    }, {
        question: "[Третьякова И. Ю.] [Вестник Костромского государственного университета] [Окказиональные преобразования фразеологизмов: интенсификация значения][№ 4] [2018] [С. 166–169] [Т. 24]",
        answer: "Третьякова И. Ю. Окказиональные преобразования фразеологизмов: интенсификация значения // Вестник Костромского государственного университета. 2018. Т. 24. № 4. С. 166--169.",
    }, {
        question: "[№ 3] [Гуманитарные исследования в Восточной Сибири и на Дальнем Востоке] [О. Г. Дилакторская] [Маски Парадоксалиста (герой Достоевского в кругу пушкинских и гоголевских литературных типов)] [2008] [5--9]",
        answer: "Дилакторская О. Г. Маски Парадоксалиста (герой Достоевского в кругу пушкинских и гоголевских литературных типов) // Гуманитарные исследования в Восточной Сибири и на Дальнем Востоке. 2008. № 3. С. 5--9.",
    }, {
        question: "[Васильева В.][2016] [Т. 12] [Рассказ С. Д. Кржижановского «Квадратурин»: к вопросу о коммунальном тексте русской литературы][С. 317--324] [Летняя школа по русской литературе] [№ 3]",
        answer: "Васильева В. Рассказ С. Д. Кржижановского «Квадратурин»: к вопросу о коммунальном тексте русской литературы // Летняя школа по русской литературе. 2016. Т. 12. № 3. С. 317--324.",
    }, {
        question: "[№ 4] [С. 93--101] [Квартирный вопрос в русской литературе 1920-1930-х годов и категория исторического времени] [Кувшинов Ф. В.] [Сибирский филологический журнал] [2016]",
        answer: "Кувшинов Ф. В. Квартирный вопрос в русской литературе 1920-1930-х годов и категория исторического времени // Сибирский филологический журнал. 2016. № 4. С. 93--101.",
    }, {
        question: "[Как сделан «Дар» Набокова] [№ 5] [Паперно И.] [1993] [Новое лит. обозрение][С. 138--155]",
        answer: "Паперно И. Как сделан «Дар» Набокова // Новое лит. обозрение. 1993. № 5. С. 138--155.",
    }, {
        question: "[Богомолов Н. А.] [1988] [Вопросы литературы] [№ 3] [Жизнь и поэзия Владислава Ходасевича] [С. 23--61]",
        answer: "Богомолов Н. А. Жизнь и поэзия Владислава Ходасевича // Вопросы литературы. 1988. № 3. С. 23--61.",
    }, {
        question: "[1995] [Хождение игумена Даниила в Святую Землю. Литература и богословие на Руси XII века] [С. 22--37] [Славяноведение] [№ 2] [Гардзанити М.]",
        answer: "Гардзанити М. Хождение игумена Даниила в Святую Землю. Литература и богословие на Руси XII века // Славяноведение. 1995. № 2. С. 22--37.",
    }, {
        question: "[Модернистские тенденции в прозе С. Д. Кржижановского][С. 78--80] [Мансков А. А.] [№ 7] [Мир науки, культуры, образования] [2009]",
        answer: "Мансков А. А. Модернистские тенденции в прозе С. Д. Кржижановского // Мир науки, культуры, образования. 2009. № 7. С. 78--80.",
    }, {
        question: "[Весслинг Р.][№ 5 (75)] [С. 122--153] [Смерть Надсона как гибель Пушкина: образцовая травма и канонизация поэта больного поколения] [2005] [Новое литературное обозрение]",
        answer: "Весслинг Р. Смерть Надсона как гибель Пушкина: образцовая травма и канонизация поэта больного поколения // Новое литературное обозрение. 2005. № 5 (75). С. 122--153.",
    },
];

// Получаем элементы со страницы
const taskElement = document.getElementById("task");
const numberInput = document.getElementById("num");
const resultElement = document.getElementById("result");
const answerInput = document.getElementById("answer");
const startButton = document.getElementById("start");
const verifButton = document.getElementById("verif");

// Функция начала теста
function startTest() {
    const number = Number(numberInput.value);

    // Проверяем введенное число
    if (number > 0 && number <= tasks.length) {
        currentQuestion = 0;
        countTests = number - 1;
        clearResult();
        showTask();
    } else {
        alert("Ведённое число не соответствует кол-во тестов. Можно ввести число от 1 до " + tasks.length);
    }
}

// Показываем задание
function showTask() {
    taskElement.innerText = tasks[currentQuestion].question;
}

// Очищаем результат
function clearResult() {
    resultElement.innerText = "";
    answerInput.value = "";
}

// Проверяем ответ
function checkAnswer() {
    const answer = answerInput.value;

    if (countTests === 0) {
        alert("Тесты не начаты! Для начала тестирования нажмите на кнопку 'Начать'");
        return;
    }

    if (answer === tasks[currentQuestion].answer) {
        resultElement.innerText = "Верно!";

        // Увеличиваем счётчик заданий
        currentQuestion += 1;

        // Проверяем, остались ли ещё задания
        if (currentQuestion > countTests) {
            countTests = 0;
            alert("Все задания выполнены!");
            clearResult();
        } else {
            showTask();
            clearResult();
        }
    } else {
        resultElement.innerText = "Твой ответ неверный, попробуй ещё раз!";
    }
}

// Добавляем обработчики событий при загрузке страницы
window.onload = function() {
    startButton.onclick = startTest;
    verifButton.onclick = checkAnswer;
}