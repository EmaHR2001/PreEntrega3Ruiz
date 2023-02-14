const inicio = document.getElementById("inicio");
const botones = document.querySelectorAll(".boton");
const modos = document.getElementById("selectModo");
const modoSelect = document.querySelectorAll(".card__modo");
const categorias = document.getElementById("selectCat");

let modalidad = "";
let catList = []

const mover = document.querySelectorAll(".mover");
const cardCat = document.querySelectorAll(".card__category");
const catContent = document.querySelector(".cat__content");
let position = 0;

botones.forEach(function (boton, i) {
    boton.addEventListener('click', function () {
        if (i === 0) {
            mostrar(inicio, modos);
        }

        if (i === 2) {
            mostrar(modos, inicio);
        }

        if (i === 3 && modalidad !== "") {
            mostrar(modos, categorias);
            cargarCategorias()
        }

        if (i === 4) {
            mostrar(categorias, modos);
        }
    });
});

function mostrar(ocultar, revelar) {
    ocultar.style.display = "none"
    revelar.style.display = "flex"
}

fetch("./js/data.json")
    .then(response => console.log(response))

/* function cargarCategorias() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Aquí puedes usar el contenido del archivo JSON (por ejemplo, imprimir las preguntas)
            console.log(data.Cine);
        })
        .catch(error => {
            // Aquí puedes manejar el error en caso de que la carga del archivo falle
            console.error(error);
        });
} */

modoSelect.forEach(function (boton, i) {
    boton.addEventListener('click', function () {
        if (modalidad === i) {
            modalidad = ""
            modoSelect[i].style.filter = "grayscale(1)"
        } else if (modalidad !== "") {
            modoSelect[modalidad].style.filter = "grayscale(1)"
            modalidad = i
            modoSelect[i].style.filter = "none"
        } else {
            modalidad = i
            modoSelect[i].style.filter = "none"
        }
    });
});

mover.forEach(function (boton, i) {
    boton.addEventListener('mouseenter', function () {
        let intervalId = setInterval(function () {
            if (i === 0 && position < 0) {
                position += 1;
                catContent.style.transform = `translateX(${position}%)`;
            } else if (i === 1 && position > -99) {
                position -= 1;
                catContent.style.transform = `translateX(${position}%)`;
            }
        }, 30);

        boton.addEventListener("mouseleave", function () {
            clearInterval(intervalId);
        });

    });
});

cardCat.forEach(function (boton, i) {
    boton.addEventListener('click', function () {
        var currentFilter = cardCat[i].style.filter;
        if (currentFilter !== "none") {
            cardCat[i].style.filter = "none";
        } else {
            cardCat[i].style.filter = "grayscale(1)";
        }
    });
});