class Boton {
  constructor(contenedorElemento, texto) {
    this.contenedorElemento = contenedorElemento;
    this.texto = texto;
    this.onClick = this.onClick.bind(this);

    const boton = document.createElement('button');
    boton.textContent = texto;
    boton.addEventListener('click', this.onClick);

    this.contenedorElemento.append(boton);
  }

  onClick(){
    console.log('Hicisite clic en: ' + this.texto);
  }
}

const botonContenedor = document.getElementById('menu');

const boton1 = new Boton(botonContenedor, 'A');
const boton2 = new Boton(botonContenedor, 'B');
const boton3 = new Boton(botonContenedor, 'C');

const botonContenedor1 = document.getElementById('menu2');

const boton4 = new Boton(botonContenedor1, 'A');
const boton5 = new Boton(botonContenedor1, 'B');
const boton6 = new Boton(botonContenedor1, 'C');
