function AbrirRegalo(event) {
  const image = event.currentTarget;
  image.src = "giphy.gif";
  image.removeEventListener('click',AbrirRegalo);
}
const image = document.querySelector('img');
image.addEventListener('click',AbrirRegalo);
