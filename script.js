// 1. COUNTDOWN TIMER (10 Minute Reset)
function startTimer(duration, display) {
    let timer = duration;
    setInterval(function () {
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) timer = duration;
    }, 1000);
}

// 2. SOCIAL PROOF NOTIFICATIONS
const toast = document.getElementById('liveToast');
const locations = ['Beirut', 'Dubai', 'Riyadh', 'London', 'Berlin'];

function triggerNotification() {
    const loc = locations[Math.floor(Math.random() * locations.length)];
    document.getElementById('toastLocation').innerText = `Someone from ${loc}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}

// 3. FORM HANDLING
document.getElementById('squeezeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('userEmail').value;
    const btn = document.querySelector('.btn-submit');
    
    btn.innerText = "VERIFYING ACCESS...";
    
    setTimeout(() => {
        const phone = "96176724176";
        const text = `*LEAD GENERATED*%0A*Email:* ${email}%0A*Asset:* 2026 Intelligence Briefing`;
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
        
        document.querySelector('.glass-card').innerHTML = `
            <div style="text-align:center; padding: 40px 0;">
                <h2 style="color:var(--accent); margin-bottom:10px;">Access Granted.</h2>
                <p>Establishing secure download link... Check your WhatsApp.</p>
            </div>
        `;
    }, 1500);
});

// INITIALIZE
window.onload = function () {
    startTimer(599, document.querySelector('#countdown'));
    setTimeout(triggerNotification, 4000);
    setInterval(triggerNotification, 18000);
};