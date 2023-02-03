const categorias = [
    {
        categoria: "Historia",
        pregunta0: {
            imagen: "image/bandera.jpg",
            pregunta: "¿Quien fue el primer presidente de Estados Unidos?",
            dificultad: "facil",
            respuesta: 0,
            opcion0: "George Washington",
            opcion1: "John F. Kennedy",
            opcion2: "Donald Trump",
            opcion3: "George H. Bush"
        },
        pregunta1: {
            imagen: "image/atentado.jpg",
            pregunta: `En que año se produjo el atentado de las torres gemelas?`,
            dificultad: "facil",
            respuesta: 2,
            opcion0: "2011",
            opcion1: "1999",
            opcion2: "2001",
            opcion3: "2010"
        },
        pregunta2: {
            imagen: "image/arco.jpg",
            pregunta: `¿De qué nacionalidad era Juana de Arco?`,
            dificultad: "facil",
            respuesta: 2,
            opcion0: "Italiana",
            opcion1: "Inglesa",
            opcion2: "Francesa",
            opcion3: "Sueca"
        },
        pregunta3: {
            imagen: "image/isla.jpg",
            pregunta: `¿Qué isla generó un conflicto entre Reino Unido y Argentina?`,
            dificultad: "facil",
            respuesta: 0,
            opcion0: "Las Malvinas",
            opcion1: "Las Maldivas",
            opcion2: "Hawaii",
            opcion3: "Tahití"
        },
        pregunta4: {
            imagen: "image/volcan.jpg",
            pregunta: `¿Qué volcán devastó Pompeya?`,
            dificultad: "facil",
            respuesta: 2,
            opcion0: "El Etna",
            opcion1: "El Santa Helena",
            opcion2: "El Vesubio",
            opcion3: "El Kilimanjaro"
        },
        pregunta5: {
            imagen: "image/cavernicola.jpg",
            pregunta: `¿Dónde se han encontrado principalmente pinturas del período Paleolítico?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "Vasijas",
            opcion1: "Cuevas",
            opcion2: "Cascadas",
            opcion3: "Pieles"
        },
        pregunta6: {
            imagen: "image/caligula.jpg",
            pregunta: `¿A quién nombro senador Calígula?`,
            dificultad: "medio",
            respuesta: 3,
            opcion0: "Su hijo",
            opcion1: "Su lacayo",
            opcion2: "Su perro",
            opcion3: "Su caballo"
        },
        pregunta7: {
            imagen: "image/luna.jpg",
            pregunta: `¿Quién fue el primer hombre que pisó la luna?`,
            dificultad: "medio",
            respuesta: 2,
            opcion0: "Michael Collins",
            opcion1: "Edwin Aldrin",
            opcion2: "Neil Amstrong",
            opcion3: "Donald Trump"
        },
        pregunta8: {
            imagen: "image/italia.jpg",
            pregunta: `¿Que dictador italiano que lideraba Italia al comienzo de la Segunda Guerra Mundial?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "Videla",
            opcion1: "Benito Mussolini",
            opcion2: "Victor Manuel II",
            opcion3: "Humberto I"
        },
        pregunta9: {
            imagen: "image/dallas.jpg",
            pregunta: `¿Qué presidente estadounidense fue asesinado en Dallas?`,
            dificultad: "medio",
            respuesta: 0,
            opcion0: "John F. Kennedy",
            opcion1: "Abraham Lincoln",
            opcion2: "George Washington",
            opcion3: "Donald Trump"
        },
        pregunta10: {
            imagen: "image/industrial.jpg",
            pregunta: `¿Que evento marco el inicio de la revolución industrial?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "El telégrafo",
            opcion1: "El tren a vapor",
            opcion2: "La hiladora a vapor",
            opcion3: "El automóvil"
        },
        pregunta11: {
            imagen: "image/aztecas.jpg",
            pregunta: `¿Qué ciudad fundaron los aztecas??`,
            dificultad: "dificil",
            respuesta: 1,
            opcion0: "Tulúm",
            opcion1: "Tenochtitlán",
            opcion2: "Chichén Itzá",
            opcion3: "Quetzalcoatl"
        },
        pregunta12: {
            imagen: "image/imprenta.jpg",
            pregunta: `¿Quién inventó la imprenta?`,
            dificultad: "dificil",
            respuesta: 0,
            opcion0: "Johannes Gutenberg",
            opcion1: "Los asiáticos",
            opcion2: "Friedrich Koenig",
            opcion3: "Los griegos"
        },
        pregunta13: {
            imagen: "image/francia.jpg",
            pregunta: `En que año se produjo la revolución francesa?`,
            dificultad: "dificil",
            respuesta: 0,
            opcion0: "1789",
            opcion1: "1890",
            opcion2: "1770",
            opcion3: "1765"
        },
        pregunta14: {
            imagen: "image/eclesiastica.jpg",
            pregunta: `¿Qué institución eclesiástica mandó a la hoguera a "brujas","impuros" y "herejes"?`,
            dificultad: "dificil",
            respuesta: 1,
            opcion0: "La orden del temple",
            opcion1: "La Santa Inquisición",
            opcion2: "El tribunal de la Rota",
            opcion3: "Los Legionarios"
        }
    },

    {
        categoria: "Juegos",
        pregunta0: {
            imagen: "image/zelda.jpg",
            pregunta: `¿Quien es el protagonista del juego "Legends of Zelda"}?`,
            dificultad: "facil",
            respuesta: 1,
            opcion0: "Ronny",
            opcion1: "Link",
            opcion2: "Zelda",
            opcion3: "Mario"
        },
        pregunta1: {
            imagen: "image/portal.jpg",
            pregunta: `¿Cuales son los colores de los portales del juego "Portal"?`,
            dificultad: "facil",
            respuesta: 2,
            opcion0: "Rojo y Azul",
            opcion1: "Naranja y Verde",
            opcion2: "Naranja y Azul",
            opcion3: "Verde y Azul"
        },
        pregunta2: {
            imagen: "image/mario.jpg",
            pregunta: `¿Que nombre tiene el juego de carreras de Mario?`,
            dificultad: "facil",
            respuesta: 3,
            opcion0: "Go! Mario",
            opcion1: "Run Mario",
            opcion2: "Mario Cards",
            opcion3: "Mario Karts"
        },
        pregunta3: {
            imagen: "image/minecraft.jpg",
            pregunta: `¿Cuál es el nombre del co-protagonista del juego "Minecraft"?`,
            dificultad: "facil",
            respuesta: 2,
            opcion0: "Steve",
            opcion1: "Milei",
            opcion2: "Alex",
            opcion3: "Hannah"
        },
        pregunta4: {
            imagen: "image/the-last-of-us.jpg",
            pregunta: `¿Cuál es el nombre del protagonista de "The Last of Us"?`,
            dificultad: "facil",
            respuesta: 0,
            opcion0: "Joel",
            opcion1: "Martin",
            opcion2: "Billy",
            opcion3: "Connor"
        },
        pregunta5: {
            imagen: "image/smash.jpg",
            pregunta: `¿Cuál es el juego de la imagen?`,
            dificultad: "medio",
            respuesta: 3,
            opcion0: "Mortal Kombat",
            opcion1: "Street Fighter",
            opcion2: "Tekken",
            opcion3: "Super Smash Bros"
        },
        pregunta6: {
            imagen: "image/toxic.jpg",
            pregunta: `¿Por que es tan toxico League of Legends?`,
            dificultad: "medio",
            respuesta: 3,
            opcion0: "Por la comunidad",
            opcion1: "Por el mal balance",
            opcion2: "Por Riot",
            opcion3: "Todas las anteriores"
        },
        pregunta7: {
            imagen: "image/minecraft.jpg",
            pregunta: `¿Cuantos puntos de vida tienen los personaje de "Minecraft"?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "10",
            opcion1: "20",
            opcion2: "25",
            opcion3: "15"
        },
        pregunta8: {
            imagen: "image/pokemon.jpg",
            pregunta: `¿Cuál es este Pokémon?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "Vaporeon",
            opcion1: "Bulbasaur",
            opcion2: "Charmander",
            opcion3: "Pikachu"
        },
        pregunta9: {
            imagen: "image/map.jpg",
            pregunta: `¿Cual es el juego con el mapa mas grande existente?`,
            dificultad: "medio",
            respuesta: 2,
            opcion0: "The Witcher 3",
            opcion1: "GTA V",
            opcion2: "No Man's Sky",
            opcion3: "Minecraft"
        },
        pregunta10: {
            imagen: "image/rockstar.jpg",
            pregunta: `¿Cual de estos videojuegos a desarrollado Rockstar?`,
            dificultad: "dificil",
            respuesta: 1,
            opcion0: "The Witcher",
            opcion1: "Max Payne 3",
            opcion2: "Day Light",
            opcion3: "Far Cry"
        },
        pregunta11: {
            imagen: "image/xbox.jpg",
            pregunta: `¿Qué significa la luz roja en la consola Xbox 360?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "Mandar a mantenimiento",
            opcion1: "Fallo al reproducir",
            opcion2: "Falta de ventilacion",
            opcion3: "Bateria agotada"
        },
        pregunta12: {
            imagen: "image/grindear.jpg",
            pregunta: `¿Qué significa grindear?`,
            dificultad: "dificil",
            respuesta: 0,
            opcion0: "Matar muchos enemigos",
            opcion1: "Ir a por material",
            opcion2: "Molestar a otros",
            opcion3: "Perder apropósito"
        },
        pregunta13: {
            imagen: "image/mariobros.jpg",
            pregunta: `¿En que año salio el primer juego protagonizado por Mario?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "1978",
            opcion1: "1890",
            opcion2: "1983",
            opcion3: "1999"
        },
        pregunta14: {
            imagen: "image/hollow-knight.jpg",
            pregunta: `¿Como se llama el pueblo inicial de Hollow Knight?`,
            dificultad: "dificil",
            respuesta: 1,
            opcion0: "Hollownest",
            opcion1: "Bocasucia",
            opcion2: "Insectopia",
            opcion3: "Ant Village"
        }
    },

    {
        categoria: "Avengers",
        pregunta0: {
            imagen: "image/avengers.jpg",
            pregunta: `¿Quien fundo los Vengadores?`,
            dificultad: "facil",
            respuesta: 2,
            opcion0: "Tony Stark",
            opcion1: "Capitan America",
            opcion2: "Nick Fury",
            opcion3: "Colson"
        },
        pregunta1: {
            imagen: "image/hulk.jpg",
            pregunta: `¿Cual de estos personajes no es un vengador?`,
            dificultad: "facil",
            respuesta: 2,
            opcion0: "Hulk",
            opcion1: "Bruja Escarlata",
            opcion2: "Quicksilver",
            opcion3: "Viuda Negra"
        },
        pregunta2: {
            imagen: "image/thanos.jpg",
            pregunta: `¿Cuantos personajes han usando un guante con todas las gemas?`,
            dificultad: "facil",
            respuesta: 2,
            opcion0: "2",
            opcion1: "1",
            opcion2: "3",
            opcion3: "4"
        },
        pregunta3: {
            imagen: "image/natasha.jpg",
            pregunta: `¿Cuál es la nacionalidad de Natasha Romanoff?`,
            dificultad: "facil",
            respuesta: 0,
            opcion0: "Rusa",
            opcion1: "Suiza",
            opcion2: "Estadounidense",
            opcion3: "Alemana"
        },
        pregunta4: {
            imagen: "image/referencia.jpg",
            pregunta: `¿Quien dice la famosa frase "Entendí la referencia"?`,
            dificultad: "facil",
            respuesta: 2,
            opcion0: "Tony Stark",
            opcion1: "Deadpool",
            opcion2: "Capitan America",
            opcion3: "Thor"
        },
        pregunta5: {
            imagen: "image/martillo.jpg",
            pregunta: `¿Como se llama el martillo de Thor?`,
            dificultad: "medio",
            respuesta: 3,
            opcion0: "Mjolnir",
            opcion1: "Stormbreaker",
            opcion2: "Jonathan",
            opcion3: "Miornir"
        },
        pregunta6: {
            imagen: "image/fury.jpg",
            pregunta: `¿Como perdió el ojo Nick Fury?`,
            dificultad: "medio",
            respuesta: 2,
            opcion0: "Por una batalla",
            opcion1: "Por una bala",
            opcion2: "Por un gato",
            opcion3: "Por una cabra"
        },
        pregunta7: {
            imagen: "image/strange.jpg",
            pregunta: `¿Cuantos futuros vio Dr.Strange para vencer a Thanos?`,
            dificultad: "medio",
            respuesta: 3,
            opcion0: "14,000,000",
            opcion1: "14,605,000",
            opcion2: "14,056,000",
            opcion3: "14,000,605"
        },
        pregunta8: {
            imagen: "image/triste.jpg",
            pregunta: `¿Quien asesino a los padres de Iron Man?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "Un ladron en un callejón",
            opcion1: "El Soldado del Invierno",
            opcion2: "El Mandarin",
            opcion3: "El amigo de su padre"
        },
        pregunta9: {
            imagen: "image/janefoster.jpg",
            pregunta: `¿En que tenia doctorado Jane Foster?`,
            dificultad: "media",
            respuesta: 0,
            opcion0: "Astrofisica y astronomia",
            opcion1: "Bellas artes",
            opcion2: "Fisica y matematicas",
            opcion3: "Medicina"
        },
        pregunta10: {
            imagen: "image/armaduras.jpg",
            pregunta: `¿Cuantas armaduras fabrico Tony Stark?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "12",
            opcion1: "35",
            opcion2: "42",
            opcion3: "54"
        },
        pregunta11: {
            imagen: "image/wandavision.jpg",
            pregunta: `¿En que comic se inspira la seria Wandavision?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "The House",
            opcion1: "Wandapolis",
            opcion2: "The Vision",
            opcion3: "The WandaTV"
        },
        pregunta12: {
            imagen: "image/stanlee.jpg",
            pregunta: `¿Cuantos cameos a tenido Stan Lee?`,
            dificultad: "dificil",
            respuesta: 3,
            opcion0: "75",
            opcion1: "72",
            opcion2: "86",
            opcion3: "96"
        },
        pregunta13: {
            imagen: "image/shangchi.jpg",
            pregunta: `¿Como se llama el pueblo oculto que aparece en "Shang-Chi y los 10 anillos"?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "Ta Olei",
            opcion1: "Tao Lei",
            opcion2: "Ta Lo",
            opcion3: "Ta Oming"
        },
        pregunta14: {
            imagen: "image/scott.jpg",
            pregunta: `¿Cuantos años estuvo en la cárcel Scott?`,
            dificultad: "dificil",
            respuesta: 1,
            opcion0: "4 años",
            opcion1: "3 años",
            opcion2: "5 años",
            opcion3: "6 años"
        }
    },

    {
        categoria: "Cultura",
        pregunta0: {
            imagen: "image/plataformas.jpg",
            pregunta: "¿Cual fue la primer plataforma de streaming de series y películas?",
            dificultad: "facil",
            respuesta: 2,
            opcion0: "HBO Max",
            opcion1: "Disney Plus",
            opcion2: "Netflix",
            opcion3: "Star+"
        },
        pregunta1: {
            imagen: "image/olimpiadas.jpg",
            pregunta: `¿Donde se originaron los juegos olímpicos?`,
            dificultad: "facil",
            respuesta: 1,
            opcion0: "Reino Unido",
            opcion1: "Grecia",
            opcion2: "Egipto",
            opcion3: "Roma"
        },
        pregunta2: {
            imagen: "image/capilla.jpg",
            pregunta: `¿Quien pinto la Capilla Sixtina?`,
            dificultad: "facil",
            respuesta: 2,
            opcion0: "Leonardo DaVinci",
            opcion1: "Donato di Niccolò",
            opcion2: "Michelangelo Buonarroti",
            opcion3: "Raffaello Sanzio"
        },
        pregunta3: {
            imagen: "image/matematicas.jpg",
            pregunta: `¿Como se denomina al resultado de una multiplicación?`,
            dificultad: "facil",
            respuesta: 1,
            opcion0: "Cociente",
            opcion1: "Producto",
            opcion2: "Factor",
            opcion3: "Resto"
        },
        pregunta4: {
            imagen: "image/disco.jpg",
            pregunta: `¿Cual es el disco mas vendido de la historia?`,
            dificultad: "facil",
            respuesta: 0,
            opcion0: "Thriller",
            opcion1: "Back in Black",
            opcion2: "Their Greatest Hits",
            opcion3: "Rumors"
        },
        pregunta5: {
            imagen: "image/jesus.jpg",
            pregunta: `¿Cual de los 12 apóstoles traiciono a Jesus?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "Judas Tadeo",
            opcion1: "Judas Iscariote",
            opcion2: "Bartolomé",
            opcion3: "Pedro"
        },
        pregunta6: {
            imagen: "image/divina-comedia.jpg",
            pregunta: `¿Quien escribió La Divina Comedia?`,
            dificultad: "medio",
            respuesta: 2,
            opcion0: "Homero",
            opcion1: "Edgar Allan Poe",
            opcion2: "Dante Alighieri",
            opcion3: "Miguel de Cervantes"
        },
        pregunta7: {
            imagen: "image/sherlock.jpg",
            pregunta: `¿Quien es el mayor enemigo de Sherlock Homes?`,
            dificultad: "medio",
            respuesta: 0,
            opcion0: "James Moriarty",
            opcion1: "Irene Adler",
            opcion2: "Jack el Destripador",
            opcion3: "Charles Augustus Milverton"
        },
        pregunta8: {
            imagen: "image/esqueleto.jpg",
            pregunta: `¿Que cantidad de huesos tiene el cuerpo humano?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "186",
            opcion1: "206",
            opcion2: "147",
            opcion3: "166"
        },
        pregunta9: {
            imagen: "image/odisea.jpg",
            pregunta: `¿Quien escribió La Odisea?`,
            dificultad: "medio",
            respuesta: 0,
            opcion0: "Homero",
            opcion1: "Edgar Allan Poe",
            opcion2: "Dante Alighieri",
            opcion3: "Miguel de Cervantes"
        },
        pregunta10: {
            imagen: "image/sabores.jpg",
            pregunta: `¿Cuales son los 5 tipos de sabores primarios?`,
            dificultad: "dificil",
            respuesta: 3,
            opcion0: "Dulce, amargo, ácido, salado y agrio",
            opcion1: "Dulce, umami, ácido, salado y agrio",
            opcion2: "Dulce, amargo, ácido, umami y agrio",
            opcion3: "Dulce, amargo, ácido, salado y umami"
        },
        pregunta11: {
            imagen: "image/hemeroteca.jpg",
            pregunta: `¿Cómo se le llama a una colección de revistas, diarios y notas periódicas?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "Biblioteca",
            opcion1: "Librería",
            opcion2: "Hemeroteca",
            opcion3: "Estantería"
        },
        pregunta12: {
            imagen: "image/metales.jpg",
            pregunta: `¿Cual es el metal mas caro del mundo?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "Oro",
            opcion1: "Acero",
            opcion2: "Rodio",
            opcion3: "Peltre"
        },
        pregunta13: {
            imagen: "image/coca-cola.jpg",
            pregunta: `¿En que año salio Coca-Cola al mercado?`,
            dificultad: "dificil",
            respuesta: 1,
            opcion0: "1898",
            opcion1: "1886",
            opcion2: "1890",
            opcion3: "1777"
        },
        pregunta14: {
            imagen: "image/estrellas.jpg",
            pregunta: `¿Cuál es la segunda estrella más próxima a la Tierra?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "Sirio",
            opcion1: "Epsilon Indi",
            opcion2: "Alpha Centauri",
            opcion3: "Ran"
        }
    },

    {
        categoria: "Cine",
        pregunta0: {
            imagen: "image/harry-potter.jpg",
            pregunta: "¿Cuantas películas tuvo Harry Potter?",
            dificultad: "facil",
            respuesta: 2,
            opcion0: "6",
            opcion1: "7",
            opcion2: "8",
            opcion3: "9"
        },
        pregunta1: {
            imagen: "image/matrix.jpg",
            pregunta: `¿Quien fue el actor que protagonizo la famosa película "Matrix"?`,
            dificultad: "facil",
            respuesta: 1,
            opcion0: "Laurence Fishburne",
            opcion1: "Keanu Reeves",
            opcion2: "Christian Bale",
            opcion3: "Carrie-Anne Moss"
        },
        pregunta2: {
            imagen: "image/cine.jpg",
            pregunta: `¿Cual es la película mas taquillera de todos los tiempos"?`,
            dificultad: "facil",
            respuesta: 3,
            opcion0: "Titanic",
            opcion1: "Avengers: Endgame",
            opcion2: "Star Wars: El despertar de la fuerza",
            opcion3: "Avatar"
        },
        pregunta3: {
            imagen: "image/sexto-sentido.jpg",
            pregunta: `¿A que pelicula pertenece la famosa frase: "Veo gente muerta"?`,
            dificultad: "facil",
            respuesta: 1,
            opcion0: "Amitiville",
            opcion1: "El Sexto Sentido",
            opcion2: "El Resplandor",
            opcion3: "Poltergeist"
        },
        pregunta4: {
            imagen: "image/american.jpg",
            pregunta: `¿Que personaje interpreto Christian Bale en "American Psycho"?`,
            dificultad: "facil",
            respuesta: 0,
            opcion0: "Patrick Bateman",
            opcion1: "Paul Allen",
            opcion2: "Detective Donald Kimball",
            opcion3: "Timothy Bryce"
        },
        pregunta5: {
            imagen: "image/titanic.jpg",
            pregunta: `¿Cuanta es la duración de la película "Titanic"?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "180 minutos",
            opcion1: "194 minutos",
            opcion2: "72 minutos",
            opcion3: "120 minutos"
        },
        pregunta6: {
            imagen: "image/pilgrim.jpg",
            pregunta: `¿A cuantos exes tuvo que derrotar Scott Pilgrim en "Scott Pilgrim vs. the World"?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "6",
            opcion1: "7",
            opcion2: "9",
            opcion3: "5"
        },
        pregunta7: {
            imagen: "image/oscars.jpg",
            pregunta: `¿Que película gano el Oscar a mejor película en 2020?`,
            dificultad: "medio",
            respuesta: 3,
            opcion0: "Érase una vez en Hollywood",
            opcion1: "Joker",
            opcion2: "1917",
            opcion3: "Parásitos"
        },
        pregunta8: {
            imagen: "image/fragmentado.jpg",
            pregunta: `¿Cuantas personalidades tenia el protagonista de "Fragmentado"?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "155",
            opcion1: "24",
            opcion2: "10",
            opcion3: "32"
        },
        pregunta9: {
            imagen: "image/oscars.jpg",
            pregunta: `¿Cuantas películas argentinas han ganado el Oscar?`,
            dificultad: "medio",
            respuesta: 0,
            opcion0: "2",
            opcion1: "4",
            opcion2: "3",
            opcion3: "5"
        },
        pregunta10: {
            imagen: "image/que-pelicula.jpg",
            pregunta: `¿A que película pertenece esta imagen?`,
            dificultad: "dificil",
            respuesta: 1,
            opcion0: "Hasta el ultimo hombre",
            opcion1: "El Gran Pez",
            opcion2: "La milla verde",
            opcion3: "El Show de Truman"
        },
        pregunta11: {
            imagen: "image/odiseaespacio.jpg",
            pregunta: `¿Quien dirigió "2001: Una Odisea del Espacio"?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "George Lucas",
            opcion1: "James Cameron",
            opcion2: "Stanley Kubrick",
            opcion3: "Ridley Scott"
        },
        pregunta12: {
            imagen: "image/mouse.jpg",
            pregunta: `¿En que año fue la primer aparición del iconico personaje Mickey Mouse?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "1918",
            opcion1: "1965",
            opcion2: "1928",
            opcion3: "1947"
        },
        pregunta13: {
            imagen: "image/cine.jpg",
            pregunta: `¿A quien se le a considerado el padre del cine?`,
            dificultad: "dificil",
            respuesta: 1,
            opcion0: "Auguste y Louis Lumière",
            opcion1: "George Méliès",
            opcion2: "David Wark Griffith",
            opcion3: "Louis Le Prince"
        },
        pregunta14: {
            imagen: "image/oscars.jpg",
            pregunta: `¿Cual a sido el actor que a ganado mas Oscar?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "Jack Nicholson",
            opcion1: "Daniel Day-Lewis",
            opcion2: "Katherine Hepburn",
            opcion3: "Meryl Streep"
        }
    },

    {
        categoria: "Cine",
        pregunta0: {
            imagen: "image/harry-potter.jpg",
            pregunta: "¿Cuantas películas tuvo Harry Potter?",
            dificultad: "facil",
            respuesta: 2,
            opcion0: "6",
            opcion1: "7",
            opcion2: "8",
            opcion3: "9"
        },
        pregunta1: {
            imagen: "image/matrix.jpg",
            pregunta: `¿Quien fue el actor que protagonizo la famosa película "Matrix"?`,
            dificultad: "facil",
            respuesta: 1,
            opcion0: "Laurence Fishburne",
            opcion1: "Keanu Reeves",
            opcion2: "Christian Bale",
            opcion3: "Carrie-Anne Moss"
        },
        pregunta2: {
            imagen: "image/cine.jpg",
            pregunta: `¿Cual es la película mas taquillera de todos los tiempos"?`,
            dificultad: "facil",
            respuesta: 3,
            opcion0: "Titanic",
            opcion1: "Avengers: Endgame",
            opcion2: "Star Wars: El despertar de la fuerza",
            opcion3: "Avatar"
        },
        pregunta3: {
            imagen: "image/sexto-sentido.jpg",
            pregunta: `¿A que pelicula pertenece la famosa frase: "Veo gente muerta"?`,
            dificultad: "facil",
            respuesta: 1,
            opcion0: "Amitiville",
            opcion1: "El Sexto Sentido",
            opcion2: "El Resplandor",
            opcion3: "Poltergeist"
        },
        pregunta4: {
            imagen: "image/american.jpg",
            pregunta: `¿Que personaje interpreto Christian Bale en "American Psycho"?`,
            dificultad: "facil",
            respuesta: 0,
            opcion0: "Patrick Bateman",
            opcion1: "Paul Allen",
            opcion2: "Detective Donald Kimball",
            opcion3: "Timothy Bryce"
        },
        pregunta5: {
            imagen: "image/titanic.jpg",
            pregunta: `¿Cuanta es la duración de la película "Titanic"?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "180 minutos",
            opcion1: "194 minutos",
            opcion2: "72 minutos",
            opcion3: "120 minutos"
        },
        pregunta6: {
            imagen: "image/pilgrim.jpg",
            pregunta: `¿A cuantos exes tuvo que derrotar Scott Pilgrim en "Scott Pilgrim vs. the World"?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "6",
            opcion1: "7",
            opcion2: "9",
            opcion3: "5"
        },
        pregunta7: {
            imagen: "image/oscars.jpg",
            pregunta: `¿Que película gano el Oscar a mejor película en 2020?`,
            dificultad: "medio",
            respuesta: 3,
            opcion0: "Érase una vez en Hollywood",
            opcion1: "Joker",
            opcion2: "1917",
            opcion3: "Parásitos"
        },
        pregunta8: {
            imagen: "image/fragmentado.jpg",
            pregunta: `¿Cuantas personalidades tenia el protagonista de "Fragmentado"?`,
            dificultad: "medio",
            respuesta: 1,
            opcion0: "155",
            opcion1: "24",
            opcion2: "10",
            opcion3: "32"
        },
        pregunta9: {
            imagen: "image/oscars.jpg",
            pregunta: `¿Cuantas películas argentinas han ganado el Oscar?`,
            dificultad: "medio",
            respuesta: 0,
            opcion0: "2",
            opcion1: "4",
            opcion2: "3",
            opcion3: "5"
        },
        pregunta10: {
            imagen: "image/que-pelicula.jpg",
            pregunta: `¿A que película pertenece esta imagen?`,
            dificultad: "dificil",
            respuesta: 1,
            opcion0: "Hasta el ultimo hombre",
            opcion1: "El Gran Pez",
            opcion2: "La milla verde",
            opcion3: "El Show de Truman"
        },
        pregunta11: {
            imagen: "image/odiseaespacio.jpg",
            pregunta: `¿Quien dirigió "2001: Una Odisea del Espacio"?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "George Lucas",
            opcion1: "James Cameron",
            opcion2: "Stanley Kubrick",
            opcion3: "Ridley Scott"
        },
        pregunta12: {
            imagen: "image/mouse.jpg",
            pregunta: `¿En que año fue la primer aparición del iconico personaje Mickey Mouse?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "1918",
            opcion1: "1965",
            opcion2: "1928",
            opcion3: "1947"
        },
        pregunta13: {
            imagen: "image/cine.jpg",
            pregunta: `¿A quien se le a considerado el padre del cine?`,
            dificultad: "dificil",
            respuesta: 1,
            opcion0: "Auguste y Louis Lumière",
            opcion1: "George Méliès",
            opcion2: "David Wark Griffith",
            opcion3: "Louis Le Prince"
        },
        pregunta14: {
            imagen: "image/oscars.jpg",
            pregunta: `¿Cual a sido el actor que a ganado mas Oscar?`,
            dificultad: "dificil",
            respuesta: 2,
            opcion0: "Jack Nicholson",
            opcion1: "Daniel Day-Lewis",
            opcion2: "Katherine Hepburn",
            opcion3: "Meryl Streep"
        }
    }
]

