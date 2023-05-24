import "./style.css";
import Swal from "sweetalert2";

const image = document.querySelector('#image');
const name = document.querySelector('.name');
const button = document.querySelector('#button');

const TOKEN = '3565263517041000';

const urlBase = `https://superheroapi.com/api.php/${TOKEN}`;

const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
    event.preventDefault();

    const id = randomId();

    fetch(`${urlBase}/${id}`)
    .then((result) => result.json())
    .then((objHeroi) => {
        image.src = objHeroi.image.url;
        name.innerHTML = objHeroi.name;
    })
    .catch((error) => Swal.fire({
        title: "Hero not found",
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool',
    }));
});

