 const botaoTema = document.getElementById('troca-tema');
    
    botaoTema.addEventListener('click', () => {
      document.body.classList.toggle('modo-escuro');
      
      // Troca o ícone do botão
      if (document.body.classList.contains('modo-escuro')) {
        botaoTema.textContent = '☀️';
      } else {
        botaoTema.textContent = '🌙';
      }
    });
    