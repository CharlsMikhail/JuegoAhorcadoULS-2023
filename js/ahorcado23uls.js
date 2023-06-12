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
