document.getElementById('resumeButton').addEventListener('click', function() {
    let animatedElement = document.getElementById('animatedElement');

    // Add a class to trigger the animation
    animatedElement.classList.add('animate-border-top');

    // Remove the class after the animation is complete (2 seconds in this case)
    setTimeout(function() {
        animatedElement.classList.remove('animate-border-top');
    }, 2000);
});

// Event listener for each button

document.addEventListener('DOMContentLoaded', function () {
    let aboutButton = document.getElementById('about-btn');
    let projectsButton = document.getElementById('projects-btn');
    let contactButton = document.getElementById('contact-btn');

    let aboutParagraph = document.getElementById('z-about');
    let projectsParagraph = document.getElementById('z-projects');
    let contactParagraph = document.getElementById('z-contact');

    aboutButton.addEventListener('click', function () {
        toggleVisibility(aboutParagraph);
        hideOthers([projectsParagraph, contactParagraph]);
    });

    projectsButton.addEventListener('click', function () {
        toggleVisibility(projectsParagraph);
        hideOthers([aboutParagraph, contactParagraph]);
    });

    contactButton.addEventListener('click', function () {
        toggleVisibility(contactParagraph);
        hideOthers([aboutParagraph, projectsParagraph]);
    });

    function toggleVisibility(element) {
        element.classList.toggle('hidden');
    }

    function hideOthers(elementsToHide) {
        elementsToHide.forEach(function (element) {
            element.classList.add('hidden');
        });
    }
});