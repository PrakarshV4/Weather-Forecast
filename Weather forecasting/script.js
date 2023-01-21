let weather = {
    apiKey: "d2b2a6e1f66f020adfe1a1428801beba",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.diplayWeather(data));
    },
    diplayWeather :function(data){
        const{ name } =data;
        const{ icon,description }=data.weather[0];
        const{ feels_like ,temp,pressure,humidity}=data.main;
        const{ speed }=data.wind;
        document.querySelector(".city").innerText="Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" +icon + ".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".humidity").innerText="Humidity: "+humidity;
        document.querySelector(".wind").innerText="Wind Speed: "+speed+" m/s";
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".feels_like").innerText="Feels Like: "+feels_like+"°C";
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".pressure").innerText="Pressure: "+pressure+" hPa";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')";
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }

};
document
    .querySelector(".search button")
    .addEventListener("click", function(){
        weather.search();
        
});
document.querySelector(".search-bar")
.addEventListener("keyup" , function ( event ){
    if(event.key==="Enter"){
        weather.search();
    }
});

weather.fetchWeather("Raipur");