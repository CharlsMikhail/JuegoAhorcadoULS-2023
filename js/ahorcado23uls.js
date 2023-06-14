var filePath = 'ahorcado23uls.txt';

// Crear arrays para preguntas y respuestas
var preguntas = [];
var respuestas = [];

// Leer el archivo como texto
fetch(filePath)
  .then(response => response.text())
  .then(data => {
    // Dividir el contenido en líneas
    var lineas = data.split('\n');

    // Recorrer cada línea
    lineas.forEach(function(linea) {
      // Dividir la línea en pregunta y respuesta usando el separador "|"
      var separador = '|';
      var partes = linea.split(separador);

      // Obtener pregunta y respuesta
      var pregunta = partes[0].trim();
      var respuesta = partes[1].trim();

      // Agregar pregunta y respuesta a los arrays correspondientes
      preguntas.push(pregunta);
      respuestas.push(respuesta);
    });

    // Imprimir las preguntas y respuestas
    console.log('Preguntas:', preguntas);
    console.log('Respuestas:', respuestas);
  });
