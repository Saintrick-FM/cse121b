/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  const addNumber1 = Number(document.querySelector("#add1").value);
  const addNumber2 = Number(document.querySelector("#add2").value);
  const result = add(addNumber1, addNumber2);
  console.log("result - ",addNumber1,addNumber2, result)
  document.querySelector("#sum").value = result;
}
console.log("hello")
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function () {
  const subtractNumber1 = Number(document.querySelector("#subtract1").value);
  const subtractNumber2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = subtract(
    subtractNumber1,
    subtractNumber2
  );
};
document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = () => {
  const number1 = Number(document.querySelector("#factor1").value);
  const number2 = Number(document.querySelector("#factor2").value);
  return number1 * number2;
}

const multiplyNumbers = () => {
  document.querySelector("#product").value = multiply();
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
  const subtotalValue = document.querySelector("#subtotal").value;
  if (!isNaN(subtotalValue) && isFinite(subtotalValue)) {
    const membershipCheckbox = document.querySelector("#member");
    
    const totalSpan = document.querySelector("#total");
    const subtotal = parseFloat(subtotalValue) || 0;
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
document.querySelector("#array").innerHTML = numbersArray;
const oddNumbers = numbersArray.filter((number) => number % 2 === 1);
console.log("oddNumbers ",oddNumbers)
document.querySelector("#odds").innerHTML = oddNumbers;

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter((number) => number % 2 === 0);
document.querySelector("#evens").innerHTML = evenNumbers;

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector("#sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map((number) => number * 2);
document.querySelector("#multiplied").innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce(
  (sum, number) => sum + number
);

// Assign the result to the HTML element with an ID of sumOfMultiplied

document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;