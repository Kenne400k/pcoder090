// Thêm smooth scrolling cho tất cả các liên kết
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Thêm hiệu ứng fade-in khi cuộn trang
window.addEventListener('scroll', () => {
    let elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
