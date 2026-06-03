document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const sueldo = document.getElementById('currentJob').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('formMessage');

    if(!name || !sueldo || !email) {
        msg.innerHTML = "❌ Por favor completa todos los campos.";
        msg.style.color = "#FF69B4";
        return;
    }

    console.log(`Lead: ${name}, sueldo actual: ${sueldo}, email: ${email}`);
    msg.innerHTML = `✅ ¡Gracias ${name}! En 24h te enviamos tu análisis de costo de oportunidad.`;
    msg.style.color = "#8E44AD";
    document.getElementById('leadForm').reset();
});

document.getElementById('ctaButton').addEventListener('click', () => {
    document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
});