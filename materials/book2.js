let currentQuestion = 0;
let countTests = 0;
const tasks = [
     {
        question: "[Каспэ И.] [М.] [2005][Искусство отсутствовать: незамеченное поколение русской литературы]",
        answer: "Каспэ И. Искусство отсутствовать: незамеченное поколение русской литературы. М., 2005.",
    }, {
        question: "[Шкловский В.] [Искусство как прием] [Шкловский В.] [О теории прозы] [М.] [1929] [С. 7--23]",
        answer: "Шкловский В. Искусство как прием // Шкловский В. О теории прозы. М., 1929. С. 7--23.",
    }, {
        question: "[Поэтика Достоевского] [1925] [Гроссман Л. П.] [М.: ГАХН]",
        answer: "Гроссман Л. П. Поэтика Достоевского. М.: ГАХН, 1925.",
    }, {
        question: "[Отв. ред. Н. А. Жирмунская] [Эликсиры Сатаны] [Л.: Наука] [Гофман Э. Т. А.] [1984]",
        answer: "Гофман Э. Т. А. Эликсиры Сатаны / Отв. ред. Н. А. Жирмунская. Л.: Наука, 1984.",
    }, {
        question: "[В 3 т.] [Под ред. А.Н. Николюкина][М.: ИНИОН РАН] [Литературная энциклопедия русского зарубежья, 1918-1940] [1996]",
        answer: "Литературная энциклопедия русского зарубежья, 1918-1940: В 3 т. / Под ред. А.Н. Николюкина. М.: ИНИОН РАН, 1996.",
    }, {
        question: "[Кржижановский С. Д.] [Т. 4.] [С. 546--569] [Бернард Шоу и книжная полка] [В 6 т.] [Кржижановский С. Д.] [Собрание сочинений:] [Сост., предисл. и комм. В. Перельмутера] [СПб.: Симпозиум] [2006]",
        answer: "Кржижановский С. Д. Бернард Шоу и книжная полка // Кржижановский С. Д. Собрание сочинений: В 6 т. / Сост., предисл. и комм. В. Перельмутера. Т. 4. СПб.: Симпозиум, 2006. С. 546--569.",
    }, {
        question: "[Цветаева М.][В 7 т.]  [Цветаева М.] [Т. 3.] [Поэмы; Драматические произведения.] [Собрание сочинений:][М.: Эллис Лак] [1994] [Крысолов][С. 51--109]",
        answer: "Цветаева М. Крысолов // Цветаева М. Собрание сочинений: В 7 т. Т. 3. Поэмы; Драматические произведения. М.: Эллис Лак, 1994. С. 51--109.",
    }, {
        question: "[Достоевский Ф. М.] [Преступление и наказание] [Достоевский Ф. М.] [Полное собрание сочинений] [В 30 т.] [Т. 6] [Под ред. В. В. Виноградова] [Л.: Издательство «Наука»] [1973]",
        answer: "Достоевский Ф. М. Преступление и наказание // Достоевский Ф. М. Полное собрание сочинений: В 30 т. Т. 6 / Под ред. В. В. Виноградова. Л.: Издательство «Наука», 1973.",
    }, {
        question: "[Маслов Ю. С.] [Введение в языкознание: Учеб. для филол. спец. вузов] [М.: Высшая школа] [1987]",
        answer: "Маслов Ю. С. Введение в языкознание: Учеб. для филол. спец. вузов. М.: Высшая школа, 1987.",
    }, {
        question: "[Под ред. Г. К. Косикова] [М.] [2000] [Барт Р.] [Французская семиотика: От структурализма к постструктурализму] [С. 196--238] [Введение в структурный анализ повествовательных текстов]",
        answer: "Барт Р. Введение в структурный анализ повествовательных текстов // Французская семиотика: От структурализма к постструктурализму / Под ред. Г. К. Косикова. М., 2000. С. 196--238.",
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
