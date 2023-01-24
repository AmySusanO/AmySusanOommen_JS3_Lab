const api={
    key:"7e3f21edee540e6110af347b55eb1ab2",
    base:"https://api.openweathermap.org/data/2.5/"
}
//via dom get searvh box

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress',setQuery);

function setQuery(evt){
    if(evt.keyCode==13){
       
        getResults(searchBox.value);
    }
}

function getResults(query){

    const url = `${api.base}weather?q=${query}&units=metrics&appid=${api.key}`;
    console.log(url);

    fetch(url).then(waether=>{
        return waether.json();
    }).then(response=>{
        displayResults(response);
    })
 
///fetch(url).then --> make api call get actual response
//displayresultd
}

function displayResults(weather){
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let d = new Date();
    dateBuilder(d);

    let temperature = document.querySelector('.current .temp');
    temperature.innerHTML = `${weather.main.temp} <sup>o</sup>C`;

    let weathr = document.querySelector('.current .weather');
    weathr.innerText = `${weather.weather[0].main}`;

    let minMax = document.querySelector('.current .hi-low');
    minMax.innerHTML = `${weather.main.temp_min}<sup>o</sup>C / ${weather.main.temp_max}<sup>o</sup>C`

}


function dateBuilder(d){

    let date = document.querySelector('.location .date');
    
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];

    date.innerText = `${day} ${d.getDate()} ${month} ${d.getFullYear()}`;
}