let ranking = [];

const category = document.querySelectorAll(".category");
const inicio = document.getElementById("inicio");
const trivia = document.getElementById("juego");
const imagen = document.getElementById("imagen");
const pregunta = document.getElementById("pregunta");
const opcion = document.querySelectorAll(".opcion");
const datos = document.querySelectorAll(".dato");
const linea = document.querySelectorAll(".linea__jugador");
const puntos = document.getElementById("puntuacion");
const enviar = document.querySelectorAll(".enviar");
const tiempo = document.getElementById("tiempo");
let catElegida;
let pos = 0;
let segundos = 180;
let intervalo;
let bloquear = false;
let puntaje = ["", "", [0, 0, 0, 0], ""];

llenarRanking()

// Se asigna un evento click a cada boton del inicio y se detecta cual de todos fue con i.
category.forEach(function (boton, i) {
    boton.addEventListener('click', function () {
        // Se oculta el inicio y empieza la trivia
        inicio.style.display = "none";
        trivia.style.display = "flex";

        // Se pasa el array de la categoria elegida a catElegida.
        catElegida = categorias[i];
        // Se llama a la funcion para iniciar el reloj.
        iniciarReloj()
        // Se llama a la funcion para comenzar la trivia rellenando los elementos.
        rellenar(catElegida);
    });
});

