const cityName = document.getElementById("cityName");
const cityData = document.getElementById("city-Name");

const submitBtn = document.getElementById('submitButton');

const temperature = document.getElementById("temp-real-val");
const tempStatus = document.getElementById("temp-status");

const dataHide = document.querySelector(".middle-layer");

const currDay = document.getElementById("day");
const currDate = document.getElementById("date");


// date.innerText = Date.date();
var currentTime = new Date()
var date = currentTime.getDate()
var month = currentTime.getMonth() ;
var day = currentTime.getDay();

const getDay = () => {
    const weekDay = new Array(7);
    weekDay[0] = "Sunday";
    weekDay[1] = "Monday";
    weekDay[2] = "Tuesday";
    weekDay[3] = "Wednesday";
    weekDay[4] = "Thusday";
    weekDay[5] = "Friday";
    weekDay[6] = "Saturday";
    currDay.innerText = `${weekDay[day]}`
}
getDay();

const getDateAndMonth = () =>{
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    currDate.innerText = `${date} ${months[month]}`;
}
getDateAndMonth();


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal == "") {
        cityData.innerText = "Please enter City Name first";
        dataHide.classList.add("data-hide");
    }
    else {
        try {
            // http://api.openweathermap.org/data/2.5/find?q=Pune&units=metric&appid=c547ef67b96d8ef0d336091312129403

            let url = `http://api.openweathermap.org/data/2.5/find?q=${cityVal}&units=metric&appid=c547ef67b96d8ef0d336091312129403`;
            const response = await fetch(url);
            //  response = ReadableStream
            const data = await response.json();
            // data = object
            const arrdata = [data];
            // arrData = array of o0bject

            cityData.innerText = `${arrdata[0].list[0].name}, ${arrdata[0].list[0].sys.country}`;
            temperature.innerText = arrdata[0].list[0].main.temp;
            const tempMood = arrdata[0].list[0].weather[0].main;

            if (tempMood == "Clear") {
                tempStatus.innerHTML = "<i class='fas fa-sun' style = 'color:  #E3CF91;'></i>"
            }
            else if (tempMood == "Clouds") {
                tempStatus.innerHTML = "<i class='fas fa-cloud' style= 'color: #D6D6D6;'></i>"
            }
            else if (tempMood == "Rainy") {
                tempStatus.innerHTML = "<i class='fas fa-cloud-rain' style='color:  #71717A;'></i>"
            }
            else {
                tempStatus.innerHTML = "<i class='fas fa-sun' style= 'color: #726C6F ;'></i>"
            }
            dataHide.classList.remove("data-hide");

        }
        catch {
            cityData.innerText = "Please enter a valid City Name";
            dataHide.classList.add("data-hide");
        }
    }

}

// submitBtn.addEventListener("click", getInfo);
submitBtn.addEventListener("click", getInfo);