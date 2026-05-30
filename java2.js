// Variables globales
let currentSlide = 0;
let totalSlides = 0;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeCountdown();
});

// Countdown
function initializeCountdown() {
    const targetDate = new Date('2026-10-24T15:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Funciones de los botones
function openLocation(location) {
    const urls = {
        ceremony: "https://maps.app.goo.gl/hXBP9T1xPPegVVPi9",
        celebration: "https://maps.app.goo.gl/y7knuC8fXERsHMNz7"
    };
    window.open(urls[location], '_blank');
}

function sharePhoto() {
    window.open('https://photos.app.goo.gl/5ZAtK7CHYaCQwgXz7', '_blank');
}

function showDressCode() {
    showToast("Dress Code", "Vestimenta Formal 👗🤵");
}

function showGifts() {
    window.open('https://cuentapro11.github.io/Numero30-5-26/', '_blank');
}

function confirmAttendance() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScOvdLI2C1U0uNq97cPeuAlCU3hc0ZcgJEtL7T1ZwVEMdUMVQ/viewform?usp=publish-editor', '_blank');
}

// Sistema de Toast
function showToast(title, message) {
    const toast = document.getElementById('toast');
    const toastContent = document.getElementById('toastContent');
    
    toastContent.innerHTML = `
        <h4 style="font-weight: 600; color: hsl(var(--brown)); margin-bottom: 0.5rem;">${title}</h4>
        <p style="color: hsl(var(--foreground) / 0.7);">${message}</p>
    `;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}
