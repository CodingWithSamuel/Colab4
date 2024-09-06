function loadProfile(profilePage) {
    window.location.href = profilePage;
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('light-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}
