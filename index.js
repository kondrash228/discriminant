"use strict";

const InputA = document.getElementById('a');
const InputB = document.getElementById('b');
const InputC = document.getElementById('c');
const SubmitBtn = document.getElementById('btn-submit');
const answer = document.getElementById('first-answer');

SubmitBtn.addEventListener("click", (e) => {
    let a = InputA.value;
    let b = InputB.value;
    let c = InputC.value;

    if (a && b && c) {
        const D = Math.pow(b, 2) - 4 * a * c;
        if (D > 0) {
            const SqrtD = Math.sqrt(D);
            const x1 = (-b - SqrtD) / (2 * a);
            const x2 = (-b + SqrtD) / (2 * a);

            answer.innerHTML = "<h2>Ваш ответ</h2>" +
                "X1 = " + x1 + "<br><br>" +
                "X2 = " + x2 + "<br><br>" +
                "<p>если у вас получилась число с запятой <a href='https://calcs.su/%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0/%D0%B4%D1%80%D0%BE%D0%B1%D0%B8/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%B4%D0%B5%D1%81%D1%8F%D1%82%D0%B8%D1%87%D0%BD%D1%83%D1%8E-%D0%B4%D1%80%D0%BE%D0%B1%D1%8C-%D0%B2-%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%83%D1%8E-%D0%B4%D1%80%D0%BE%D0%B1%D1%8C.html'>как перевести его в обыкновенную дробь</a></p>";

            InputA.value = '';
            InputB.value = '';
            InputC.value = '';
        }

        if (D === 0) {
            const SqrtD = Math.sqrt(D);
            const x1 = (-b - SqrtD) / (2 * a);
            const x2 = (-b + SqrtD) / (2 * a);
            answer.innerHTML = "<h2>Ваш ответ</h2>" +
                "X1 = " + x1 + "<br><br>" +
                "X2 = " + x2 + "<br><br>" +
                "<p>если у вас получилась число с запятой <a href='https://calcs.su/%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0/%D0%B4%D1%80%D0%BE%D0%B1%D0%B8/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%B4%D0%B5%D1%81%D1%8F%D1%82%D0%B8%D1%87%D0%BD%D1%83%D1%8E-%D0%B4%D1%80%D0%BE%D0%B1%D1%8C-%D0%B2-%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%83%D1%8E-%D0%B4%D1%80%D0%BE%D0%B1%D1%8C.html'>как перевести его в обыкновенную дробь</a></p>";

            InputA.value = '';
            InputB.value = '';
            InputC.value = '';

        }

        if (D < 0) {
            answer.innerHTML = "<h2>Нет корней</h2";
            InputA.value = '';
            InputB.value = '';
            InputC.value = '';
        }
    } else {
        answer.innerHTML = "<h2>Введите цифры</h2>"
    }

})
