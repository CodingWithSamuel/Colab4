function toggleMenu() {
    const menu = document.getElementById('adminMenu');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function updateProgressBar(progressBarId, progressPercentId, percent) {
    const progressBar = document.getElementById(progressBarId);
    const progressPercent = document.getElementById(progressPercentId);

    progressBar.style.width = percent + '%';
    progressPercent.textContent = percent + '%';
}
updateProgressBar('progressBar1', 'progressPercent1', 20); // BARRA 1
updateProgressBar('progressBar2', 'progressPercent2', 100); // BARRA 2