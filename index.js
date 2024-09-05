/*document.addEventListener('DOMContentLoaded', () => {
    const profiles = document.querySelectorAll('.profile');
    const contentDiv = document.getElementById('content');
    const botaoVoltar = document.querySelector('.botao-voltar');//

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
                        // Adiciona o Js do perfil
                        

                        // Exibe o botão de voltar
                        botaoVoltar.classList.remove('hidden');
                    });
            }, 500); // Duração da animação
        });
    });

    // Ao clicar no botão voltar
    botaoVoltar.addEventListener('click', () => {
        botaoVoltar.classList.add('hidden');
        contentDiv.classList.add('hidden');
        document.querySelector('.container').classList.remove('hidden');
        profiles.forEach(p => p.style.opacity = '1');
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
});*/
 
              // teste de codigo novo//

function selectProfile(profileElement) {
    const menu = document.getElementById('menu');
    const selectedProfile = document.getElementById('selectedProfile');
    const profileDetails = document.getElementById('profileDetails');
    const selectedImage = document.getElementById('selectedImage');
    const profileName = document.getElementById('profileName');

    // esconde menu
    menu.style.display = 'none';

    // mostra perfil selecionado
    selectedProfile.style.display = 'flex';
    profileDetails.style.display = 'flex';

    // set da imagem e perfil selecionado
    selectedImage.src = profileElement.getAttribute('data-img');
    profileName.textContent = profileElement.getAttribute('data-name');

    // escala a imagem do perfil
    selectedImage.style.transform = 'scale(0.5)';
}

function goBack() {
    const menu = document.getElementById('menu');
    const selectedProfile = document.getElementById('selectedProfile');
    const selectedImage = document.getElementById('selectedImage');

    // mostra menu e esconde perfil
    menu.style.display = 'flex';
    selectedProfile.style.display = 'none';

    // reseta o image scaling
    selectedImage.style.transform = 'scale(1)';
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeButton = document.getElementById('themeToggleButton');
    themeButton.textContent = document.body.classList.contains('dark-mode') ? '☀' : '☾';
}
//Carrega o HTML do perfil
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
    })
