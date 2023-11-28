
function getLastCommitDate(username) {

}

fetch(url, {headers: {'Authorization': 'token' + GITHUB_API_KEY}})
    .then(response => response.json)
    .then(data => {
        const username = '';
        getLastCommitDate(username)
            .then(lastCommitDate => {
                console.log(`The last commit by ${username} was made on ${lastCommitDate}.`);
            })
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });