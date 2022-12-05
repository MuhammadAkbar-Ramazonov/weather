const elCountries = document.querySelector(".hero__today-list--active");
const elCountryTemp = document.querySelector(".country-temp").content;
const elTodayTemp = document.querySelector(".today-temp").content;
const elHeroTitle = document.querySelector(".hero__title");
const elHeroMain = document.querySelector(".hero__weather");
const elToday = document.querySelector(".js-hero__today-list");
const elForm = document.querySelector(".hero-form");
const elInput = elForm.querySelector(".form-input");
const elMap = document.querySelector(".map");



function renderTodaysArr(arr, node){
    node.innerHTML = "";
    
    arr.list.forEach(element => {
        const elTodayClone = elTodayTemp.cloneNode(true);
        
        const elTime = element.dt_txt.split(" ")[1].split("").slice(0, 5);
        
        elTodayClone.querySelector(".today-time").textContent = elTime.join("");
        
        element.weather.forEach(value => {
            
            if (value.id >= 200 && 232 >= value.id) {
                elTodayClone.querySelector(".today-img").src = "./images/thunderstorms.svg";
            }
            if (value.id >= 300 && 531 >= value.id) {
                elTodayClone.querySelector(".today-img").src = "./images/rain.svg";
            }
            else if (value.id >= 600 && 622 >= value.id) {
                elTodayClone.querySelector(".today-img").src = "./images/snow.svg";
            }
            else if (value.id >= 701 && 781 >= value.id) {
                elTodayClone.querySelector(".today-img").src = "./images/cloudy.svg";
            }
            else if (value.id == 800) {
                elTodayClone.querySelector(".today-img").src = "./images/partly-cloudy-day.svg";
            }
            else if (value.id >= 801 && 804 >= value.id) {
                elTodayClone.querySelector(".today-img").src = "./images/cloudy.svg";
            }
        });    
        
        elTodayClone.querySelector(".today-gradus").textContent = Math.floor(element.main.temp);
        
        
        node.appendChild(elTodayClone)
    });
}

function renderArr(arr, node){
    
    const elTempClone = elCountryTemp.cloneNode(true);
    elTempClone.querySelector(".country-title").textContent = arr.name;
    arr.weather.forEach(element => {
        
        if (element.id >= 200 && 232 >= element.id) {
            elTempClone.querySelector(".country-img").src = "./images/thunderstorms.svg";
        }
        if (element.id >= 300 && 531 >= element.id) {
            elTempClone.querySelector(".country-img").src = "./images/rain.svg";
        }
        else if (element.id >= 600 && 622 >= element.id) {
            elTempClone.querySelector(".country-img").src = "./images/snow.svg";
        }
        else if (element.id >= 701 && 781 >= element.id) {
            elTempClone.querySelector(".country-img").src = "./images/cloudy.svg";
        }
        else if (element.id == 800) {
            elTempClone.querySelector(".country-img").src = "./images/partly-cloudy-day.svg";
        }
        else if (element.id >= 801 && 804 >= element.id) {
            elTempClone.querySelector(".country-img").src = "./images/cloudy.svg";
        }
    });    
    
    arr.weather.forEach(element => {
        elTempClone.querySelector(".country-main").textContent = element.main;
    });
    elTempClone.querySelector(".country-deg").textContent = Math.floor(arr.main.temp);
    
    
    elTempClone.querySelector(".country-min-deg").textContent = Math.floor(arr.main.temp_min);
    elTempClone.querySelector(".country-max-deg").textContent = Math.floor(arr.main.temp_max);
    node.appendChild(elTempClone)
}

function renderMoreDatails(arr){


    const elCurrenceDeg = document.querySelector(".currence-deg");
    const elCurrenceSunrice = document.querySelector(".currence-sunrice");
    const elCurrenceSunset = document.querySelector(".currence-sunset");
    const elCurrencePressure = document.querySelector(".currence-pressure");
    const elCurrenceHumidity = document.querySelector(".currence-humidity");
    const elCurrenceWindSped = document.querySelector(".currence-wind-speed");
    const elCurrenceWindDeg = document.querySelector(".currence-wind-degrees");
    const elCurrenceMinDeg = document.querySelector(".currence-min-deg");
    const elCurrenceMaxDeg = document.querySelector(".currence-max-deg");
    const elCurrenceMapLink = document.querySelector(".map-link");
    
    
    elHeroTitle.textContent = arr.name;
    elCurrenceDeg.textContent = Math.floor(arr.main.temp);
    arr.weather.forEach(element => {
        elHeroMain.textContent = element.main;
    });

    
    const sunrise = new Date(arr.sys.sunrise); 
    const sunset = new Date(arr.sys.sunset); 



    elCurrenceSunrice.textContent = sunrise.toLocaleString('en-US');
    elCurrenceSunset.textContent = sunset.toLocaleString('en-US');
    elCurrencePressure.textContent =  arr.main.pressure;
    elCurrenceHumidity.textContent = arr.main.humidity;
    elCurrenceWindSped.textContent = arr.wind.speed;
    elCurrenceWindDeg.textContent = arr.wind.deg;
    elCurrenceMinDeg.textContent = arr.main.temp_min;
    elCurrenceMaxDeg.textContent = arr.main.temp_max;
    elCurrenceMapLink.href = `https://openweathermap.org/weathermap?basemap=map&cities=false&layer=rain&lat=${arr.coord.lat}&lon=${arr.coord.lon}&zoom=10`
    
}

async function getMoreDetailsApi(url){
    const res = await fetch(url);
    
    const data = await res.json()
    
    renderMoreDatails(data);
}

getMoreDetailsApi(`https://api.openweathermap.org/data/2.5/weather?q=tashkent&units=metric&appid=9ce3789c3903ffbb6ca5770519f448e5`)


async function getApi(url){
    const res = await fetch(url);
    
    const data = await res.json()
    
    renderArr(data, elCountries);
}

getApi("https://api.openweathermap.org/data/2.5/weather?q=uzbekistan&units=metric&appid=9ce3789c3903ffbb6ca5770519f448e5")
getApi("https://api.openweathermap.org/data/2.5/weather?q=america&units=metric&appid=9ce3789c3903ffbb6ca5770519f448e5")
getApi("https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&appid=9ce3789c3903ffbb6ca5770519f448e5")
getApi("https://api.openweathermap.org/data/2.5/weather?q=dubai&units=metric&appid=9ce3789c3903ffbb6ca5770519f448e5")
getApi("https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=9ce3789c3903ffbb6ca5770519f448e5")


async function getTodayApi(url){
    const res = await fetch(url);
    
    const data = await res.json()
    
    renderTodaysArr(data, elToday)
    
}

function getMap(inputValue){
    elMap.href = "https://openweathermap.org/weathermap?basemap=map&cities=false&layer=rain&lat=41.2831&lon=69.2043&zoom=10"
}

getMap()

getTodayApi("https://api.openweathermap.org/data/2.5/forecast?q=tashkent&units=metric&appid=9ce3789c3903ffbb6ca5770519f448e5")

elForm.addEventListener("submit", evt=> {
    evt.preventDefault();
    
    getTodayApi(`https://api.openweathermap.org/data/2.5/forecast?q=${elInput.value}&units=metric&appid=9ce3789c3903ffbb6ca5770519f448e5`)
    getMoreDetailsApi(`https://api.openweathermap.org/data/2.5/weather?q=${elInput.value}&units=metric&appid=9ce3789c3903ffbb6ca5770519f448e5`)


})