function rellenar(eleccion) {
    bloquear = false;
    imagen.src = eleccion["pregunta" + pos].imagen
    pregunta.innerHTML = eleccion["pregunta" + pos].pregunta

    // El bucle for rellena los 4 botones de opciones con el contenido de la pregunta.
    for (var j = 0; j < 4; j++) {
        opcion[j].innerHTML = eleccion["pregunta" + pos]["opcion" + j];
    }
}

function iniciarReloj() {
    // Inicia el cronometro.
    intervalo = setInterval(function () {
        segundos--;
        tiempo.innerHTML = segundos;
        // Si quedan 10 segundos se aplican estilos para avisar.
        if (segundos === 10) {
            document.getElementById("reloj").style.backgroundColor = 'red';
            tiempo.style.color = 'white';
            tiempo.classList.add("heart");
        }
        // Si termina el tiempo se detiene el reloj y se llama directamente a la funcion puntuacion.
        if (segundos === 0) {
            clearInterval(intervalo);
            puntuacion()
        }
    }, 1000);
}

// Se le da a cada botón de las opciones un evento y posición.
opcion.forEach(function (boton, i) {
    boton.addEventListener('click', function () {
        if (bloquear === false) {
            bloquear = true;
            // Se da personalización a cada boton dependiendo de lo que se clickee.
            for (var j = 0; j < 4; j++) {
                opcion[j].style.color = 'white';

                // Se le da color verde a la respuesta correcta.
                if (j == catElegida["pregunta" + pos].respuesta) {
                    opcion[j].style.backgroundColor = 'green';
                    opcion[j].style.border = '3px solid white';
                } else if (j == i) {
                    // Se le da color rojo si la respuesta clickeada no es la correcta.
                    opcion[j].style.backgroundColor = 'red';
                    opcion[j].style.border = '3px solid white';
                } else {
                    // Se vuelven grises las demas respuestas.
                    opcion[j].style.backgroundColor = 'grey';
                }
            }

            // Si la opcion seleccionada es igual al numero guardado en respuesta.
            if (i == catElegida["pregunta" + pos].respuesta) {
                // Se suma 1 a puntaje general.
                puntaje[2][0] += 1;
                if (pos < 5) {
                    // Si estamos entre la pregunta 0 a 5 se le suma 1 a la posición que indica las fáciles.
                    puntaje[2][1] += 1
                } else if (pos < 10) {
                    // Si estamos entre la pregunta 5 a 9 se le suma 1 a la posición que indica las medias.
                    puntaje[2][2] += 1
                } else {
                    // Si estamos entre la pregunta 10 a 14 se le suma 1 a la posición que indica las difíciles.
                    puntaje[2][3] += 1
                }
            };

            //Pasados 2 segundos se reinicia el aspecto de los botones.
            setTimeout(function () {
                for (var j = 0; j < 4; j++) {
                    opcion[j].style.border = '1px solid rgb(121, 121, 121)';
                    opcion[j].style.color = 'black';
                    opcion[j].style.backgroundColor = 'white';
                }
                // Vuelve a rellenar todo con la siguiente pregunta por el valor de pos
                if (pos <= 13) {
                    pos += 1
                    rellenar(catElegida);
                } else {
                    // Si esta en la pos 14 (la ultima pregunta) salta aqui, detiene el reloj y va a puntuacion.
                    clearInterval(intervalo);
                    puntuacion();
                };
            }, 2000);
        };
    });
});

