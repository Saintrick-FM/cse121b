/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const articleElement = document.createElement("article");
    const h3Element = document.createElement("h3");
    h3Element.textContent = temple.templeName;

    const imgElement = document.createElement("img");
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;

    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);

    templesElement.appendChild(articleElement);
  });
};
/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  if (response.ok) {
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);
  }
};
/* reset Function */
const reset = () => {
  templesElement.textContent = "";
};
/* sortBy Function */
const sortBy = (temples) => {
  // Call reset function to clear the output
  reset();

  // Get the value of the HTML element with the ID of sortBy
  const filter = document.getElementById("sortBy").value;

  // Use a switch statement to filter temples based on the selected option
  switch (filter) {
    case "utah":
      const result = temples.filter((temple) =>
        temple.location.includes("Utah")
      );
      console.log("filter choosed = ", filter, " result = ", result);
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;
    case "notutah":
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      displayTemples(
        temples.filter(
          (temple) => new Date(temple.dedicationDate) < new Date(1950, 0, 1)
        )
      );
      break;
    case "all":
    default:
      displayTemples(temples);
      break;
  }
};
getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});
