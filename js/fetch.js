
function findLastCommit (name) {

    let url =  `https://api.github.com/users/${name}/events/public`
    fetch(url,  {headers: {'Authorization': 'token' + GITHUB_API_KEY}})
        // turning into json to make it more viewable
        .then(response => response.json())
        .then(data => console.log(data[0].payload.commits[0]))
        .catch(error => console.log("Error" + error))
}

findLastCommit("xJohnnyMartinezx") // type in any user-name to fill in above url
