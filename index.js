document.addEventListener('DOMContentLoaded', () => {
    const profiles = document.querySelectorAll('.profile');
    const contentDiv = document.getElementById('content');
  
    profiles.forEach(profile => {
      profile.addEventListener('click', () => {
        const profileId = profile.getAttribute('data-profile');
  
        // Esconde os outros perfis
        profiles.forEach(p => {
          if (p !== profile) {
            p.style.opacity = '0';
          }
        });
  
        // Move o perfil selecionado para o canto superior esquerdo
        profile.classList.add('move-to-corner');
  
        // Aguarda a animação antes de carregar o conteúdo do perfil
        setTimeout(() => {
          fetch(`${profileId}/index${profileId}.html`)
            .then(response => response.text())
            .then(html => {
              document.querySelector('.container').classList.add('hidden');
              contentDiv.innerHTML = html;
              contentDiv.classList.remove('hidden');
            });
        }, 500); // Duração da animação
      });
    });
  });
  