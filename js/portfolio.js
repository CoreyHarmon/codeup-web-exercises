document.getElementById('resumeButton').addEventListener('click', function() {
    var animatedElement = document.getElementById('animatedElement');

    // Add a class to trigger the animation
    animatedElement.classList.add('animate-border-top');

    // Remove the class after the animation is complete (2 seconds in this case)
    setTimeout(function() {
        animatedElement.classList.remove('animate-border-top');
    }, 2000);
});