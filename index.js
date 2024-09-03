const profiles = document.querySelectorAll('.profile img');

        profiles.forEach(profile => {
            profile.addEventListener('mouseover', () => {
                profile.style.transform = 'scale(1.2) rotate(360deg)';
            });

            profile.addEventListener('mouseout', () => {
                profile.style.transform = 'scale(1)';
            });

            profile.addEventListener('click', () => {
                profile.style.transform = 'scale(1.2) rotate(360deg)';
            });
        });
        