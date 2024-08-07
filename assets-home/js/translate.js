document.getElementById("translateBtn").addEventListener("click", function () {
  document.getElementById("translateBtn").style.display = "none";
  // document.getElementById("about-des").style.display = "none";
  document.getElementById("refreshBtn").style.display = "block";

  // Ganti teks dengan terjemahan
  document.getElementById("about-title2").textContent = "Enjoy your trip with Altry Rentcar";
  document.getElementById("about-title1").textContent = "About Us";
  document.getElementById("select").textContent = "Select";
  document.getElementById("footer-lading").textContent = "Trusted Car Rental";
  document.getElementById(
    "about-des").textContent = `We offer safe and comfortable car rental transportation with a complete selection of vehicles. \nThe price is very affordable but still prioritizes the best service and quality with professional and experienced drivers. \nEnjoy your trip around the capital city of Jakarta with comfort and peace of mind with Altry Rentcar. \n`;
  document.getElementById("head-prod").textContent = "our cars at AltryRentCar";
  document.getElementById("head-prod-des").textContent = "Daily and Luxury Car for Your Event";
  document.getElementById("link").textContent = "How to order?";
  document.getElementById("service-1").textContent = "ready to pick you up.";
  document.getElementById("service-des").textContent = "We are always committed to providing our best service to you, including:";
  document.getElementById("service-1-des").textContent = "We always make sure to arrive on time for our customers";
  document.getElementById("service-2-des").textContent = "Just let us know if you need a ride from the airport.";
  document.getElementById("service-3-des").textContent = "Safety is our top priority, so we've put GPS trackers on all our vehicles.";
  document.getElementById("service-4-des").textContent = "We'll make sure our car is always well-maintained for a smooth ride.";
  document.getElementById("service-4").textContent = "well-maintained car.";

  //   translate secara berulang
  const moreButtons = document.querySelectorAll(".more");
  moreButtons.forEach((button) => {
    button.textContent = "Read More";
  });
  const modalhour = document.querySelectorAll(".hour");
  modalhour.forEach((button) => {
    button.textContent = "Hour";
  });
  const includedriver = document.querySelectorAll(".driver");
  includedriver.forEach((button) => {
    button.textContent = " Including experienced drivers";
  });
  const fuel = document.querySelectorAll(".fuel");
  fuel.forEach((button) => {
    button.textContent = " excluding fuel";
  });
});

document.getElementById("refreshBtn").addEventListener("click", function () {
  location.reload(); // Refresh halaman
});
