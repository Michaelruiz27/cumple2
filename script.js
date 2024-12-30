const carta = document.getElementById('carta');
const textoCarta = document.getElementById('textoCarta');
const corazonesContainer = document.getElementById('corazones');
const fotos = document.querySelectorAll('.galeria picture');
const textoFotos = [
    "Conocerte de pequeña fue un gesto muy lindo me imagine un niño o una niña como serian si tendrian las mismas caracteristicas que nosotros de pequeños.",
    "Amo y ame cada parte de ti cada lunar que tienes cada detalle me acuerdo que ese dia me dijiste que querias hacerte un pircing y te dije que te iba a doler y me preguntaste si se te veia lindo y claro que si ame cuando sonreias tu sonrisa es maravillosa contagia esa felicidad que emites tu sonrisa es coomo la paz que no buscabas pero la encuentras y te pierdes en ella ",
    "Esta foto fue la primera que tuve ame tu delineado y tus ojitos cafe siempre voy a amar ese color que tienen tus ojos y ese brillo sin darme cueta esta foto fue el inicio de una bonita historia me enamoraron esos ojos hermosos me enamore completamente de ti de cada celula gracias.",
    "Sabes esta vez fue la primera vez que te vi crei que eras la maria pero aqui entre nos me gustaste desde la primera veez que te vi sabes que recuerdo fue muy bonito la primera vez que escuche tu voz fue maravilloso tambien el primer dibujo que me hiciste para ti dibujar no era tu pasion pero para mi cada dibujo significaba lo mucho que me querias por el tiempo que invertias en cada  dibujo gracias por todos los detalles    ",
    "jajja el dia que nos casamos iba a poner otrra imagen pero encontre esa y me hizo recordar muchas cosas gracias por haberme dado todo tu amor espero que yo tambien te haya hecho feliz asi como tu lo hiciste conmigo  "
];

// Función para crear corazones flotantes
function crearCorazones() {
    const corazonesContainer = document.createElement('div');
    corazonesContainer.className = 'corazones-container'; // Agrega una clase al contenedor de corazones
    document.body.appendChild(corazonesContainer);

    for (let i = 0; i < 20; i++) {
        let corazon = document.createElement('div');
        corazon.className = 'corazon';
        corazon.style.left = `${Math.random() * window.innerWidth}px`; // Posición horizontal aleatoria
        corazon.style.top = `${Math.random() * window.innerHeight}px`; // Posición vertical aleatoria
        corazon.style.animationDelay = `${Math.random() * 5}s`;
        corazonesContainer.appendChild(corazon);
    }

    // Ajustar posición de los corazones después de 10 segundos
    setTimeout(() => {
        document.querySelectorAll('.corazon').forEach(corazon => {
            corazon.style.animation = 'none'; // Detener la animación
            corazon.style.position = 'fixed'; // Fijar
            corazon.style.top = Math.random() > 0.5 ? '0' : 'auto'; // Parte superior o inferior
            corazon.style.bottom = Math.random() > 0.5 ? 'auto' : '0'; // Parte inferior o superior
        });
    }, 20000); // 10 segundos
}

// Función para activar los corazones después de abrir la carta
function abrirCarta() {
    // Aquí puedes colocar la lógica para abrir la carta
    // Por ejemplo, mostrar el contenido de la carta y luego llamar a la función crearCorazones()
    document.getElementById('carta').classList.add('opened'); // Añadir una clase para abrir la carta
    crearCorazones();
    // Evento para abrir la carta
document.getElementById('carta').addEventListener('click', abrirCarta);
    
}

// Evento para abrir la carta
document.getElementById('carta').addEventListener('click', abrirCarta);

// Función para mostrar la carta
carta.addEventListener('click', function () {
    textoCarta.classList.add('visible');
    crearCorazones();
});

// Función para agregar interacciones a las fotos
fotos.forEach((foto, index) => {
    foto.addEventListener('click', () => {
        alert(textoFotos[index]);
    });
});

// Función para la navegación suave
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicializar corazones flotantes al cargar la página
crearCorazones();
    // Asegurarse de que la música se reproduce automáticamente
    function reproducirMusica() {
        musica.play().catch(error => {
            console.error("Error al intentar reproducir la música: ", error);
        });
    }

    // Intentar reproducir la música al cargar la página
    window.onload = reproducirMusica;
// Música de fondo
const audio = new Audio('cancionh/musicahaches1.mp3');
audio.loop = true;
audio.play();

// Efectos de sonido
const cartaSound = new Audio('path/to/your/sound.mp3');
carta.addEventListener('click', function () {
    cartaSound.play();
});

// Efectos de sonido para las fotos
const fotoSound = new Audio('path/to/your/photo-sound.mp3');
fotos.forEach((foto) => {
    foto.addEventListener('click', () => {
        fotoSound.play();
    });
});

// Animaciones específicas al hacer scroll
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.scroll-anim');
    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add('visible');
        }
    });
});

// Función para crear destellos sutiles y elegantes
function crearDestellos() {
    const destellosContainer = document.createElement('div');
    destellosContainer.className = 'destellos';
    document.body.appendChild(destellosContainer);
    for (let i = 0; i < 50; i++) {
        let destello = document.createElement('div');
        destello.className = 'destello';
        destello.style.left = `${Math.random() * 100}vw`;
        destello.style.top = `${Math.random() * 100}vh`;
        destello.style.animationDelay = `${Math.random() * 3}s`; // Reducido el tiempo de retraso
        destellosContainer.appendChild(destello);
    }
}
crearDestellos();


// Interacción con el botón de regresar
const botonRegresar = document.querySelector('.boton-regresar');
botonRegresar.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Añadir nuevos mensajes en el futuro
const agregarMensajeBtn = document.querySelector('.agregar-mensaje-btn');
const mensajesContainer = document.querySelector('.mensajes-container');
agregarMensajeBtn.addEventListener('click', function () {
    const nuevoMensaje = document.createElement('div');
    nuevoMensaje.className = 'mensaje';
    nuevoMensaje.innerText = prompt('Escribe tu nuevo mensaje:');
    mensajesContainer.appendChild(nuevoMensaje);
});

// Animación de la línea de tiempo
const timelineItems = document.querySelectorAll('.timeline-item');
window.addEventListener('scroll', function () {
    timelineItems.forEach((item) => {
        const position = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            item.classList.add('visible');
        }
    });
});
// Agrega eventos para mostrar y ocultar los poemas al hacer clic en ellos
const poemas = document.querySelectorAll('.poema');
poemas.forEach(poema => {
    poema.addEventListener('click', function() {
        this.classList.toggle('mostrar-poema');
    });
});;
// Optimización para dispositivos móviles
function optimizarParaMoviles() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        document.body.style.fontSize = '14px';
    } else {
        document.body.style.fontSize = '16px';
    }
}
optimizarParaMoviles();
window.addEventListener('resize', optimizarParaMoviles);
;