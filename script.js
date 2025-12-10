const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

const tabBtns = document.querySelectorAll('.tab-btn');
const courseCards = document.querySelectorAll('.course-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-tab');

        courseCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const enrollForm = document.getElementById('enrollForm');
const successModal = document.getElementById('successModal');
const closeModalBtns = document.querySelectorAll('.close-modal, .close-modal-btn');

enrollForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        course: document.getElementById('course').value
    };

    console.log('Отправлена заявка:', formData);
    
    successModal.style.display = 'flex';
    
    enrollForm.reset();
});

document.querySelectorAll('.enroll-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const courseCard = this.closest('.course-card');
        const courseTitle = courseCard.querySelector('h3').textContent;
        
        document.getElementById('course').value = courseTitle;
        
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
        
        document.getElementById('name').focus();
    });
});

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        successModal.style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.style.display = 'none';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});