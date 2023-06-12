const  fs = require('fs'),
//Cargar los temas 
const cargarTemas = () => {
  const temas = fs.readFileSync('temas.txt', 'utf8').split('\n');
  return temas.filter(tema => tema.trim() !== '');
};

//Guardar la puntuacion 
const guardarPuntuacion=(nombre, puntuacion)=>{
  const puntuacionString = '${nombre}: ${puntuacion}\n';
  fs.appendFileSync('puntuaciones.txt'puntuacionString,'utf8')

};

//Pregunta aleatoria
const obtenerPreguntas = tema => {
  const preguntas fs.readFileSync('${Tema}.txt', 'utf8').split(\n);
  const preguntaAleatoria = preguntas [Math.floor(Math.random()*preguntas.length)];
  return preguntaAleatoria;
};

document.addEventListener('DOMContentLoadedD',()=>{
  const wordDiplay= document.getElementById('word-diplay');
  const guessesDisplay= document.getElementById('guesses-display');
  const guessInput = document.getElementById('guess-input');
  const guessButton  = document.getElementById('guess-button');
  

  let palabraOculta='';
  let puntuacion =0;


  const temas = cargarTemas();
  const temaIndex = prompt('Temas disponibles:\n${temas.map((tema, index) => `${index + 1}. ${tema}`).join('\n')}\n\nElige un número de tema:');
  const temaElegido = tema[temaIndex - 1];
  const Pregunta = obtenerPreguntas(temaElegido);



  for (let i =0; i< Pregunta.length; i++){
    if (Pregunta[i]===' '){
      palabraOculta += ' ';

    } else {
      palabraOculta += ' ';
    }
  }
  wordDiplay.textContent=palabraOculta;
  guessButton.addEventListener('click',()=>{
    const letra = guessInput.value.toLowerCase();

    if (letra.length !==1 || !(/[a-z]/).test(palabra)){
      alert('Ingrese La respuesta.');
      return;
    }

    if (palabraOculta.includes(palabra)){
      alert('Ya has adivinado la palabra');
      return;
    }
    let acierto = false;
    let nuevaPalabraOculta =  ' ';

     for (let i=0;i<Pregunta.length; i++){
      if (pregunta[i].toLowerCase()===palabra){
        nuevaPalabraOculta+=Pregunta[i];
        acierto = true;
      }else{
        nuevaPalabraOculta +=palabraOculta[i];
      }
      if (!acierto){
        guessesDisplay.textContent +=palabra +' ';
      }
      palabraOculta= nuevaPalabraOculta;
      wordDiplay.textContent = palabraOculta;
      guessInput.value = ' ';
      g
     }

  })
})