function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("showing");
}
document.getElementById("year").textContent = new Date().getFullYear();
// window.onload = function () {
//   alert(
//     "Disclaimer: This website is a clone for educational purposes only. It is not affiliated with or endorsed by Mercedes Benz."
//   );
// };
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user visits the page, open the modal
window.onload = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
