function updateProgressBar(progressBarId, progressPercentId, percent) {
    const progressBar = document.getElementById(progressBarId);
    const progressPercent = document.getElementById(progressPercentId);
    
    progressBar.style.width = percent + '%';
    progressPercent.textContent = percent + '%';
}
updateProgressBar('progressBar1', 'progressPercent1', 25); // BARRA 1
updateProgressBar('progressBar2', 'progressPercent2', 100); // BARRA 2
updateProgressBar('progressBar3', 'progressPercent3', 25); //BARRA 3

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const imgTextContainer = document.querySelector('.img-text-container');

    toggleButton.addEventListener('click', () => {
        imgTextContainer.classList.toggle('clicked');
    });
});
