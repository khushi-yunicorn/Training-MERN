let equalPressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let historyContent = document.getElementById("historyContent");

window.onload = () => {
    input.value = "";
};

buttonInput.forEach(button => {
    button.addEventListener("click", event => {
        if (equalPressed === 1) equalPressed = 0;

        let value = event.target.dataset.number;

        if (value === "AC") {
            input.value = "";
            return;
        }

        if (value === "DEL") {
            input.value = input.value.slice(0, -1);
            return;
        }

        input.value += value;
    });
});

equal.addEventListener("click", () => {
    equalPressed = 1;
    let inputValue = input.value;

    try {
        let expression = inputValue
            .replace(/sin/g, "Math.sin")
            .replace(/cos/g, "Math.cos")
            .replace(/tan/g, "Math.tan")
            .replace(/\^2/g, "**2")
            .replace(/\^3/g, "**3")
            .replace(/√(\d+)/g, "Math.sqrt($1)")
            .replace(/∛(\d+)/g, "Math.cbrt($1)")
            .replace(/(\d+)!/g, (_, num) => factorial(Number(num)));

        let result = eval(expression);

        if (!Number.isFinite(result)) throw new Error("Invalid Expression");

        input.value = Number.isInteger(result) ? result : result.toFixed(2);

        addtoHistory(inputValue, input.value);
    }
    catch (error) {
        alert("Error: " + error.message);
    }
});

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function addtoHistory(expression, result) {
    let divItem = document.createElement("div");
    let span = document.createElement("span");
    let button = document.createElement("button");

    divItem.className = "historyItem";
    divItem.style.display = "flex";
    divItem.style.justifyContent = "space-between";

    span.textContent = `${expression} = ${result}`;
    span.dataset.userInput = expression;
    span.style.cursor = "pointer";
    span.style.color = "white";

    button.textContent = "Delete";
    button.className = "btn-sm";
    button.style.backgroundColor = "red";
    button.style.color = "white";

    button.addEventListener("click", () => divItem.remove());
    span.addEventListener("click", () => {
        input.value = span.dataset.userInput;
    });

    divItem.appendChild(span);
    divItem.appendChild(button);
    historyContent.appendChild(divItem);
}
