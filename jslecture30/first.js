

const button = document.getElementById('button');

function updateTem(data){
    const result = document.getElementById('result');
    result.innerHTML = `Today's temperature: ${data.current.temp_c}°C, Day is: ${data.current.condition.text}, Humidity: ${data.current.humidity}%,\n Wind: ${data.current.wind_kph}kph`;
}

button.addEventListener('click',()=>{
    const location = document.getElementById('location').value;

    const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=b3612a2618174a2aa63183220262302&q=${location}&aqi=yes`)

    promises.then((response)=>{
        return response.json();
    }).then((data)=>updateTem(data));

})