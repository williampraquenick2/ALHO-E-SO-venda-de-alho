
document.addEventListener('DOMContentLoaded', () => {
    const btnConfirm = document.getElementById('btn-confirm');
    const stateInitial = document.getElementById('state-initial');
    const stateSuccess = document.getElementById('state-success');
    const yearSpan = document.getElementById('year');

    // Atualiza o ano no footer
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    btnConfirm.addEventListener('click', () => {
        // Feedback visual de carregamento
        btnConfirm.disabled = true;
        btnConfirm.innerHTML = `
            <span class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                PROCESSANDO...
            </span>
        `;

        // Pequeno atraso para garantir o feedback e o disparo do pixel
        setTimeout(() => {
            // 1. Dispara o evento de Purchase no Meta Pixel
            if (window.fbq) {
                fbq('track', 'Purchase');
                console.log('Meta Pixel: Purchase tracked');
            }

            // 2. Troca as telas
            stateInitial.classList.add('hidden');
            stateSuccess.classList.remove('hidden');
            stateSuccess.classList.add('animate-in');
        }, 800);
    });
});
