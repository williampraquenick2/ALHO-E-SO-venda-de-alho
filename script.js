
document.addEventListener('DOMContentLoaded', () => {
    const btnConfirm = document.getElementById('btn-confirm');
    const stateInitial = document.getElementById('state-initial');
    const stateSuccess = document.getElementById('state-success');
    const yearSpan = document.getElementById('year');

    // Atualiza o ano no rodapé
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    if (btnConfirm) {
        btnConfirm.addEventListener('click', () => {
            // 1. Disparar o evento Purchase do Meta Pixel
            if (typeof fbq === 'function') {
                fbq('track', 'Purchase');
                console.log('Evento Purchase disparado com sucesso.');
            } else {
                console.warn('Meta Pixel não carregado corretamente.');
            }

            // 2. Feedback visual de processamento
            btnConfirm.disabled = true;
            btnConfirm.innerHTML = '<span class="spinner"></span> LIBERANDO...';

            // 3. Transição para o estado de sucesso após o disparo
            setTimeout(() => {
                // Esconde a interface inicial
                if (stateInitial) stateInitial.classList.add('hidden');
                
                // Mostra a mensagem de sucesso
                if (stateSuccess) {
                    stateSuccess.classList.remove('hidden');
                    stateSuccess.classList.add('fade-in');
                }
                
                // Rola para o topo para garantir visibilidade da mensagem
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 1200); // Tempo levemente maior para garantir que o pixel processe
        });
    }
});
