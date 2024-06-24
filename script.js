
const apikey ="ecd88562d95f2532f78971f0db78487a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox =document.querySelector(".search input");
const searchbtn =document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function cheackweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +"°C" ;
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assets/cloud.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "asstes/clear.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "assets/snow.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assets/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "assets/mist.png";
    }
    // document.querySelector(".weather").style.display ="block";
}
searchbtn.addEventListener("click", ()=>{
    cheackweather(searchbox.value);
})
