// Your challenge is to update this JavaScript file so that when a user clicks the buttons on the left, the colour of the background on the right hand side changes.

// Step One - Programme the Red button

// Step Two - Add code for the Green and Blue buttons

// Step Three - Have a look at your solution, could it be refactored to reduce the amount of repeated code?

// Step Four - Add the active class to whichever button was just clicked, remove it from the previous buttons

// Step Five - Add a reset function so that if a button was active and is clicked again, the page resets to a white background

// Bonus - Add more elements to the section on the right
// When the user clicks the buttons on the right, the content of the right hand side should update.
// For example, you could update the right-hand-side to show information on three different artists and have their names in the buttons

// get all buttons
let allButton = document.getElementsByTagName('button');

//get color of current background
let currentBgCol = getComputedStyle(document.body).getPropertyValue(
  '--page-background'
);

//set link to active function
function myFunction(e) {
  //if current target button not equal to null
  if (document.querySelector('.active') !== null) {
    //remove active from any other button with active class
    document.querySelector('.active').classList.remove('active');
  }
  //add active class to current event target
  e.target.className = "active";
}

//loop over buttons collection
for (let u = 0; u < allButton.length; u++) {
   
  //add event listener to each button
  allButton[u].addEventListener('click', e => {

    //prevent default
    e.preventDefault();
    
    // if button color equals background colour and class name not active
    if (currentBgCol !== allButton[u].textContent && allButton[u].className != "active" ) {
      //set background color to background color
      document.body.style.setProperty(
        '--page-background',
        `${allButton[u].textContent}`
      );     
    }else{
      //else remove active class and set background color to default white
      allButton[u].classList.remove('active')
      document.body.style.setProperty(
        '--page-background',
        `${currentBgCol}`
      ); 
    } 
    // invoke active function passing in event object as argument 
    myFunction(e)
    
  });  
}
