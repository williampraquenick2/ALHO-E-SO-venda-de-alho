
document.addEventListener('DOMContentLoaded', () => {
    const btnConfirm = document.getElementById('btn-confirm');
    const stateInitial = document.getElementById('state-initial');
    const stateSuccess = document.getElementById('state-success');
    const yearSpan = document.getElementById('year');

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    if (btnConfirm) {
        btnConfirm.addEventListener('click', () => {
            btnConfirm.disabled = true;
            btnConfirm.innerHTML = `<span>PROCESSANDO...</span>`;
            setTimeout(() => {
                if (stateInitial) stateInitial.classList.add('hidden');
                if (stateSuccess) {
                  stateSuccess.classList.remove('hidden');
                  stateSuccess.classList.add('animate-in');
                }
            }, 800);
        });
    }
});
