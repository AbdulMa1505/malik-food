// waether app
const apiKey ="422ee326f33a81054ea3d7189e1bf69f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox =document.querySelector(".search input");
const searchbtn =document.querySelector(".search button");
const WeatherIcon=document.querySelector(".weather-icon");
async function CheckWeather(city)
{
    const response =await fetch(apiUrl+city +`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data =await response.json();

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%" + " Humidity";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h" +" Speed";
      
        if(data.weather[0].main=="Clouds"){
            WeatherIcon.src="Assets/cloud.png";
            }
            else if(data.weather[0].main=="Clear"){
                WeatherIcon.src="Assets/clear.png";
                }
            else if(data.weather[0].main=="Rain"){
                WeatherIcon.src="Assets/rain.png";
                }
            else if(data.weather[0].main=="Drizzle"){
                WeatherIcon.src="Assets/drizzle.png";
                }
            else if(data.weather[0].main=="Snow"){
                WeatherIcon.src="Assets/snow.png";
                }
            document.querySelector(".weather").style.display="block ";
            document.querySelector(".error").style.display="none";
        

    }
    // console.log(data);
   

}
searchbtn.addEventListener("click",()=>{
    CheckWeather(searchbox.value); 
})
