/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
  name: "Francy Saintrick MALONGA",
  photo: "images/profilePicture.jpeg",
  favoriteFoods: ["Rice", "Chicken", "Beans"],
  hobbies: [
    "Playing soccer",
    "Watching football games",
    "Listenning to Rumba, Zook and Afro music",
  ],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: "Brazzaville, Republic of Congo",
  length: "2 years",
});

let placesLived = [
  { place: "Pointe-Noire", length: "3months" },
  { place: "Kinkala", length: "1 year" },
];

placesLived.forEach((placeLived) => {
  myProfile.placesLived.push(placeLived);
});

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobbie) => {
  let li = document.createElement("li");
  li.textContent = hobbie;
  document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
  let dt = document.createElement("dt");
  let dd = document.createElement("dd");
  dt.textContent = placeLived.place;
  dd.textContent = placeLived.length;
  document.querySelector("#places-lived").append(dt, dd);
});
