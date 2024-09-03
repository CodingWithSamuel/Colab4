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

  //BOTÃO DE TROCAR TEMA
  // Seleciona o botão de troca de tema e o body do documento
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Função para trocar o tema
function toggleTheme() {
  // Verifica o tema atual 
  if (body.classList.contains('light')) {
    // Troca para o tema escuro
    body.classList.remove('light');
    body.classList.add('dark');
    themeToggle.textContent = '𖤓';
  } else {
    // Troca para o tema claro
    body.classList.remove('dark');
    body.classList.add('light');
    themeToggle.textContent = '☾';
  }
}


themeToggle.addEventListener('click', toggleTheme);

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // Troca para o tema escuro
  body.classList.add('dark');
  themeToggle.textContent = '𖤓';
} else {
  // Troca para o tema claro
  body.classList.add('light');
  themeToggle.textContent = '☾';
}
  