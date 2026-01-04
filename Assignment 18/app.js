const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;

        if (value === "AC") {
            clearAll();
        } 
        else if (value === "DEL") {
            deleteOne();
        } 
        else if (value === "=") {
            calculate();
        } 
        else {
            appendValue(value);
        }
    });
});

function appendValue(value) {
    display.value += value;
}

function clearAll() {
    display.value = "";
}

function deleteOne() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
