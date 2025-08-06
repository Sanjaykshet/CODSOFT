

// Reference to the display element
const display = document.getElementById("display");

// Append characters (numbers/operators) to the display
function appendValue(value) {
  display.value += value;
}

// Clear everything from display
function clearDisplay() {
  display.value = "";
}

// Calculate the final result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
