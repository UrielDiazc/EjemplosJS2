class Menu {
  constructor() {
    this.botonContenedor = document.querySelector('#menu');
    this.status = document.querySelector('#status');
    this.mostrarBotonClick = this.mostrarBotonClick.bind(this);

    this.bottons = [
      new Boton(this.botonContenedor, 'A'),
      new Boton(this.botonContenedor, 'B'),
      new Boton(this.botonContenedor, 'C')
    ];
    document.addEventListener('boton-click', this.mostrarBotonClick);
  }

  mostrarBotonClick(event){
    console.log('Notificación al menu');
    const nombreBoton = event.detail.nombreBoton;
    this.status.textContent = 'Click en ' + nombreBoton;
  }
}

const menu = new Menu();
