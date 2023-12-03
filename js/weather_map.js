"use strict";

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
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
}


/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
        .then(res => res.json())
        // to get all the data from the request, comment out the following three lines...
        .then(data => data.features[0].place_name);
}


// MapBox info
const ACCESS_TOKEN = MAPBOX_API;

mapboxgl.accessToken = ACCESS_TOKEN;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    zoom: 10,
    center: [-96.7970, 32.7767]
});

// Location of Oak'd BBQ - Marker
const marker = new mapboxgl.Marker()
    .setLngLat([-96.76863197472666, 32.85616710706724])
    .addTo(map);

// Pop-up with name of Restaurant
const codeupPopup = new mapboxgl.Popup()
    .setHTML("<p>Oak'd BBQ</p>");

// Pops up when clicked
marker.setPopup(codeupPopup);


// Search Functionality
document.getElementById("sub").addEventListener("click", function () {
    // Grab the value that the user enters below. .value is whatever value they enter the search box
    let currentLocation = geocode(document.getElementById("search").value, MAPBOX_API);

    currentLocation.then(result => {
        console.log(result)
        map.setCenter([result[0], result[1]])
    })
})

// Making it show only 5 days in the forecast
const weatherOutput = document.querySelector("#forecast");

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    'id=4726206' +
    `&appid=${WEATHER_MAP_API}` + `&units=imperial`)
    .then(data => data.json())
    .then(result => {
        const day = result.list;

        for (let i = 0; i < day.length; i += 8) {
            const weather = day[i]

            const date = new Date(weather.dt * 1000);
            console.log(date.toLocaleDateString());



// JS that pushes info from OpenWeatherMap API into the HTML
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card", "m-2",);
            /*cardDiv.style.opacity("60%");*/

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const dateTitle = document.createElement("h6");
            dateTitle.innerText = date.toLocaleDateString();

          /*  const lineOne = document.createElement("hr")*/

            const weatherTitle = document.createElement("p");
            weatherTitle.classList.add("card-text");
            weatherTitle.innerText = `Weather: ${weather.weather[0].description}`;

            const humidityTitle = document.createElement("p");
            humidityTitle.classList.add("card-text");
            humidityTitle.innerText = `Humidity: ${weather.main.humidity}%`;

            const windTitle = document.createElement("p");
            windTitle.classList.add("card-text");
            windTitle.innerText = `Wind: ${weather.wind.speed} mph`;

            const pressureTitle = document.createElement("p");
            pressureTitle.classList.add("card-text");
            pressureTitle.innerText = `Pressure: ${weather.main.pressure} hPa`;

            cardBody.appendChild(dateTitle);
            cardBody.appendChild(weatherTitle);
            cardBody.appendChild(humidityTitle);
            cardBody.appendChild(windTitle);
            cardBody.appendChild(pressureTitle);

            cardDiv.appendChild(cardBody);

            weatherOutput.appendChild(cardDiv);
        }

    })


