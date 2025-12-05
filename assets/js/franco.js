function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.width = "calc(100% - 250px)";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.width = "100%";
}

  document.getElementById('home').classList.add('active');

  window.addEventListener("scroll", function() {
    if (window.scrollY > 100) { 
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
 });

document.addEventListener('DOMContentLoaded', function () {
const fills = document.querySelectorAll('.fill');

fills.forEach(el => {
    const target = el.style.width || el.dataset.width || '0%';
    el.dataset.width = target;                          
    el.style.setProperty('--target-width', target);     
    el.style.width = '0%';                              
});

const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('animate');   
        observer.unobserve(el);         
    }
    });
}, { threshold: 0.4 });

fills.forEach(el => io.observe(el));
});