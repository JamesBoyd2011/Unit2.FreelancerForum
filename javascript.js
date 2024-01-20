const freelancersTBODY = document.getElementById("freelancers");
const averagePriceDOM = document.getElementById("averagePrice");
const freelancers = [];

const firstNames = [
  "Alexander",
  "Esma",
  "Maurício",
  "Barend",
  "Alicia",
  "Reza",
  "Israel",
  "Sanni",
  "Harry",
  "Oliver",
];
const lastNames = [
  "Harrison",
  "Christensen",
  "Van Dusschoten",
  "Perala",
  "Sullad",
  "Holland",
  "Ward",
  "Zaborovskiy",
  "Akyüz",
  "Johnson",
];
const occupations = [
  "Web developer",
  "Graphic designer",
  "Social media specialist",
  "Accountant",
  "Videographer",
  "Editor",
  "Tutor",
];

//Interval to add a freelancer to the listing every 3 seconds
const addFreelancerInterval = setInterval(addFreelancer, 3000);

// API to generate 10 random names

//Defining a freelancer class
class freelancer {
  constructor() {
    this.name = `${randomListItem(firstNames)} ${randomListItem(lastNames)}`;
    this.price = randomPrice();
    this.occupation = randomListItem(occupations);
    freelancers.push(this)
  }
}

//Method to add freelancer to the listing
function addFreelancer() {
  if (freelancers.length <= 10) {
    let person = new freelancer();
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${person.name}</td><td>${person.occupation}</td><td class='price'>${person.price}</td>`;
    freelancersTBODY.append(tr);
    calculateAveragePrice();
  } else {
    clearInterval(addFreelancerInterval);
  }
}

//Method to generate a random price between 30 & 80
function randomPrice() {
  return Math.floor(Math.random() * 50) + 30;
}

//Method to randomly select a element from an array
function randomListItem(array = []) {
  return array[Math.floor(Math.random() * array.length)];
}

//Method to calculate the average prices of the services displayed
function calculateAveragePrice() {
  let sum = 0;
  let prices = document.getElementsByClassName("price");
  [...prices].forEach((price) => {
    sum += Number(price.innerText);
  });
  averagePriceDOM.innerHTML = `The average starting price is $${(
    sum / prices.length
  ).toPrecision(4)}`;
}
