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


let skip = 0; 
const limit = 10; 
const productContainer = document.getElementById('product_container');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');


async function fetchProducts() {
  try {
 
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();


    productContainer.innerHTML = '';

   
    data.products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${product?.images[0]}" alt="${product.title}">
        <div class="card-body">
          <h4 class="card-title">${product.title}</h3>
          <p class="card-description">${product.description}</p>
          <p class="card-price">$${product.price}</p>
        </div>
      `;
      productContainer.appendChild(card);
    });

   
    prevButton.disabled = skip === 0;
    nextButton.disabled = data.products.length < limit;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}


prevButton.addEventListener('click', () => {
  if (skip >= limit) {
    skip -= limit;
    fetchProducts();
  }
});

nextButton.addEventListener('click', () => {
  skip += limit;
  fetchProducts();
});


fetchProducts();