import Footer from "../components/Footer.js";
import Data from "./data.js";

document.getElementById("footer").innerHTML = Footer();

const cars = [
  {
    id: 1,
    color: "Pearl Midnight Black",
    brand: "suzuki",
    Interior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556908/WhatsApp_Image_2023-04-15_at_1.13.53_PM_leyqin.jpg",
    Exterior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556595/WhatsApp_Image_2023-04-15_at_1.12.39_PM_l3rxdp.jpg",
    model: "baleno",
  },
  {
    id: 2,
    color: "Pearl Midnight Black",
    brand: "Baleno",
    Interior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556908/WhatsApp_Image_2023-04-15_at_1.13.53_PM_leyqin.jpg",
    Exterior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556595/WhatsApp_Image_2023-04-15_at_1.12.39_PM_l3rxdp.jpg",
    model: "",
  },
  {
    id: 3,
    color: "Pearl Midnight Black",
    brand: "Baleno",
    Interior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556908/WhatsApp_Image_2023-04-15_at_1.13.53_PM_leyqin.jpg",
    Exterior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556595/WhatsApp_Image_2023-04-15_at_1.12.39_PM_l3rxdp.jpg",
    model: "",
  },
  {
    id: 4,
    color: "Pearl Midnight Black",
    brand: "Baleno",
    Interior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556908/WhatsApp_Image_2023-04-15_at_1.13.53_PM_leyqin.jpg",
    Exterior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556595/WhatsApp_Image_2023-04-15_at_1.12.39_PM_l3rxdp.jpg",
    model: "",
  },
  {
    id: 5,
    color: "Pearl Midnight Black",
    brand: "Baleno",
    Interior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556908/WhatsApp_Image_2023-04-15_at_1.13.53_PM_leyqin.jpg",
    Exterior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556595/WhatsApp_Image_2023-04-15_at_1.12.39_PM_l3rxdp.jpg",
    model: "",
  },
  {
    id: 6,
    color: "Pearl Midnight Black",
    brand: "Baleno",
    Interior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556908/WhatsApp_Image_2023-04-15_at_1.13.53_PM_leyqin.jpg",
    Exterior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556595/WhatsApp_Image_2023-04-15_at_1.12.39_PM_l3rxdp.jpg",
    model: "",
  },
  {
    id: 7,
    color: "Pearl Midnight Black",
    brand: "Baleno",
    Interior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556908/WhatsApp_Image_2023-04-15_at_1.13.53_PM_leyqin.jpg",
    Exterior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556595/WhatsApp_Image_2023-04-15_at_1.12.39_PM_l3rxdp.jpg",
    model: "",
  },
  {
    id: 8,
    color: "Black",
    brand: "mahindra",
    Interior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681557052/WhatsApp_Image_2023-04-15_at_1.13.54_PM_1_tg7snh.jpg",
    Exterior_side:
      "https://res.cloudinary.com/dqi30uhiy/image/upload/v1681556908/WhatsApp_Image_2023-04-15_at_1.12.42_PM_1_ut6tdb.jpg",
    model: "scorpio",
  },
];

const carSelect1 = document.getElementById("carSelect1");
carSelect1.addEventListener("change", updateCards);

const carSelect2 = document.getElementById("carSelect2");
carSelect2.addEventListener("change", updateCards);

function updateCards() {
  const selectedValue1 = carSelect1.value;
  const selectedValue2 = carSelect2.value;
  console.log(selectedValue1, selectedValue2);

  // filter the cars based on the selected values from both select tags
  const filteredCars = cars.filter((car) => {
    if (selectedValue1 && selectedValue2) {
      return car.brand === selectedValue1 && car.model === selectedValue2;
    } else if (selectedValue1) {
      return car.brand === selectedValue1;
    } else if (selectedValue2) {
      return car.model === selectedValue2;
    } else {
      return true; // no filters applied
    }
  });

  // render the cards based on the filtered cars
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";

  if (filteredCars.length > 0) {
    const car = filteredCars[0]; // Render only the first car in the filteredCars array

    // Create exterior card
    const exteriorCard = document.createElement("div");
    exteriorCard.classList.add("card");

    const exteriorLabel = document.createElement("h3");
    exteriorLabel.textContent = "Exterior";
    exteriorLabel.classList.add("card-label");

    const exteriorImage = document.createElement("img");
    exteriorImage.src = car.Exterior_side;

    const exteriorDetailsContainer = document.createElement("div");
    exteriorDetailsContainer.classList.add("details-container");

    const exteriorBrandName = document.createElement("h2");
    exteriorBrandName.textContent = `Brand:-${car.brand}`;

    const exteriorModelName = document.createElement("p");
    exteriorModelName.textContent = `Model:-${car.model}`;

    const exteriorColorName = document.createElement("p");
    exteriorColorName.textContent = `Color:-${car.color}`;

    exteriorDetailsContainer.append(
      exteriorBrandName,
      exteriorModelName,
      exteriorColorName
    );

    const exteriorButtonContainer = document.createElement("div");
    exteriorButtonContainer.classList.add("button-container");

    const exteriorViewDetailsButton = document.createElement("button");
    exteriorViewDetailsButton.textContent = "View Exterior Details";

    exteriorButtonContainer.append(exteriorViewDetailsButton);

    exteriorCard.append(
      exteriorLabel,
      exteriorImage,
      exteriorDetailsContainer,
      exteriorButtonContainer
    );

    // Create interior card
    const interiorCard = document.createElement("div");
    interiorCard.classList.add("card");

    const interiorLabel = document.createElement("h3");
    interiorLabel.textContent = "Interior";
    interiorLabel.classList.add("card-label");

    const interiorImage = document.createElement("img");
    interiorImage.src = car.Interior_side;

    const interiorDetailsContainer = document.createElement("div");
    interiorDetailsContainer.classList.add("details-container");

    const interiorBrandName = document.createElement("h2");
    interiorBrandName.textContent = `Brand:-${car.brand}`;

    const interiorModelName = document.createElement("p");
    interiorModelName.textContent = `Model:-${car.model}`;

    const interiorColorName = document.createElement("p");
    interiorColorName.textContent = `Color:-${car.color}`;

    interiorDetailsContainer.append(
      interiorBrandName,
      interiorModelName,
      interiorColorName
    );

    const interiorButtonContainer = document.createElement("div");
    interiorButtonContainer.classList.add("button-container");

    const interiorViewDetailsButton = document.createElement("button");
    interiorViewDetailsButton.textContent = "View Interior Details";

    interiorButtonContainer.append(interiorViewDetailsButton);

    interiorCard.append(
      interiorLabel,
      interiorImage,
      interiorDetailsContainer,
      interiorButtonContainer
    );

    cardContainer.append(exteriorCard, interiorCard);
  } else {
    // Create not found message
    const notFoundMessage = document.createElement("div");
    notFoundMessage.classList.add("not-found-message");
    notFoundMessage.textContent = "No cars found for the selected criteria.";

    cardContainer.append(notFoundMessage);
  }
}

window.addEventListener("load", updateCards);

// Swiper JS For Review Slider
var swiper = new Swiper(".ReviewSlider", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //This is For Responsive
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
