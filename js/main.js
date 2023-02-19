class Jugador {
    constructor(nombre, modalidad, categoria, puntaje, tiempo) {
        this.nombre = nombre;
        this.modalidad = modalidad;
        this.categoria = [];
        this.puntaje = 0;
        this.tiempo = 180;
    }

    nombrarJugador(name) {
        this.nombre = name
    }

    // Una vez empezado el juego guarda que modalidad se eligió y también la indica en el encabezado de la partida.
    elegirModalidad(num) {
        if (num == 0) {
            this.modalidad = "Normal"
        } else if (num == 1) {
            this.modalidad = "Contratiempo"
        } else {
            this.modalidad = "Supervivencia"
        }
        modoH2.textContent = newPlayer.modalidad
    }

    agregarCategorias(categorias) {
        this.categoria = categorias
    }

    aumentarPuntaje(aciertos) {
        this.puntaje += aciertos;
    }

    marcarTiempo(resto) {
        this.tiempo = 180 - resto
    }

    // Una vez terminada la partida envia los datos al ranking, los ordena segun el puntaje de mayor a menor, elimina el ultimo si se pasa de 10
    // lo envia al storage y actualiza el ranking con el nuevo valor en storage.
    completar() {
        ranking.push(this);
        ranking.sort((a, b) => b.puntaje - a.puntaje);
        if (ranking.length > 10) {
            ranking.splice(10, 1);
        }
        localStorage.setItem("ranking", JSON.stringify(ranking));
        rellenarRanking(JSON.parse(localStorage.getItem("ranking")))
    }
}

// Se crea un objeto que contendrá toda la data del jugador.
let newPlayer = new Jugador("");


// Casi todos los elementos del DOM que se modifican para interactuar con el usuario.
const inicio = document.getElementById("inicio"); // comienzo del juego.
const botones = document.querySelectorAll(".boton"); // botones principales del juego.
const modos = document.getElementById("selectModo"); // fase de selección de modo.
const modoSelect = document.querySelectorAll(".card__modo"); // cards que indican los modos.
const categorias = document.getElementById("selectCat"); // pantalla de selección de categorías
const modoH2 = document.getElementById("modoSeleccionado");
const carrousel = document.getElementById("carrousel"); // carrousel de categorías
const juego = document.getElementById("game"); // pantalla de juego
const opciones = document.querySelectorAll(".opcion"); // opciones de la trivia
const tiempo = document.getElementById("reloj"); // reloj del juego
const corazones = document.getElementById("corazones") // contenedor de corazones
const catContent = document.querySelector(".cat__content"); // contenedor de categorías
const mover = document.querySelectorAll(".carousel-nav"); // bloques que controlar la navegación del carrousel

let modalidad = "";
let catList = []
let quest = []
let bloquear = false
let pos = 0;
let segundos = 180
let ranking = []
let cardCat = []
let position = 0;
let rankingHtml = ""

// Verifica si existe ya un ranking guardado en storage y lo envía a rellenar
if (localStorage.getItem("ranking")) {
    rellenarRanking(JSON.parse(localStorage.getItem("ranking")));
}

// Esta parte asigna eventos a los botones principales del juego, los que hacen avanzar o retroceder hasta la trivia.
botones.forEach(function (boton, i) {
    boton.addEventListener('click', function () {
        // Avanza a modos
        if (i === 0) {
            mostrar(inicio, modos);
        }
        // Muestra el ranking
        if (i === 1) {
            Swal.fire({
                title: 'Top 10 Ranking',
                showConfirmButton: false,
                heightAuto: false,
                customClass: {
                    container: 'custom-class'
                },
                html: `
                    <div class="tabla">
                        <div class="linea linea__base">
                        <p>Nombre</p><p>Modo</p><p>Categoría</p><p>Puntos</p><p>Tiempo</p>
                        </div>
                        ${rankingHtml}
                    </div>
                    `,
            })
        }
        // Retrocede a inicio
        if (i === 2) {
            mostrar(modos, inicio);
        }
        // Se desbloquea si ya selecciono un modo y lo envía a categoría
        if (i === 3 && modalidad !== "") {
            mostrar(modos, categorias);
            cargarCategorias(carrousel)
        }
        // Lo dirige nuevamente a modos y deselecciona todas las categorías elegidas.
        if (i === 4) {
            mostrar(categorias, modos);
            for (var m = 0; m < cardCat.length; m++) {
                cardCat[m].style.filter = "grayscale(1)";
            }
            catList = []
        }

        // comienza la trivia.
        if (i === 5 && botones[5].classList.contains('boton__active')) {
            mostrar(categorias, juego);
            newPlayer.agregarCategorias(catList)
            newPlayer.elegirModalidad(modalidad)
            cargarPreguntas(modalidad)
            iniciarReloj(tiempo)
        }
    });
});

