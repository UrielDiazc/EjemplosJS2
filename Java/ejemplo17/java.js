function saludar(saludarFuncion) {
  saludarFuncion();

}

const saludoInternacional = function(){
  console.log('hola mundo');
}

const saludoMexicano = () => {
  console.log('Quiubole!');
}

saludar(saludoInternacional);
saludar(saludoMexicano);
