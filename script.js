// Seleccionamos los elementos
const envelopeContainer = document.getElementById('envelopeContainer');
const letterContainer = document.getElementById('letterContainer');

// Función para crear confeti
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'];
    
    // Crear 5 piezas de confeti cada 100ms durante 10 segundos
    const interval = setInterval(() => {
        for (let i = 0; i < 5; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // Posición aleatoria horizontal
            confetti.style.left = Math.random() * 100 + '%';
            
            // Color aleatorio
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Duración y retraso aleatorio para que caigan natural
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            
            document.body.appendChild(confetti);
            
            // Eliminar el elemento después de que caiga para no saturar la memoria
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }, 100);

    // Detener la creación de confeti después de 10 segundos (10000 ms)
    setTimeout(() => {
        clearInterval(interval);
    }, 10000);
}

// Evento al hacer clic en el sobre
envelopeContainer.addEventListener('click', () => {
    // 1. Ocultar el sobre
    envelopeContainer.style.display = 'none';
    
    // 2. Mostrar la carta
    letterContainer.classList.remove('hidden');
    
    // 3. Lanzar el confeti
    createConfetti();
});