function puntuacion() {
    // Se oculta la trivia y sale la puntuacion.
    trivia.style.display = "none";
    puntos.style.display = "flex";
    // La categoria elegida se guarda
    puntaje[1] = catElegida.categoria

    // Si el tiempo se acabo se le indica y si no entonces se resta a 180 los segundos tardados.
    if (segundos == 0) {
        puntaje[3] = "SIN TIEMPO"
    } else {
        puntaje[3] = (180 - segundos) + "s";
    }

    // Se muestran los siguientes datos: categoria, puntos (en facil, medio y dificil), tiempo.
    datos[0].innerHTML = puntaje[1];
    datos[1].innerHTML = puntaje[2][1];
    datos[2].innerHTML = puntaje[2][2];
    datos[3].innerHTML = puntaje[2][3];
    datos[4].innerHTML = puntaje[3];
}

// Se evalua si el usuario quizo guardar su puntaje o cancelar
enviar.forEach(function (boton, i) {
    boton.addEventListener('click', function () {
        // Si presiono aceptar i sera igual a 0 y se guardara todo. Si no simplemente se reinicia todo.
        if (i == 0) {
            // Se guarda el nombre indicado en el input, se envia al ranking y se ordenan.
            puntaje[0] = document.getElementById("name").value;
            ranking.push(puntaje);
            ranking.sort((a, b) => b[2][0] - a[2][0]);
        }
        localStorage.setItem("ranking", JSON.stringify(ranking));
        reinicio()
    });
});

