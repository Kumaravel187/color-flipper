// Selecting DOM elements for main, background text, and button
const backgroundEl = document.querySelector(".main");
const backgroundTextEl = document.querySelector(".main__section--bg");
const btnEl = document.querySelector(".main__section--btn");

// Array of hex values to be used in random hex color generation
const hexValuesArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

// Function to generate a random hex color
const randHexGenerator = (hexArray = hexValuesArray) => {
  // Initialize hex string with a "#" symbol
  let hexStr = "#";

  // Generate six random hex values and append them to the hex string
  for (let i = 0; i < 6; i++) {
    const randomHex = Math.floor(Math.random() * hexArray.length);
    hexStr += hexArray[randomHex];
  }

  // Return the generated hex color string
  return hexStr;
};

// Event listener for the button click event
btnEl.addEventListener("click", () => {
  // Generate a random hex color
  let randomColorData = randHexGenerator();

  // Update the background text content and color
  backgroundTextEl.textContent = `background color: ${randomColorData}`;
  backgroundTextEl.style.color = randomColorData;

  // Set the background color of the main element
  backgroundEl.style.backgroundColor = randomColorData;
});
