function scrollToSection() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

const hiddenElements = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
    hiddenElements.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if(rect < window.innerHeight - 100){
            el.classList.add('show');
        }
    });
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});