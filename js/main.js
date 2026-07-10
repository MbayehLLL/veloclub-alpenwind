// Navigation Scroll-Effekt
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll für Anker-Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formular-Validierung und Bestätigung
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Geburtsjahr-Validierung
            const geburtsjahr = document.getElementById('geburtsjahr').value;
            const currentYear = new Date().getFullYear();
            
            if (geburtsjahr < 1940 || geburtsjahr > currentYear - 5) {
                alert('Bitte gib ein gültiges Geburtsjahr ein.');
                return;
            }
            
            // Alle Pflichtfelder prüfen
            if (form.checkValidity()) {
                // Bestätigung anzeigen
                const vorname = document.getElementById('vorname').value;
                alert('Vielen Dank, ' + vorname + '! Deine Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei dir.');
                
                // Formular zurücksetzen
                form.reset();
            } else {
                alert('Bitte fülle alle Pflichtfelder aus.');
            }
        });
    }
});