// rellena el ranking
function rellenarRanking(storage) {
    let rankeo = ""
    ranking = storage

    // Crea todo el contenido del ranking
    ranking.forEach((jugador, t) => {
        rankeo += `
            <div class="linea linea__jugador">
                <p>${t + 1}°${jugador.nombre}</p>
                <p>${jugador.modalidad}</p>
                <p>${jugador.categoria}</p>
                <p>${jugador.puntaje}</p>
                <p>${jugador.tiempo}seg</p>
            </div>
            `;
    });

    // Lo envía al html del ranking.
    rankingHtml = rankeo
}

// Se encarga de pasar de una etapa a otra desde el inicio hasta el final.
function mostrar(ocultar, revelar) {
    ocultar.style.display = "none"
    revelar.style.display = "grid"
}

// Se encarga de enviar el valor de la modalidad elegida y cambiar visualmente las tarjetas según el caso.
modoSelect.forEach(function (boton, i) {
    boton.addEventListener('click', function () {
        if (modalidad === i) {
            modalidad = ""
            modoSelect[i].style.filter = "grayscale(1)"
            botones[3].classList.remove('boton__active', 'boton__red')
        } else if (modalidad !== "") {
            modoSelect[modalidad].style.filter = "grayscale(1)"
            modalidad = i
            modoSelect[i].style.filter = "none"
        } else {
            modalidad = i
            modoSelect[i].style.filter = "none"
            botones[3].classList.add('boton__active', 'boton__red')
        }
    });
});

