/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Malonga Francy Saintrick";
let currentYear = "2023";
let profilePicture = "images/profilePicture.jpeg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favFoods = ["Rice", "Chicken", "Beans"];
const newFavoriteFood = "Burgers";
favFoods.push(newFavoriteFood);

foodElement.textContent = favFoods.join(", ");
foodElement.innerHTML += `<br> + ${favFoods}`;

favFoods.shift();

foodElement.innerHTML += "<br>" + favFoods.join("<br>");
favFoods.pop();
foodElement.innerHTML += "<br>" + favFoods.join("<br>");
