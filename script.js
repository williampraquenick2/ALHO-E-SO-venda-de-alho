
document.addEventListener('DOMContentLoaded', () => {
    const btnConfirm = document.getElementById('btn-confirm');
    const stateInitial = document.getElementById('state-initial');
    const stateSuccess = document.getElementById('state-success');
    const yearSpan = document.getElementById('year');

    // Set current year
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    if (btnConfirm) {
        btnConfirm.addEventListener('click', () => {
            // 1. Mostrar estado de carregamento no botão
            btnConfirm.disabled = true;
            btnConfirm.innerHTML = '<span class="spinner"></span> PROCESSANDO...';

            // 2. Simular pequeno delay para feedback visual
            setTimeout(() => {
                // Esconder estado inicial
                if (stateInitial) stateInitial.classList.add('hidden');
                
                // Mostrar estado de sucesso com animação
                if (stateSuccess) {
                    stateSuccess.classList.remove('hidden');
                    stateSuccess.classList.add('fade-in');
                }
                
                // Opcional: Rolar para o topo do card no mobile
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 1000);
        });
    }
});
