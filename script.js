// Your challenge is to update this JavaScript file so that when a user clicks the buttons on the left, the colour of the background on the right hand side changes.

// Step One - Programme the Red button

// Step Two - Add code for the Green and Blue buttons

// Step Three - Have a look at your solution, could it be refactored to reduce the amount of repeated code?

// Step Four - Add the active class to whichever button was just clicked, remove it from the previous buttons

// Step Five - Add a reset function so that if a button was active and is clicked again, the page resets to a white background

// Bonus - Add more elements to the section on the right
// When the user clicks the buttons on the right, the content of the right hand side should update.
// For example, you could update the right-hand-side to show information on three different artists and have their names in the buttons

// var buttonRed = document.getElementById('red-button');
// let greenButton = document.getElementById('green-button');
// let blueButton = document.getElementById('blue-button');

let allButton = document.getElementsByTagName('button');

let currentBgCol = getComputedStyle(document.body).getPropertyValue(
  '--page-background'
);

function myFunction(e) {
  if (document.querySelector('.active') !== null) {
    document.querySelector('.active').classList.remove('active');
  }
  e.target.className = "active";
}

for (let u = 0; u < allButton.length; u++) {
   
  allButton[u].addEventListener('click', e => {

    e.preventDefault();
    
    if (currentBgCol !== allButton[u].textContent && allButton[u].className != "active" ) {

      document.body.style.setProperty(
        '--page-background',
        `${allButton[u].textContent}`
      );     
    }else{
      allButton[u].classList.remove('active')
      document.body.style.setProperty(
        '--page-background',
        `${currentBgCol}`
      ); 
    }  
    myFunction(e)
    
  });  
}
