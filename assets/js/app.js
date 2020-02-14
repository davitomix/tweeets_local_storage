// Variables.
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners.
eventListeners();

function eventListeners(){
  // Add Tweeets.
  document.querySelector('#formulario').addEventListener('submit', agregarTweet);

  // Delete Tweeets.
  listaTweets.addEventListener('click', borrarTweet);
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

function borrarTweet(e){
    e.preventDefault();
    if(e.target.classList[0]=== 'borrar-tweet'){
      console.log(e.target.parentElement.remove());
      alert('Tweet Removed');
    }
}