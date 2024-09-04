document.addEventListener('DOMContentLoaded', () => {
  const profiles = document.querySelectorAll('.profile');
  const contentDiv = document.getElementById('content');

  profiles.forEach(profile => {
      profile.addEventListener('click', () => {
          const profileId = profile.getAttribute('data-profile');
          const img = profile.querySelector('img');

          // Esconde os outros perfis
          profiles.forEach(p => {
              if (p !== profile) {
                  p.style.opacity = '0';
              }
          });

          // Move o perfil selecionado para o canto superior esquerdo
          img.classList.add('move-to-corner');

          // Aguarda a animação antes de carregar o conteúdo do perfil
          setTimeout(() => {
              // Carrega o HTML do perfil
              fetch(`${profileId}/index${profileId}.html`)
                  .then(response => response.text())
                  .then(html => {
                      document.querySelector('.container').classList.add('hidden');
                      contentDiv.innerHTML = html;
                      contentDiv.classList.remove('hidden');

                      // Adiciona o CSS do perfil
                      const link = document.createElement('link');
                      link.rel = 'stylesheet';
                      link.href = `${profileId}/Index${profileId}.css`; // Caminho do CSS
                      document.head.appendChild(link);
                  });
          }, 500); // Duração da animação
      });
  });

  // BOTÃO DE TROCAR TEMA
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  function toggleTheme() {
      if (body.classList.contains('light')) {
          body.classList.remove('light');
          body.classList.add('dark');
          themeToggle.textContent = '𖤓';
      } else {
          body.classList.remove('dark');
          body.classList.add('light');
          themeToggle.textContent = '☾';
      }
  }

  themeToggle.addEventListener('click', toggleTheme);

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('dark');
      themeToggle.textContent = '𖤓';
  } else {
      body.classList.add('light');
      themeToggle.textContent = '☾';
  }
});
