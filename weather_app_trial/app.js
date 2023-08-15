const days = {

    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday",
    "0": "Sunday"

}

const months = {

    "0": "January",
    "1": "February",
    "2": "March",
    "3": "April",
    "4": "May",
    "5": "June",
    "6": "July",
    "7": "August",
    "8": "September",
    "9": "October",
    "10": "November",
    "11": "Deember"

}

const form=document.querySelector('form');
const inp=document.querySelector('input');
const namedisplay = document.querySelector('h3');
const datedisplay = document.querySelector('h2');
const displaytemp = document.querySelector('h1');
const minmaxdisplay = document.querySelectorAll('h3')[1];
const weatherdes = document.querySelectorAll('h2')[1];
const windspeeddisplay = document.querySelectorAll('h3')[2];

function getweather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ddaf1f88b21793f0f28aae1b2ae57901`)
        .then((res) => {

            return res.json(); //take whole data properly

        }).then((dataobj) => {
            console.log(dataobj);
            namedisplay.innerText = dataobj.name; //use 1
            //to get current date using browsers date object
            let s = new Date;
            let day = days[s.getDay()];
            let date = s.getDate();
            let month = months[s.getMonth()];
            let year = s.getFullYear();
            datedisplay.innerText = `${date} ${month} (${day}), ${year}`;
            displaytemp.innerText = dataobj.main.temp + " \xB0C"; //use 2 //dergee symbol
            minmaxdisplay.innerText = dataobj.main.temp_min + " \xB0C(min)/ " + dataobj.main.temp_max + " \xB0C(max)"; //use 3
            weatherdes.innerText = dataobj.weather[0].description;
            windspeeddisplay.innerText = dataobj.wind.speed + " m/s";

        })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const city=inp.value;
    getweather(city);
})