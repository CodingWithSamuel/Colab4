const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const adminMenu = document.getElementById("adminMenu");

  if (loggedInUser) {

      document.getElementById("login-item").style.display = "none";
      
      const profilePicContainer = document.getElementById("profile-pic-container");
      const profilePic = document.getElementById("profile-pic");
      profilePic.src = loggedInUser.profilePic;
      profilePicContainer.style.display = "block";

        
      }

function updateProgressBar(progressBarId, progressPercentId, percent) {
    const progressBar = document.getElementById(progressBarId);
    const progressPercent = document.getElementById(progressPercentId);
    
    progressBar.style.width = percent + '%';
    progressPercent.textContent = percent + '%';
}
updateProgressBar('progressBar1', 'progressPercent1', 25); // BARRA 1
updateProgressBar('progressBar2', 'progressPercent2', 100); // BARRA 2
updateProgressBar('progressBar3', 'progressPercent3', 25); //BARRA 3