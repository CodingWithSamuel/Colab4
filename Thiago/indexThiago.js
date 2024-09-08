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

const themeToggle = document.getElementById('theme-toggle'); //botão tema

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
});
const translations = {
  "header-name": "Thiago Fachini",
  "header-skills": "Knowledge in Python-JavaScript-HTML",
  "section-about-title": "About Me",
  "section-about-text": `Welcome! My name is Thiago Fachini, I am 18 years old and a member of the constantly learning tech community.
      I am currently in the 2nd semester of Computer Science, where I am gaining and deepening my knowledge in various areas of IT.
      <br><br>
      I have practical experience with Python, JavaScript,CSS and HTML, and am always looking for new opportunities to apply and expand these skills.
      My goal is to find a position in the tech field where I can contribute and collaborate for the continuous development of my skills and the IT. field.
      <br> <br>
      I am excited to start professionally in the field and be part of a team that seeks innovation and challenges.
      <br> <br>`,

  "section-projects-title": "Projects",
  "section-projects-text": "Portfolio Website - JavaScript + HTML + CSS + DATABASE",
  
  "section-courses-title": "Courses",
  "course1": "Computer Science Bachelor's - 2nd Semester <br> (In Progress)",
  "course2": "Project Management - Anhanguera College (Completed)",
  "course3": "Data Protection - Anhanguera College (In Progress)",
  "nav-projects": "Projects",
  "nav-contact": "Contact",
  "btn-back": "Back to Home Page"
};

const originalContent = {};
document.querySelectorAll('[id]').forEach(el => {
  originalContent[el.id] = el.innerHTML;
});

document.getElementById('translate-btn').addEventListener('click', function() {
  const isTranslated = document.body.classList.toggle('translated');
  for (const id in translations) {
      const element = document.getElementById(id);
      if (element) {
          element.innerHTML = isTranslated ? translations[id] : originalContent[id];
      }
  }
});

