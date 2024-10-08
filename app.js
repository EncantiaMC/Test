window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.add('transparent');
    }
});
