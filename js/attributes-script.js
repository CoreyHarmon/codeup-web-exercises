document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function () {
        // Change the "profile-pic" src attribute after two seconds
        let profilePic = document.getElementById("profile-pic");
        profilePic.src = "images/cat_eyes.jpeg";
    }, 2000);

    setTimeout(function() {
        let profileName = document.getElementById("profile-name");
        profileName.innerHTML = "Ahsoka";
    }, 4000);

    setTimeout(function() {
        let profileDesc = document.getElementById("profile-desc");
        profileDesc.classList.add("new-description-class");
    }, 6000);

    setInterval(function() {
        let profileCard = document.getElementById("profile-card");
        profileCard.classList.toggle("alternate-background");
    }, 2000);

    let profileCard = document.getElementById('profile-card');

    let colors = ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0'];

    function changeBackgroundColor() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        profileCard.style.backgroundColor = randomColor;
    }

    setInterval(changeBackgroundColor, 2000);

    setTimeout(function () {
        let newName = prompt('Enter a new name for the profile:');
        if (newName !== null) {
            profileName.textContent = newName;
        }
    }, colors.length * 2000);
});

