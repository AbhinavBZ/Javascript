const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;

const input = document.getElementById("num");
const submit = document.getElementById("submit");
const msg = document.getElementById("p1");


submit.onclick = function () {
    const guess = Number(input.value);

    if (Number.isNaN(guess) || guess < min || guess > max) {
        msg.textContent = `Please enter a valid number (${min}-${max}).`;
        return;
    }

    attempts++;
    msg.textContent = "";

    if (guess < answer) {
        msg.textContent = `Too LOW! Try again.`;
    } else if (guess > answer) {
        msg.textContent = `Too HIGH! Try again.`;
    } else {
        msg.textContent = `🎉 CORRECT! You guessed ${answer} in ${attempts} attempts.`;
        submit.disabled = true;
        input.disabled = true;
    }
};
