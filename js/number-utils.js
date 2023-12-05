'use strict'

/*In number-utils.js, include a function to GENERATE A RANDOM NUMBER. Make sure you export it.*/
/*export default function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/!*GEOCODE for maps and finding coordinates*!/
function geocode(search, token) {
    // api url
    let baseUrl = 'https://api.mapbox.com';
    // endpoint when I request long and lat based on location name
    let endPoint = '/geocoding/v5/mapbox.places/';
    // fetch request that takes in a url endpoint that will return the long/lat
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then(res => res.json())
        // to get all the data from the request, comment out the following three lines...
        .then(data => data.features[0].center);
}*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}