// Carga las categorias
function cargarCategorias(carrousel) {

    // Verifica que carrousel no haya cargado las categorias anteriormente.
    if (carrousel.innerHTML.trim() === '') {
        Swal.fire({
            title: 'Cargando categorías...',
            heightAuto: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        // Pide los datos al json y empieza a crear el contenido.
        fetch('./js/data.json')
            .then(response => response.json())
            .then(data => {
                for (var j = 0; j < Object.keys(data.categorias).length; j++) {
                    let categ = data.categorias["categoria" + j];
                    carrousel.innerHTML += `
                    <div class="card__category">
                        <p class="deco deco__top">${categ[0]}</p>
                        <img class="fondo" src="${categ[1]}">
                        <img class="borde" src="./image/carta__espalda__beta.png.png">
                        <p class="deco deco__bot">Trivialis</p>
                    </div>
                    `
                }
                Swal.close();
                // Le da a cardCat el valor de los nuevos elementos creados.
                cardCat = document.querySelectorAll(".card__category");

                // Da eventos a cada categoria.
                cardCat.forEach(function (boton, i) {
                    boton.addEventListener('click', function () {
                        // Modalidad tiene el valor de que modo se eligió, y cantidadCat indica la cantidad de categorias que se puede elegir en cada modo.
                        let cantidadCat = [1, 3, 3];
                        cantidadCat[modalidad]

                        // Variables para no repetir tanto el codigo
                        var currentFilter = cardCat[i].style.filter;
                        var catName = cardCat[i].querySelector('p').innerText

                        // Si la categoria clickeada aun tiene el filtro y no se a superado la cantidad de categorias que se pueden elegir.
                        if (currentFilter !== "none" && cantidadCat[modalidad] > catList.length) {
                            // Guarda el nombre de la categoria elegida
                            catList.push(catName)
                            // Le quita el filtro gris
                            cardCat[i].style.filter = "none";
                        } else {
                            // Si ya se le dio click antes se da a entender que quiere quitarla por lo que se le agrega el filtro y se quita de la lista.
                            cardCat[i].style.filter = "grayscale(1)";
                            const indice = catList.indexOf(catName);
                            if (indice > -1) {
                                catList.splice(indice, 1);
                            }
                        }

                        // Controla si el boton para continuar debe mostrarse activo o no.
                        if (catList.length == cantidadCat[modalidad]) {
                            botones[5].classList.add('boton__active', 'boton__red')
                        } else {
                            botones[5].classList.remove('boton__active', 'boton__red')
                        }
                    });
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
}

// Controla el movimiento del carrousel de categorias.
mover.forEach(function (boton, i) {
    boton.addEventListener('mouseenter', function () {
        let intervalId = setInterval(function () {
            if (i === 0 && position < 0) {
                position += 1;
                carrousel.style.transform = `translateX(${position}%)`;
            } else if (i === 1 && position > -99) {
                position -= 1;
                carrousel.style.transform = `translateX(${position}%)`;
            }
        }, 30);

        boton.addEventListener("mouseleave", function () {
            clearInterval(intervalId);
        });

    });
});

// Se cargan las preguntas.
function cargarPreguntas(modo) {
    Swal.fire({
        title: 'Cargando Trivia...',
        heightAuto: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
            Swal.showLoading();
        }
    });

    // Muestra los corazones si se eligió la modalidad Supervivencia.
    if (modo == 2) {
        corazones.style.opacity = 1
    }

    // Busca las preguntas y opciones en el json y las carga en la variable array quest.
    fetch('./js/data.json')
        .then(response => response.json())
        .then(data => {
            // Si se eligio modo Normal cargara una, sino serán 3.
            if (modalidad == 0) {
                quest.push(...data[catList[0]])
            } else {
                catList.forEach(cat => {
                    quest.push(...data[cat]);
                });
            }
            Swal.close();

            rellenarQuest(quest)

        })
        .catch(error => {
            console.error(error);
        });

}

// Rellena una por una las preguntas de la trivia mientras se va avanzando.
function rellenarQuest(question) {
    // Los elementos modificados de la card
    const gameCardNum = document.getElementById("gameCardNum");
    const gameCardImg = document.getElementById("gameCardImg");
    const gameCardQuest = document.getElementById("gameCardQuest");

    // Sirve para controlar que pasasen dos segundos y evitar multiples clicks.
    bloquear = false

    // pos controla por cual pregunta se va.
    gameCardImg.src = question[pos].imagen
    gameCardNum.innerHTML = pos + 1
    gameCardQuest.innerHTML = question[pos].pregunta

    // Rellena las opciones.
    for (var g = 0; g < 4; g++) {
        opciones[g].innerHTML = question[pos]["opcion" + g]
    }
}

// Da evento a las opciones.
opciones.forEach(function (boton, i) {
    boton.addEventListener('click', function () {
        // Esto controla que se hayan esperado los dos segundos evitando multiples clicks y que se acumulen puntos sin sentido.
        if (bloquear === false) {
            bloquear = true;

            // Esto solo modifica la apariencia de los botones.
            for (var j = 0; j < 4; j++) {
                opciones[j].style.color = 'white';

                // Se le da color verde a la respuesta correcta.
                if (j == quest[pos].respuesta) {
                    opciones[j].style.backgroundColor = 'green';
                    opciones[j].style.border = '3px solid white';
                } else if (j == i) {
                    // Se le da color rojo si la respuesta clickeada no es la correcta.
                    opciones[j].style.backgroundColor = 'red';
                    opciones[j].style.border = '3px solid white';
                } else {
                    // Se vuelven grises las demas respuestas.
                    opciones[j].style.backgroundColor = 'grey';
                }
            }

            // Si se acerto la respuesta se suma un punto.
            if (i == quest[pos].respuesta) {
                // Se suma 1 a puntaje.
                newPlayer.aumentarPuntaje(1)
            } else if (modalidad == 2) {
                // Si se esta en modalidad supervivencia y se equivoco, se resta un corazón.
                const corazon = document.querySelectorAll(".corazon");
                if (corazon.length > 1) {
                    corazon[0].remove()
                } else {
                    // Si solo quedaba uno, se remueve y se termina el juego.
                    corazon[0].remove()
                    clearInterval(intervalo);
                    puntuacion();
                }
            }

            // Espera dos segundos luego de cada respuesta para ver si se a acertado o no.
            setTimeout(function () {
                // reinicia el aspecto de los botones.
                for (var j = 0; j < 4; j++) {
                    opciones[j].style.border = '1px solid rgb(121, 121, 121)';
                    opciones[j].style.color = 'black';
                    opciones[j].style.backgroundColor = 'white';
                }
                // Vuelve a rellenar todo con la siguiente pregunta por el valor de pos
                if (pos <= 8 && modalidad == 0 || modalidad !== 0 && pos <= 28) {
                    pos += 1
                    rellenarQuest(quest);
                } else {
                    // Si esta en la pos 8 o 29 (dependiendo el modo) salta aqui, detiene el reloj y va a puntuacion.
                    clearInterval(intervalo);
                    puntuacion();
                };
            }, 2000);
        }
    });
})

function iniciarReloj(tiempo) {
    // Inicia el cronometro.
    intervalo = setInterval(function () {
        segundos--;
        tiempo.innerHTML = segundos;
        // Si quedan 10 segundos se aplican estilos para avisar.
        if (segundos === 10) {
            tiempo.style.color = 'red';
            tiempo.classList.add("heart");
        }
        // Si termina el tiempo se detiene el reloj y se llama directamente a la funcion puntuacion.
        if (segundos === 0) {
            clearInterval(intervalo);
            puntuacion()
        }
    }, 1000);
}

function puntuacion() {

    // Muestra un alert con los datos de la partida.
    Swal.fire({
        title: 'Puntaje',
        heightAuto: false,
        html: `
        <div class="puntaje__linea"><p class="puntaje__linea__nombre ff-category">Modalidad:</p><p class="puntaje__linea__dato ff-category">${newPlayer.modalidad}</p></div>
        <div class="puntaje__linea"><p class="puntaje__linea__nombre ff-category">Categorías:</p><p class="puntaje__linea__dato ff-category">${newPlayer.categoria}</p></div>
        <div class="puntaje__linea"><p class="puntaje__linea__nombre ff-category">Puntuación:</p><p class="puntaje__linea__dato ff-category">${newPlayer.puntaje}</p></div>
        <div class="puntaje__linea"><p class="puntaje__linea__nombre ff-category">Tiempo:</p><p class="puntaje__linea__dato ff-category">${(newPlayer.tiempo - segundos)}</p></div>
        <p>Escribe tu nombre para entrar al ranking.</p>
        `,
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        // Si se da a guardar transfiere todos los datos y vuelve al inicio, si no solo vuelve al inicio.
        if (result.isConfirmed) {
            newPlayer.nombrarJugador(result.value);
            newPlayer.marcarTiempo(segundos)
            newPlayer.completar();
            reinicio(corazones)
            mostrar(juego, inicio);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            reinicio(corazones)
            mostrar(juego, inicio);
        }
    })
}

// Reinicia todo luego de finalizar.
function reinicio(contentCorazones) {
    for (var l = 0; l < 3; l++) {
        contentCorazones.innerHTML += '<img class="heart corazon" src="/image/icons8-heart-65.png"></img>'
    }
    contentCorazones.style.opacity = 0
    modalidad = "";
    for (var m = 0; m < cardCat.length; m++) {
        cardCat[m].style.filter = "grayscale(1)";
    }
    catList = []
    quest = []
    pos = 0;
    segundos = 180
}