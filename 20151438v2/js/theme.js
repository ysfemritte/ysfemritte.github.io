/* Reference for theme switching - https://youtu.be/PD89iMr50Mw */

//create a variable to monitor the input checkbox
const themeSwitch = document.getElementById("input-theme-switch");

//when the input is clicked verify the state of the checkbox
themeSwitch.addEventListener("click", checkMode);

//1. see which state the checkbox is in
//2. if it is checked enable the dark mode by adding the class
//3. if it is not checked remove dark mode by removing the class
function checkMode() {
    console.log("checking...");
    if (themeSwitch.checked) {
      console.log("dark on");
      darkModeOn();
    } else {
      console.log("dark off");
      darkModeOff();
    }
}
 
function darkModeOn() {
    document.body.classList.add("dark-mode");
}

function darkModeOff() {
    document.body.classList.remove("dark-mode");
}