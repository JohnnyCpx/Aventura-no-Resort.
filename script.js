const avanca = document.querySelectorAll('.btn-proximo, .btn-reiniciar');

avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.passo.ativo');
        const proximoPassoId = this.getAttribute('data-proximo');

        // Fechamento suave do passo atual
        if (atual) {
            atual.classList.remove('ativo');
            atual.classList.add('saindo');

            setTimeout(() => {
                atual.classList.remove('saindo');

                // Lógica para reiniciar ou avançar
                if (this.classList.contains('btn-reiniciar')) {
                    location.reload();
                } else if (proximoPassoId) {
                    const proximoPasso = document.getElementById('passo-' + proximoPassoId);
                    if (proximoPasso) {
                        proximoPasso.classList.add('ativo');
                        // Rolagem suave para o topo do próximo passo
                        proximoPasso.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }, 300); // Tempo da animação
        }
    });
});