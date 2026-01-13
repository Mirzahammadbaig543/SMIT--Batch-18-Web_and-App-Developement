var display = document.getElementById("display");

function press(value) {
  display.value = display.value + value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  var result = display.value;
  result = result.replace("x", "*");
  result = result.replace("/", "/");
  result = result.replace("-", "-");
  result = result.replace("+", "+");
  display.value = eval(result);
}
