// Variables.
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners.
eventListeners();
function eventListeners(){
  document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}

// Funciones.
function agregarTweet(e){
  e.preventDefault();
  const tweet = document.getElementById('tweet').value;
  const botonBorrar = document.createElement('a');
  botonBorrar.classList = 'borrar-tweet';
  botonBorrar.innerText = 'X';
  const li = document.createElement('li');
  li.innerText = tweet;
  li.appendChild(botonBorrar);
  listaTweets.appendChild(li);
}