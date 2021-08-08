let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let locationTimezone = document.querySelector('.locationTimezone');
const temperatureButton = document.querySelector('.temperature');
let tempSign = document.querySelector('.tempSign')
let weatherIcon = document.getElementById('weatherIcon')
let retryButton = document.getElementById('activateButton')

retryButton.addEventListener('click', getTemperature)

document.addEventListener("DOMContentLoaded", getTemperature)

function changeButtonStyle(){
    weatherIcon.remove()
    retryButton.style.backgroundColor='transparent'
    retryButton.style.border='none'
    retryButton.style.color='black'
    retryButton.style.cursor='default'
}

function getTemperature(){
    changeButtonStyle();

    if(!navigator.geolocation){
        alert('please enable location access')
    }else{
        // alert('This app require location access to work')
        navigator.geolocation.getCurrentPosition(position => {
            let long = position.coords.longitude;
            let lat = position.coords.latitude;

            let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2f018cbd9ad2c9d1b9024132bad14125`;

            fetch(api)
              .then(res => {
                  if (res.ok){
                  console.log('good')
                  }
                  else{
                      console.log('not good')
                  }
                  return res.json()
              })
              .then(data =>{
                  console.log(data)

                //   declare it here so the condition of if can access it later
                  let KToF = Math.floor((data.main.temp - 273.15) * 9/5 + 32)
                  let FToC = Math.floor((KToF - 32) * 5/9)

                  temp.textContent = KToF
                  desc.textContent = data.weather[0].main
                  console.log(desc)
                  locationTimezone.textContent = data.name

                  temperatureButton.addEventListener('click', ()=> {
                    if(tempSign.textContent === 'F'){
                        temp.textContent = FToC
                        tempSign.textContent = 'C'
                    }
                    else {
                        tempSign.textContent = 'F'
                        temp.textContent = KToF;
                    }
                  })
                  let icon = document.querySelector('.icon')
                  console.log(data.weather[0].icon)
                  switch(data.weather[0].icon){
                    case '01d':
                        icon.src='http://openweathermap.org/img/wn/01d@2x.png';
                        break;

                    case '01n':
                        icon.src='http://openweathermap.org/img/wn/01n@2x.png';
                        break;

                    case '02d':
                        icon.src='http://openweathermap.org/img/wn/02d@2x.png';
                        break;

                    case '02n':
                        icon.src='http://openweathermap.org/img/wn/02n@2x.png';
                        break;

                    case '03d':
                        icon.src='http://openweathermap.org/img/wn/03d@2x.png';
                        break;

                    case '03n':
                        icon.src='http://openweathermap.org/img/wn/03n@2x.png';
                        break;

                    case '04d':
                        icon.src='http://openweathermap.org/img/wn/04d@2x.png';
                        break;

                    case '04n':
                        icon.src='http://openweathermap.org/img/wn/04n@2x.png';
                        break;

                    case '09d':
                        icon.src='http://openweathermap.org/img/wn/09d@2x.png';
                        break;

                    case '09n':
                        icon.src='http://openweathermap.org/img/wn/09n@2x.png';
                        break;

                    case '10d':
                        icon.src='http://openweathermap.org/img/wn/10d@2x.png';
                        break;

                    case '10n':
                        icon.src='http://openweathermap.org/img/wn/10n@2x.png';
                        break;

                    case '11d':
                        icon.src='http://openweathermap.org/img/wn/11d@2x.png';
                        break;

                    case '11n':
                        icon.src='http://openweathermap.org/img/wn/11n@2x.png';
                        break;

                    case '13d':
                        icon.src='http://openweathermap.org/img/wn/13d@2x.png';
                        break;

                    case '13n':
                        icon.src='http://openweathermap.org/img/wn/13n@2x.png';
                        break;

                    case '50d':
                        icon.src='http://openweathermap.org/img/wn/50d@2x.png';
                        break;

                    case '50n':
                        icon.src='http://openweathermap.org/img/wn/50n@2x.png';
                        break;

                  }
              })
        });

    }
}

