/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
const addNumber1 = Number(document.querySelector("#add1").value);
const addNumber2 = Number(document.querySelector("#add2").value);

function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  const addNumber1 = Number(document.querySelector("#add1").value);
  const addNumber2 = Number(document.querySelector("#add2").value);

  const result = add(addNumber1, addNumber2);
  document.querySelector("#sum").value = result;
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function (subtractNumber1, subtractNumber2) {
  const subtractNumber1 = Number(document.querySelector("#subtract1").value);
  const subtractNumber2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = subtract(
    subtractNumber1,
    subtractNumber2
  );
};
document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers());

/* Arrow Function - Multiply Numbers */
const factor1 = Number(document.querySelector("#factor1").value);
const factor2 = Number(document.querySelector("#factor2").value);
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  document.querySelector("#product").value = multiply(factor1, factor2);
  return;
};
document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
  return number1 / number2;
}
const divideNumbers = () => {
  const dividend = Number(document.querySelector("#dividend").value);
  const divisor = Number(document.querySelector("#divisor").value);

  document.querySelector("#quotient").value = divide(dividend, divisor);
  return;
};

document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", function () {
  const subtotalValue = Number(document.querySelector("#subtotal").value);
  if (!isNaN(subtotalValue) && isFinite(subtotalValue)) {
    console.log("Valid Subtotal Value:", subtotalValue);
    const membershipCheckbox = document.querySelector("#member");

    const totalSpan = document.querySelector("#total");
    const subtotal = parseFloat(subtotalInput.value) || 0;
    const discount = membershipCheckbox.checked ? 0.15 : 0;

    const discountedTotal = subtotal * (1 - discount);
    totalSpan.innerHTML = `$ ${discountedTotal.toFixed(2)}`;
  } else {
    console.error(
      "Invalid Subtotal Value. Please enter a valid numeric amount."
    );
  }
});
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Odds Only Array */
document.querySelector("#array").innerHTML = numbersArray.join(", ");
const oddNumbers = numbersArray.filter((number) => number % 2 === 1);
document.querySelector("#evens").innerHTML = oddNumbers.join(", ");

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter((number) => number % 2 === 0);
document.querySelector("#evens").innerHTML = evenNumbers.join(", ");

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map((number) => number * 2);
/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce(
  (sum, number) => sum + number,
  0
);

// Assign the result to the HTML element with an ID of sumOfMultiplied
document.getElementById("sumOfMultiplied").textCinnerHTMLontent =
  sumOfMultiplied;