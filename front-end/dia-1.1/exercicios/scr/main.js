import { nanoid } from "nanoid";

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelect('h2');

passwordBtnEl.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPasswordEl.innerHTML = randomPassword;
});