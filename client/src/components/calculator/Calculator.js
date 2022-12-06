import React from "react";
import "../calculator/Calculator.scss";

const keys = document.querySelectorAll(".key");
const display_input = document.querySelector(".display .input");
const display_output = document.querySelector(".display .output");

let input = "";

for (let key of keys) {
  const value = key.dataset.key;

  key.addEventListener("click", () => {
    if (value === "clear") {
      input = "";
      display_input.innerHTML = "";
      display_output.innerHTML = "";
    } else if (value === "backspace") {
      input = input.slice(0, -1);
      display_input.innerHTML = CleanInput(input);
    } else if (value === "=") {
      let result = eval(PerpareInput(input));

      display_output.innerHTML = CleanOutput(result);
    } else if (value === "brackets") {
      if (
        input.indexOf("(") === -1 ||
        (input.indexOf("(") !== -1 &&
          input.indexOf(")") !== -1 &&
          input.lastIndexOf("(") < input.lastIndexOf(")"))
      ) {
        input += "(";
      } else if (
        (input.indexOf("(") !== -1 && input.indexOf(")") === -1) ||
        (input.indexOf("(") !== -1 &&
          input.indexOf(")") !== -1 &&
          input.lastIndexOf("(") > input.lastIndexOf(")"))
      ) {
        input += ")";
      }

      display_input.innerHTML = CleanInput(input);
    } else {
      if (ValidateInput(value)) {
        input += value;
        display_input.innerHTML = CleanInput(input);
      }
    }
  });
}

function CleanInput(input) {
  let input_array = input.split("");
  let input_array_length = input_array.length;

  for (let i = 0; i < input_array_length; i++) {
    if (input_array[i] === "*") {
      input_array[i] = ` <span className="operator">x</span> `;
    } else if (input_array[i] === "/") {
      input_array[i] = ` <span className="operator">÷</span> `;
    } else if (input_array[i] === "+") {
      input_array[i] = ` <span className="operator">+</span> `;
    } else if (input_array[i] === "-") {
      input_array[i] = ` <span className="operator">-</span> `;
    } else if (input_array[i] === "(") {
      input_array[i] = `<span className="brackets">(</span>`;
    } else if (input_array[i] === ")") {
      input_array[i] = `<span className="brackets">)</span>`;
    } else if (input_array[i] === "%") {
      input_array[i] = `<span className="percent">%</span>`;
    }
  }

  return input_array.join("");
}

function CleanOutput(output) {
  let output_string = output.toString();
  let decimal = output_string.split(".")[1];
  output_string = output_string.split(".")[0];

  let output_array = output_string.split("");

  if (output_array.length > 3) {
    for (let i = output_array.length - 3; i > 0; i -= 3) {
      output_array.splice(i, 0, ",");
    }
  }

  if (decimal) {
    output_array.push(".");
    output_array.push(decimal);
  }

  return output_array.join("");
}

function ValidateInput(value) {
  let last_input = input.slice(-1);
  let operators = ["+", "-", "*", "/"];

  if (value === "." && last_input === ".") {
    return false;
  }

  if (operators.includes(value)) {
    if (operators.includes(last_input)) {
      return false;
    } else {
      return true;
    }
  }

  return true;
}

function PerpareInput(input) {
  let input_array = input.split("");

  for (let i = 0; i < input_array.length; i++) {
    if (input_array[i] === "%") {
      input_array[i] = "/100";
    }
  }

  return input_array.join("");
}

const Calculator = () => {
  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          <div className="content">
            <div className="input"></div>
            <div className="output"></div>
          </div>
        </div>

        <div className="keys">
          <div data-key="clear" className="key action">
            <span>AC</span>
          </div>

          <div data-key="brackets" className="key action">
            <span>( )</span>
          </div>

          <div data-key="%" className="key action">
            <span>%</span>
          </div>

          <div data-key="/" className="key operator">
            <span>÷</span>
          </div>

          <div data-key="7" className="key">
            <span>7</span>
          </div>

          <div data-key="8" className="key">
            <span>8</span>
          </div>

          <div data-key="9" className="key">
            <span>9</span>
          </div>

          <div data-key="*" className="key operator">
            <span>x</span>
          </div>

          <div data-key="4" className="key">
            <span>4</span>
          </div>

          <div data-key="5" className="key">
            <span>5</span>
          </div>

          <div data-key="6" className="key">
            <span>6</span>
          </div>

          <div data-key="-" className="key operator">
            <span>-</span>
          </div>

          <div data-key="1" className="key">
            <span>1</span>
          </div>

          <div data-key="2" className="key">
            <span>2</span>
          </div>

          <div data-key="3" className="key">
            <span>3</span>
          </div>

          <div data-key="+" className="key operator">
            <span>+</span>
          </div>

          <div data-key="backspace" className="key action">
            <span>&lt;</span>
          </div>

          <div data-key="0" className="key">
            <span>0</span>
          </div>

          <div data-key="." className="key">
            <span>.</span>
          </div>

          <div data-key="=" className="key operator">
            <span>=</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
