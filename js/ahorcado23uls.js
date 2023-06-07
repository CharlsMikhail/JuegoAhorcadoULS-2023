var words = {
    "tema1": ["javascript", "programacion", "desarrollo"],
    "tema2": ["ahorcado", "palabra", "adivinar"]
};
var palabra_actual = '';
var  letras_adivinadas=[];


var Intentos_restantes = 6;


var puntaje = 0;

var nombreJugador =" ";

var playerContainer = document.getElementById('player-container');
var playerInput = document.getElementById('player-input');
var gameContainer = document.getElementById('game-container');
var wordContainer = document.getElementById('word');
var guessInput = document.getElementById('guess-input');
var resultContainer = document.getElementById('result-container');
var resultMessage = document.getElementById('result');



