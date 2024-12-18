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



function alphaOnly(event) {

  alert(event);

  var key;

  if (window.event) {
    key = window.event.key;
  } else if (e) {
    key = e.which;
  }
  //var key = window.event.key || event.key;
  alert(key.value);
  return ((key >= 65 && key <= 90) || (key >= 95 && key <= 122));

}