let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/logo-fox.png') {
      myImage.setAttribute('src', 'images/chrome.png');
    } else {
      myImage.setAttribute('src', 'images/logo-fox.png');
    }
});

//ajouter  un bouton pour changer le nim d'utilisateur

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
  }
  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName;
  }
  myButton.addEventListener('click', function() {
    setUserName();
  });