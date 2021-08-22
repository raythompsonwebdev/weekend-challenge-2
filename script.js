// Your challenge is to update this JavaScript file so that when a user clicks the buttons on the left, the colour of the background on the right hand side changes.

// Step One - Programme the Red button

// Step Two - Add code for the Green and Blue buttons

// Step Three - Have a look at your solution, could it be refactored to reduce the amount of repeated code?

// Step Four - Add the active class to whichever button was just clicked, remove it from the previous buttons

// Step Five - Add a reset function so that if a button was active and is clicked again, the page resets to a white background

// Bonus - Add more elements to the section on the right
// When the user clicks the buttons on the right, the content of the right hand side should update.
// For example, you could update the right-hand-side to show information on three different artists and have their names in the buttons

var buttonRed = document.getElementById('red-button');
let greenButton = document.getElementById('green-button');
let blueButton = document.getElementById('blue-button');

let allButton = document.getElementsByTagName('button');
console.log(allButton);
let currentBgCol = getComputedStyle(document.body).getPropertyValue(
  '--page-background'
);

for (let u = 0; u < allButton.length; u++) {
  console.log(allButton[u]);
  allButton[u].addEventListener('click', e => {
    e.preventDefault();
    if (currentBgCol !== allButton[u].textContent) {
      allButton[u].classList.add("active");
      document.body.style.setProperty(
        '--page-background',
        `${allButton[u].textContent}`
      );     
    } 
  });


}
