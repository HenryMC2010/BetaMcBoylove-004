let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginBottom = value * 3 + 'px'
})
