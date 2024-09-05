function updateProgressBar(progressBarId, progressPercentId, percent) {
    const progressBar = document.getElementById(progressBarId);
    const progressPercent = document.getElementById(progressPercentId);
    
    progressBar.style.width = percent + '%';
    progressPercent.textContent = percent + '%';
}
updateProgressBar('progressBar1', 'progressPercent1', 25); // BARRA 1
updateProgressBar('progressBar2', 'progressPercent2', 100); // BARRA 2
updateProgressBar('progressBar3', 'progressPercent3', 25); //BARRA 3