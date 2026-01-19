// Variabile globale
let adTimeout;
let countdownInterval;
let timeRemaining = 10;

// Funcție pentru afișarea reclamei
function showAd() {
    const adBox = document.getElementById('adBox');
    const adOverlay = document.getElementById('adOverlay');
    
    // Resetează timerul
    timeRemaining = 10;
    document.getElementById('countdown').textContent = timeRemaining;
    
    // Afișează reclama și overlay
    adBox.style.display = 'block';
    adOverlay.style.display = 'block';
    adBox.classList.remove('closing');
    
    // Pornește countdown
    startCountdown();
    
    // Setează timeout pentru închiderea automată
    clearTimeout(adTimeout);
    adTimeout = setTimeout(closeAd, 10000);
}

// Funcție pentru închiderea reclamei
function closeAd() {
    const adBox = document.getElementById('adBox');
    const adOverlay = document.getElementById('adOverlay');
    
    // Adaugă animația de ieșire
    adBox.classList.add('closing');
    
    // Ascunde după animație
    setTimeout(() => {
        adBox.style.display = 'none';
        adOverlay.style.display = 'none';
        adBox.classList.remove('closing');
    }, 500);
    
    // Oprește countdown
    clearInterval(countdownInterval);
}

// Funcție pentru countdown
function startCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById('countdown').textContent = timeRemaining;
        
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

// Afișează reclama la încărcarea paginii
window.addEventListener('load', function() {
    showAd();
});

// Oprește countdown și timeout dacă se închide fereastra
window.addEventListener('beforeunload', function() {
    clearTimeout(adTimeout);
    clearInterval(countdownInterval);
});
