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

// MapBox info
const ACCESS_TOKEN = MAPBOX_API;

mapboxgl.accessToken = ACCESS_TOKEN;


const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    zoom: 10,
    center: [-96.7970, 32.7767]
});


function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
        .then(res => res.json())
        // to get all the data from the request, comment out the following three lines...
        .then(data => data.features[0].place_name);
}


// Search Functionality
document.getElementById("sub").addEventListener("click", function () {
    // Grab the value that the user enters below. .value is whatever value they enter the search box
    let currentLocation = geocode(document.getElementById("search").value, MAPBOX_API);

    currentLocation.then(result => {
        console.log(result)
        map.setCenter([result[0], result[1]])
        weatherCardData(result[0], result[1])

        let deleteData = document.getElementById("forecast")
        deleteData.innerHTML = ""
    })
})

// Making it show only 5 days in the forecast
const weatherOutput = document.querySelector("#forecast");
function weatherCardData(lng, lat) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}` +
        `&appid=${WEATHER_MAP_API}` + `&units=imperial`)
        .then(data => data.json())
        .then(result => {
            const day = result.list;

            for (let i = 0; i < day.length; i += 8) {
                const weather = day[i];

                const date = new Date(weather.dt * 1000);
                console.log(date.toLocaleDateString());





                // Creating a card element
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("card", "m-2", "rounded", "shadow-sm", "forecast-card");

                // Set a fixed height for the card
                cardDiv.style.height = "300px";
                cardDiv.style.width = "500px";

                // Creating light gray section at the top
                const lightGraySection = document.createElement("div");
                lightGraySection.classList.add("light-gray-section", "text-center", "p-2", "rounded-top");
                lightGraySection.style.backgroundColor = "#D3D3D3"
                lightGraySection.style.height = "38px"

                // Creating a new div for the date inside the lightGraySection
                const dateDiv = document.createElement("div");
                dateDiv.classList.add("date-div");
                dateDiv.innerText = date.toLocaleDateString();

                // Creating card body
                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                // Creating card title (date)
                const tempTitle = document.createElement("h6");
                tempTitle.classList.add("mb-0");
                tempTitle.innerText = date.toLocaleDateString();


                // Creating card content (weather information)
                const weatherDescription = document.createElement("p");
                weatherDescription.classList.add("card-text");
                weatherDescription.innerText = `Weather: ${weather.weather[0].description}`;

                const humidityInfo = document.createElement("p");
                humidityInfo.classList.add("card-text");
                humidityInfo.innerText = `Humidity: ${weather.main.humidity}%`;

                const windInfo = document.createElement("p");
                windInfo.classList.add("card-text");
                windInfo.innerText = `Wind: ${weather.wind.speed} mph`;

                const pressureInfo = document.createElement("p");
                pressureInfo.classList.add("card-text");
                pressureInfo.innerText = `Pressure: ${weather.main.pressure} hPa`;


                // Appending elements to card body
                cardBody.appendChild(tempTitle);
                cardBody.appendChild(weatherDescription);
                cardBody.appendChild(humidityInfo);
                cardBody.appendChild(windInfo);
                cardBody.appendChild(pressureInfo);

                // Appending light gray section to the card
                cardDiv.appendChild(lightGraySection);

                // Appending card body to card
                cardDiv.appendChild(cardBody);

                // Appending the date div to the lightGraySection
                lightGraySection.appendChild(dateDiv);

                // Appending card to forecast container
                weatherOutput.appendChild(cardDiv);
            }
        });
}

// Create a new marker at the clicked coordinates
const marker = new mapboxgl.Marker(
    {
        draggable: true,
         color: "purple"
})

map.on("click", addMarker)

function addMarker (event) {
    console.log(event)
    let lat = event.lngLat.lat;
    let lng = event.lngLat.lng;

     weatherCardData(lng, lat)
    let deleteData = document.getElementById("forecast")
    deleteData.innerHTML = ""
}



// Update the forecast using the clicked coordinates
//                 updateForecast(clickedCoordinates);

// pops up when clicked
//                 marker.setMarker(codeupPopup);


weatherCardData(-96.81407447426254, 32.79854912443865)






