// Importing the CSS_COLOR_NAMES object from the data.js file
import { CSS_COLOR_NAMES } from "./data.js";

// Selecting DOM elements
const backgroundEl = document.querySelector(".main");
const backgroundTextEl = document.querySelector(".main__section--bg");
const btnEl = document.querySelector(".main__section--btn");

// Creating an array of color names from the CSS_COLOR_NAMES object
let arryOfColorNames = Object.keys(CSS_COLOR_NAMES);

// Function to generate a random color from the array of color names
const randomColorGenerator = (colors = arryOfColorNames) => {
  // check if color array has empty value
  if (colors.length === 0) {
    return "pink"; // Default to pink string color value
  }

  const randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
};

// Adding a click event listener to the button element
btnEl.addEventListener("click", () => {
  // Generating a random color
  let randomColorData = randomColorGenerator();

  // Updating the background text content and color
  backgroundTextEl.textContent = `background color: ${randomColorData}`;
  backgroundTextEl.style.color = randomColorData;

  // Setting the background color of the main element
  backgroundEl.style.backgroundColor = randomColorData;
});
