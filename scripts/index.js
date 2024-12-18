document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.getElementById("contact_form");
 
  form.onsubmit = function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;

    alert(`Hi ${name}! Thank you for contacting us!`);
  };
});


let slideIndex = 0;
showSlides();

function showSlides() {
let slides = document.querySelectorAll(".slide");


slides.forEach(slide => {
  slide.style.display = "none";
});

slideIndex++;

if (slideIndex > slides.length) {
  slideIndex = 1;
}

slides[slideIndex - 1].style.display = "block";

setTimeout(showSlides, 2000); 
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});