let pregunta = document.getElementById("pregunta")
let respuesta = document.getElementById("respuesta")
let valor_ingresado;
let mensaje = document.getElementById("mensaje")

let numeroUno = Math.floor(Math.random() * 10) + 1;
let numeroDos = Math.floor(Math.random() * 10) + 1;

let respuestasCorrectas   = [
    "Sos crack chabona", 
    "No eras tan tontita despues de todo",
    "¡Al fin usaste el cerebro, campeón!",
    "¿Vos sos Einstein y no me dijiste?",
    "¡Correcto! Hasta vos tenés tus momentos...",
    "¡Muy bien! Aunque seguro fue suerte.",
    "¡Le pegaste! Qué milagro, anotá la fecha.",
    "¡Esa sí! Pero no te agrandes, eh.",
    "¡Bien ahí! Te merecés media galletita.",
    "¡Excelente! ¿Te sentís bien? Parece raro.",
    "¡Sí, señor! Sos el orgullo de... alguien.",
    "¡Exacto! Sos como una calculadora... rota, pero justo funcionó.",
    "¡Esa te salió bien! ¿Quién te sopló?",
    "¡Correcto! Milagro, no estabas dormido.",
    "Bien, che... ¿Estás usando IA?",
    "¡La clavaste! Seguro fue sin querer.",
    "¡Sí! Pero no te emociones, fue una sola.",
    "Hasta el reloj roto acierta dos veces al día.",
    "La pegaste... ¿Estás bien? ¿No tendrás fiebre?",
    "¡Excelente! Pero todavía te falta para genia, eh.",
    "¿Respuesta correcta? ¡Anotá la fecha en el calendario!",
    "¡Le pegaste! ¿Tenés un duende que te sopla?",
    "¡Correcto! ¿Estás bien? Esa no te la tenía.",
    "¡Lo hiciste! Sos como Pitágoras... pero con memes.",
    "¡Muy bien! Aunque seguro estabas adivinando.",
    "¡Excelente! Estás que quemás la tabla del 2.",
    "¡Sí! Sos tan crack que ya mismo te hago una estatua de plastilina.",
    "¡Te salió bien! Andá jugando al Quini 6 ahora.",
    "¡Acertaste! No sé si felicitarte o preocuparme.",
    "¡Epa! Uno más y te dan el diploma de primer grado.",
    "¡Correcto! Se nota que hoy desayunaste neuronas."
];
let respuestasIncorrectas = ["¿Qué fue eso? ¿Un intento?",
  "No flaca, eso no era. Ponete las pilas.",
  "¡Incorrecto! ¿Te dormiste o qué?",
  "Eso fue tan malo que me dolió el alma.",
  "No, no y no. ¿Seguro fuiste al colegio?",
  "¡Terrible! Tu respuesta fue un desastre matemático.",
  "Erraste. Y no por poco...",
  "¿En serio pusiste eso? Tu maestra llora.",
  "No le acertaste ni por casualidad.",
  "Ni cerca, eh... Pero bueno, se intenta.",
  "Mal. Pero al menos lo intentaste... creo.",
  "Esa respuesta fue un atentado contra las matemáticas y las mujeres...  y LA HUMANIDAD",
  "Hasta mi abuela lo hacía mejor... y la desconectamos ya",
  "¿Querías sumar puntos o vergüenza?",
  "Te equivocaste con tanta fuerza que me reinicié.",
  "Malísimo. Dejale la cuenta a una piedra.",
  "Te juro que esa respuesta me hizo dudar de todo.",
  "Eso no fue un error, fue un poema al fracaso.",
  "¡NO! Ni con GPS encontrás la respuesta correcta.",
  "Sos como Messi... jugando cricket",
  "¡Mal! Y encima seguro estabas convencida.",
  "Tu respuesta fue una obra de arte abstracta.",
  "Fallaste. Dejá las mates y seguí tejiendo mejor.",
  "Esa respuesta... fue como patear al arco y errarle a la pelota.",
  "Pasó tu dignidad, mandó saludos",
  "¿¡EH!?",
  "watafak",
  "Eso fue un crimen contra la lógica.",
  "Terrible. Tenés menos aciertos que una escopeta sin balas.",
  "Malísimo. Ahi te paso la calculadora"
]

pregunta.innerHTML = numeroUno + " x " + numeroDos

respuesta.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        valor_ingresado = respuesta.value
        if(valor_ingresado == numeroUno * numeroDos) {
            mensaje.style.color = "light-green"
            mensaje.innerHTML = respuestasCorrectas[Math.floor(Math.random() * respuestasCorrectas.length)];
        } else {
            mensaje.style.color = "red"
            mensaje.innerHTML = respuestasIncorrectas[Math.floor(Math.random() * respuestasIncorrectas.length)];
        }
        respuesta.value = ""
        numeroUno = Math.floor(Math.random() * 10) + 1;
        numeroDos = Math.floor(Math.random() * 10) + 1;

        pregunta.innerHTML = numeroUno + " x " + numeroDos
    }
})