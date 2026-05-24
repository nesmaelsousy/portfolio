
// const menuToggle = document.getElementById('menuToggle');
// const navLinks = document.getElementById('navLinks');

// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('open');
// });

$(document).ready(function () {
  $("#carouse").owlCarousel({
    items: 2,
    margin: 0 ,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>'
    ], responsive: {
        0: {
          items: 1  
        },
        1200: {
          items: 1  
        },
       
      }
  });
});
// إظهار الأيقونة عند النزول أكثر من 200px
window.addEventListener('scroll', function() {
    const btn = document.getElementById('back-to-top');
    if (window.scrollY > 200) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

// عند الضغط، ترجع الصفحة للفوق بسلاسة
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});