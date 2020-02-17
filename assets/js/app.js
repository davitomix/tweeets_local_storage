// Variables.
const listaTweets = document.getElementById('lista-tweets');
const formulario = document.querySelector('#formulario');
// Event Listeners.
eventListeners();

function eventListeners(){
  // Add Tweeets.
  formulario.addEventListener('submit', agregarTweet);

  // Delete Tweeets.
  listaTweets.addEventListener('click', borrarTweet);

  // Load tweets from local storage.
  document.addEventListener('DOMContentLoaded', localStorageReady);
}

// Functions.
// Create tweeet on DOM.
function agregarTweet(e){
  e.preventDefault();
  // Get data from textarea.
  const tweet = document.getElementById('tweet').value;
  const botonBorrar = document.createElement('a');
  botonBorrar.classList = 'borrar-tweet';
  botonBorrar.innerText = 'X';
  const li = document.createElement('li');
  li.innerText = tweet;
  li.appendChild(botonBorrar);
  listaTweets.appendChild(li);
  // Add to Local Storage.
  addTweetToLocalStorage(tweet);
}
// Remove tweeet on DOM.
function borrarTweet(e){
    e.preventDefault();
    if(e.target.classList[0]=== 'borrar-tweet'){
      e.target.parentElement.remove() ;
      eraseTweetLocalStorage(e.target.parentElement.innerText);
    }
} 

// Show data from local storage on view.
function localStorageReady(){
  let tweets = getLocalStorage();
  tweets.forEach(function(tweet){
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);
  });
}

// Add to local storage.
function addTweetToLocalStorage(tweet){
  let tweets = getLocalStorage();
  tweets.push(tweet);
  console.log(tweets);
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Get tweets from local storage.
function getLocalStorage(){
  let tweets;
  if(localStorage.getItem('tweets') === null){
    tweets = [];
  } 
  else{
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets;
}

// Remove from local storage.
function eraseTweetLocalStorage(tweet){
  tweet = tweet.slice(0, tweet.length - 1);
  let tweets = getLocalStorage();
  tweets.forEach(function(t, index){
    if(tweet === t){
      tweets.splice(index, 1);
    }
  });
  // Reescribirmos en el Local Storage automaticamente elimina lo que ya extista.
  localStorage.setItem('tweets', JSON.stringify(tweets));
}