function reinicio() {
    // Se actualiza el ranking.
    llenarRanking()
    // Se reinicia la posicion, reloj, los valores del puntaje y se vuelve al inicio.
    pos = 0;
    segundos = 180;
    puntaje = ["", "", [0, 0, 0, 0], ""];
    puntos.style.display = "none";
    inicio.style.display = "flex";
}

function llenarRanking() {
    if (localStorage.getItem("ranking")) {
        ranking = JSON.parse(localStorage.getItem("ranking"))
        ranking.forEach((jugador, t) => {
            linea[t].innerHTML = `
                <p>${jugador[0]}</p>
                <p>${jugador[1]}</p>
                <p>
                <span>${jugador[2][1]}</span>
                <span>${jugador[2][2]}</span>
                <span>${jugador[2][3]}</span>
                </p>
                <p>${jugador[3]}</p>
                `;
        });
    } else {
        console.log("No hay nada")
    }
}





/* const salas =  [
    {nombre: "calle",
    fondo: "image/calle.jpg",
    historia: {estado: true, texto:"Es una noche tranquila. Caminas hacia tu casa después de un duro día de trabajo. Cargas en tu espalda tu mochila con toda tu ropa de trabajo transpirada, quizás deberías lavarla. Te diriges a tu departamento cuando recuerdas que quizás no tengas nada para comer. Podrías ir a comprar algunas cosas al supermercado antes de volver."},
    opcion0: {texto:"Ir a la farmacia", ir:"farmacia"},
    opcion1: {texto:"Ir al supermercado", ir:"supermercado"},
    opcion2: {texto:"Ir a casa", ir:"calle2"},
    opcion3: {texto:"   ", ir:"   "}},

    {nombre: "farmacia",
    fondo: "image/farmacia.jpg",
    historia: {estado: true, texto:"Llegas cansado de.............................................................."},
    opcion0: {texto:"Próximamente", ir:"   "},
    opcion1: {texto:"Próximamente", ir:"   "},
    opcion2: {texto:"Próximamente", ir:"   "},
    opcion3: {texto:"Salir", ir:"calle"}},

    {nombre: "supermercado",
    fondo: "image/supermercado.jpg",
    historia: {estado: true, texto:"Llegas cansado de.............................................................."},
    opcion0: {texto:"Próximamente", ir:"   "},
    opcion1: {texto:"Próximamente", ir:"   "},
    opcion2: {texto:"Próximamente", ir:"   "},
    opcion3: {texto:"Salir", ir:"calle"}},

    {nombre: "calle2",
    fondo: "image/calle2.jpg",
    historia: {estado: true, texto:"Llegas cansado de.............................................................."},
    opcion0: {texto:"Seguir a casa", ir:"habitacion"},
    opcion1: {texto:"Volver", ir:"calle"},
    opcion2: {texto:"   ", ir:"   "},
    opcion3: {texto:"   ", ir:"   "}},

    {nombre: "habitacion",
    fondo: "image/habitacion.jpg",
    historia: {estado: true, texto:"Llegas cansado de.............................................................."},
    opcion0: {texto:"Próximamente", ir:"   "},
    opcion1: {texto:"Próximamente", ir:"   "},
    opcion2: {texto:"Próximamente", ir:"   "},
    opcion3: {texto:"Salir", ir:"calle"}}
]

const botonInicio = document.getElementById("inicioBoton");
const acciones = document.querySelectorAll(".acciones");
const imagen = document.getElementById("fondo");
const historia = document.getElementById("historia");
const barraText = document.getElementById("barraText");

let textoMostrado = false;
let intervalId;
let escena = 0;

botonInicio.addEventListener("click", () => {
    var header = document.getElementById("inicio");
    header.classList.add("oculto");
    setTimeout(function() {
        header.style.display = "none";
        salas[escena].historia.estado = false;
        maquinaEscribir()
    }, 2000);
})

acciones.forEach(function(boton, i) {
    boton.addEventListener('click', function() {
        accion(i)
    });
});

function accion (lugar) {
    if(salas[escena]["opcion"+lugar].ir === "   "){
        return;
    }
    imagen.classList.add("oculto");

    setTimeout(function() {
        const pos = salas.findIndex(sala => sala.nombre === salas[escena]["opcion"+lugar].ir);
        escena = pos;
        imagen.src = salas[pos].fondo;

        for (var i = 0; i < 4; i++) {
            acciones[i].innerHTML = salas[pos]["opcion"+i].texto;
        }

        fondo.classList.remove("oculto");

        salas[escena].historia.estado

        if (salas[escena].historia.estado) {
            barraText.style.display = "block";
            salas[escena].historia.estado = false;
            maquinaEscribir();
        }
    }, 2000);
}

function maquinaEscribir() {
    let c = 0;
    intervalId = setInterval(function(){
        if (c < salas[escena].historia.texto.length) {
            historia.innerHTML += salas[escena].historia.texto.charAt(c);
            c++;
        }else{
            clearInterval(intervalId);
            textoMostrado = true;
        }
    }, 50);
}

barraText.addEventListener("click", () => {
    clearInterval(intervalId);
    if(textoMostrado){
        barraText.style.display = "none"
        historia.innerHTML = " ";
        textoMostrado = false;
    }else{
        historia.innerHTML = salas[escena].historia.texto;
        textoMostrado = true;
    }
}); */