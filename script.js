const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const history = document.querySelector(".history");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = output.replace(/(\d+)%(\d+)/g, (match, p1, p2) => `${p1}*(${p2}/100)`);
        
        output = Math.round(eval(output));
        history.textContent = `${display.value} = ${output}`;
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output; // Update this line
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

function toggleCalculator() {
    const calculator = document.querySelector('.container');
    calculator.classList.toggle('hidden');
    setTimeout(() => {
        calculator.classList.toggle('show');
    }, 10); // Small delay to trigger the animation
}
