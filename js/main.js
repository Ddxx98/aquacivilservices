(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        nav : true,
        loop: true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });
})(jQuery);

function openPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.getElementById("myButton1").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("popup").style.display = "block";
});  

document.getElementById("myButton2").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("popup").style.display = "block";
}); 

document.getElementById("myButton3").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("popup").style.display = "block";
}); 

document.getElementById("closingButton").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("popup").style.display = "none";
    document.getElementById("errorMessage").style.display = "none";
});  

const form = document.getElementById("formData");
if (form){
form.addEventListener("submit", function(event) {
  event.preventDefault(event); // prevent the form from submitting normally

  const formData = new FormData(form);

  // access the form data by field name
  
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const location = formData.get('location');

  if (!name || !email || !phone || !location) {
    document.getElementById("errorMessage").style.display = "block";
    return;
  }
  fetch("https://script.google.com/macros/s/AKfycbylAKktzv3zc2-Ak1O9QNJzerb9sZhKhZBdwfrZyNAHg04cNrCytcIUR7HxSDoyhqKRrg/exec",
  {method:"POST",body: formData})
  .then(res => {res.text()})
  .then(data => {alert(res)})
  // do something with the form data
  console.log(name, email, phone, location);
  form.reset()
  document.getElementById("errorMessage").style.display = "none";
  document.getElementById("popup").style.display = "none";
});
}