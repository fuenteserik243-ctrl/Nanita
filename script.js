const textoCompleto = `Querida Enana ❤️✨ Me dijiste que te escribiera algo memorable, así que aquí está...

Me acuerdo de la primera vez que empezamos a hablar, de la primera vez que te vi en ese juego.🥺 Recuerdo que tabas ahí paradita en isla Jsjsj ahí nos conocimos... Sin pensar que ibas a llegar a ser una persona muy especial en mi vida, y que te iba a querer demasiado 🫶❤️✨ Tu me has demostrado y me has hecho volver a creer en la amistad... Y lo real que son las personas, bueno algunas... Y tú eres una de esas pocas personas que quedan, y soy afortunado de tenerte como mi mejor amiga 💗 Te quiero mucho... Y quiero que sepas que aquí estaré para ti, siempre.✨ Sé que a veces demuestro lo contrario... Pero es porque a veces no sé qué me pasa, pero eso no cambia que siempre serás importante para mí.

Me aguantas mucho, aunque no tengas paciencia... Igual que yo, pero ambos nos aguantamos... Aunque seamos celosos, posesivos, tóxicos o dramáticos... Siempre nos aguantamos los 2... Y es algo que me gusta, y me demuestras que así me quieres.🥺💗

Yo sé que no tienes esa confianza de contarme lo que te pasa... Pero sabes que cualquier cosa que te pase... Aquí estaré para ti💗🫂

Te quiero con todo mi corazón enana, me has hecho sentir muy feliz con tu amistad 🥺🫶✨

Nunca pensé que una amistad nacida en un juego pudiera volverse algo tan especial. Contigo aprendí que a veces las mejores personas llegan de las formas más inesperadas. Gracias por cada momento, cada risa, cada charla hasta tarde, incluso por las pequeñas discusiones que al final siempre terminaban en risas.

Aunque ahora las cosas hayan cambiado un poco, quiero que sepas que todo lo que vivimos se queda conmigo. Cada recuerdo, cada momento, cada palabra bonita. Porque las amistades que realmente importan no desaparecen, solo cambian de forma.

Siempre vas a tener un lugar especial en mi corazón, Enana. 💜`;

let i=0;

function escribir(){

const texto=document.getElementById("texto");

if(i<textoCompleto.length){

let letra=document.createElement("span");
letra.className="brillo";
letra.textContent=textoCompleto.charAt(i);

texto.appendChild(letra);

i++;

setTimeout(escribir,20);

}else{

document.getElementById("mensajeSecreto").classList.add("visible");

activarContador();
polvoMagico();
lluviaCorazones();
efectoCelular();

}

}

function mostrar(){

document.getElementById("boton").classList.add("ocultar");

setTimeout(()=>{

document.getElementById("boton").style.display="none";

document.getElementById("contenido").style.display="block";

document.querySelector(".carta").classList.add("visible");

explosionCorazones();

escribir();

},800);

}

/* ESTRELLAS */

function crearEstrellas(){

const cont=document.querySelector(".estrellas");

for(let i=0;i<200;i++){

let estrella=document.createElement("div");

estrella.className="estrella mover";

let size=Math.random()*3;

estrella.style.width=size+"px";
estrella.style.height=size+"px";

estrella.style.left=Math.random()*100+"vw";
estrella.style.top=Math.random()*100+"vh";

estrella.style.animationDuration=(5+Math.random()*20)+"s";

cont.appendChild(estrella);

}

}

crearEstrellas();

/* FLORES */

function flores(){

const cont=document.querySelector(".flores");

for(let i=0;i<25;i++){

let f=document.createElement("div");

f.className="flor";
f.innerHTML="🌸";

f.style.left=Math.random()*100+"vw";
f.style.animationDuration=(6+Math.random()*10)+"s";
f.style.fontSize=(15+Math.random()*20)+"px";

cont.appendChild(f);

}

}

flores();

/* CONTADOR TE QUIERO */

function activarContador(){

const contador=document.querySelector(".contador");
const numero=document.getElementById("contadorNumero");

contador.classList.add("visible");

let valor=0;

let intervalo=setInterval(()=>{

valor++;
numero.textContent=valor;

if(valor>=100){
clearInterval(intervalo);
}

},40);

}

/* EFECTO CELULAR */

function efectoCelular(){

if(navigator.vibrate){
navigator.vibrate([200,100,200]);
}

}

/* CORAZONES MOUSE */

document.addEventListener("mousemove",function(e){

let corazon=document.createElement("div");

corazon.className="corazon";
corazon.innerHTML="💜";

corazon.style.left=e.clientX+"px";
corazon.style.top=e.clientY+"px";

document.body.appendChild(corazon);

setTimeout(()=>{corazon.remove();},2000);

});

/* EXPLOSION */

function explosionCorazones(){

for(let i=0;i<30;i++){

let c=document.createElement("div");

c.className="explosion";
c.innerHTML="💜";

c.style.left=(window.innerWidth/2+(Math.random()*300-150))+"px";
c.style.top=(window.innerHeight/2+(Math.random()*300-150))+"px";

document.body.appendChild(c);

setTimeout(()=>{c.remove();},2000);

}

}

/* POLVO MAGICO */

function polvoMagico(){

for(let i=0;i<40;i++){

let p=document.createElement("div");

p.className="particula";

p.innerHTML="✨";

p.style.left=Math.random()*window.innerWidth+"px";
p.style.top=(window.innerHeight/2)+"px";

document.body.appendChild(p);

setTimeout(()=>{p.remove();},3000);

}

}

/* LLUVIA FINAL */

function lluviaCorazones(){

for(let i=0;i<120;i++){

let h=document.createElement("div");

h.className="lluvia";

h.innerHTML="💜";

h.style.left=Math.random()*100+"vw";

h.style.animationDuration=(3+Math.random()*3)+"s";

document.body.appendChild(h);

setTimeout(()=>{h.remove();},4000);

}

}