"use strict";

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

                // Creating horizontal rule elements
                const hr1 = document.createElement("hr");
                const hr2 = document.createElement("hr");
                const hr3 = document.createElement("hr");


                // Set a fixed height for the card
                cardDiv.style.height = "340px";
                cardDiv.style.width = "500px";

                // Creating light gray section at the top
                const lightGraySection = document.createElement("div");
                lightGraySection.classList.add("light-gray-section", "text-center", "p-2", "rounded-top");
                lightGraySection.style.backgroundColor = "#bbb5b5"
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

                // Creating an image element for the weather icon
                const iconImage = document.createElement("img");
                iconImage.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
                iconImage.alt = weather.weather[0].description;
                iconImage.classList.add("weather-icon");
                iconImage.style.justifyContent = "center";


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

                // Appending the icon image to the card body
                cardBody.appendChild(iconImage);
                // Appending elements to card body
                cardBody.appendChild(weatherDescription);
                cardBody.appendChild(hr1);
                cardBody.appendChild(humidityInfo);
                cardBody.appendChild(hr2);
                cardBody.appendChild(windInfo);
                cardBody.appendChild(hr3);
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

    marker.setLngLat([lng, lat]).addTo(map);
}


weatherCardData(-96.81407447426254, 32.79854912443865)




// Function to make the selected location show on the top right of the screen in ADDRESS form.
// Add a reference to the paragraph element for the selected location
const selectedLocationText = document.getElementById("selected-location-text");

// ...

map.on("click", addMarker);

function addMarker(event) {
    console.log(event);
    let lat = event.lngLat.lat;
    let lng = event.lngLat.lng;

    // Use reverse geocoding to get the address based on the clicked coordinates
    reverseGeocode({ lat: lat, lng: lng }, MAPBOX_API)
        .then(address => {
            // Update the paragraph element with the selected location address
            selectedLocationText.textContent = `Selected location: ${address}`;
        })
        .catch(error => {
            console.error("Reverse geocoding error:", error);
        });

    weatherCardData(lng, lat);

    let deleteData = document.getElementById("forecast");
    deleteData.innerHTML = "";

    // Add the marker to the map at the clicked coordinates
    marker.setLngLat([lng, lat]).addTo(map);
}







