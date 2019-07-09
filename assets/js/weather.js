window.addEventListener('load', () => {
    let long; //longitude
    let lat; //latitude
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    let temperatureSpan = document.querySelector('.temperature span');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/"; //Proxy required for localhost communication
            const api = `${proxy}https://api.darksky.net/forecast/300993c0e6a51a55c8c8a49d7f74be60/${lat},${long}`;
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then (data => {
                console.log(data);
                const { temperature, summary, icon } = data.currently; //These curly braces get everything from 'currently', 'EcmaScript 2015'
                
                // F to Celsius Formula
                let celsius = (temperature -32) * (5 / 9); 
                
                // Set the DOM elements from the API
                temperatureDegree.textContent = Math.round(celsius * 10) / 10;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;

                

                // Setting the ICON
                setIcons(icon, document.querySelector('.icon'));

                // Changing F to C
                temperatureSection.addEventListener('click', () => {
                    if (temperatureSpan.textContent === 'F') {
                        temperatureSpan.textContent = 'C';
                        temperatureDegree.textContent =  Math.round(celsius * 10) / 10;
                    } else {
                        temperatureSpan.textContent = 'F';
                        temperatureDegree.textContent = temperature;
                }
            });
        });
    });
} else{
    temperatureDescription.textContent = "At this moment, we were not able to get your location.";
}

    function setIcons (icon, iconID) {
        const skycons = new Skycons({color : "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    };
})