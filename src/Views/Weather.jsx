// import React from 'react';
// import Navbar from '../Partial/Navbar';
// import Footer from '../Partial/Footer';
// const Weather = () => {


//     const cityName = document.getElementById("cityName");
//     const cityData = document.getElementById("city-Name");

//     const submitBtn = document.getElementById('submitButton');

//     const temperature = document.getElementById("temp-real-val");
//     const tempStatus = document.getElementById("temp-status");

//     const dataHide = document.querySelector(".middle-layer");

//     const currDay = document.getElementById("day");
//     console.log(currDay+" day is");
//     const currDate = document.getElementById("date");


//     // date.innerText = Date.date();
//     var currentTime = new Date()
//     var date = currentTime.getDate()
//     var month = currentTime.getMonth();
//     var day = currentTime.getDay();

//     const getDay = () => {
//         const weekDay = new Array(7);
//         weekDay[0] = "Sunday";
//         weekDay[1] = "Monday";
//         weekDay[2] = "Tuesday";
//         weekDay[3] = "Wednesday";
//         weekDay[4] = "Thusday";
//         weekDay[5] = "Friday";
//         weekDay[6] = "Saturday";
//         currDay.innerText = `${weekDay[day]}`
//     }
//     getDay();

//     const getDateAndMonth = () => {
//         var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
//         currDate.innerText = `${date} ${months[month]}`;
//     }
//     getDateAndMonth();


//     const getInfo = async (event) => {
//         event.preventDefault();
//         let cityVal = cityName.value;
//         if (cityVal === "") {
//             cityData.innerText = "Please enter City Name first";
//             dataHide.classList.add("data-hide");
//         }
//         else {
//             try {
//                 // http://api.openweathermap.org/data/2.5/find?q=Pune&units=metric&appid=c547ef67b96d8ef0d336091312129403

//                 let url = `http://api.openweathermap.org/data/2.5/find?q=${cityVal}&units=metric&appid=c547ef67b96d8ef0d336091312129403`;
//                 const response = await fetch(url);
//                 //  response = ReadableStream
//                 const data = await response.json();
//                 // data = object
//                 const arrdata = [data];
//                 // arrData = array of o0bject

//                 cityData.innerText = `${arrdata[0].list[0].name}, ${arrdata[0].list[0].sys.country}`;
//                 temperature.innerText = arrdata[0].list[0].main.temp;
//                 const tempMood = arrdata[0].list[0].weather[0].main;

//                 if (tempMood === "Clear") {
//                     tempStatus.innerHTML = "<i class='fas fa-sun' style = 'color:  #E3CF91;'></i>"
//                 }
//                 else if (tempMood === "Clouds") {
//                     tempStatus.innerHTML = "<i class='fas fa-cloud' style= 'color: #D6D6D6;'></i>"
//                 }
//                 else if (tempMood === "Rainy") {
//                     tempStatus.innerHTML = "<i class='fas fa-cloud-rain' style='color:  #71717A;'></i>"
//                 }
//                 else {
//                     tempStatus.innerHTML = "<i class='fas fa-sun' style= 'color: #726C6F ;'></i>"
//                 }
//                 dataHide.classList.remove("data-hide");

//             }
//             catch {
//                 cityData.innerText = "Please enter a valid City Name";
//                 dataHide.classList.add("data-hide");
//             }
//         }

//     }

//     // submitBtn.addEventListener("click", getInfo);
//     submitBtn.addEventListener("click", getInfo);






//     const clicked = (e) => {
//         e.preventDefault();
//         console.log("button clicked");
//     }

//     return (
//         <>
//             <Navbar />
//             <div className="container-fluid main-header">
//                 <div className="row">
//                     <div className="mid">
//                         <div className="col-md-10 col-12 mx-auto">
//                             <div className="main-content">
//                                 <form className="temp-form">
//                                     <input type="text" id="cityName" placeholder="Enter city name" autocomplete="off" />
//                                     <input type="submit" onClick={clicked} id="submitButton" value="Search" />
//                                     {/* <button type='submit' id='submitButton' value={"Search"} /> */}
//                                 </form>
//                             </div>
//                             <div className="tempInformation">
//                                 <div className="top-layer">
//                                     <p id="day">Sunday</p>
//                                     <p id="date">26 APR</p>
//                                 </div>
//                                 <div className="main-layer">
//                                     <p id="city-Name">Get Output hear</p>
//                                     <div className="middle-layer data-hide">
//                                         <p id="temp"><span id="temp-real-val">0</span><sup>&deg;</sup>C</p>
//                                         <p id="temp-status"><i className="fas fa-cloud"></i></p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />

//         </>
//     )
// }
// export default Weather;





























import React, { useEffect, useState } from 'react';
import Navbar from '../Partial/Navbar';
import Footer from '../Partial/Footer';
const Weather = () => {


    // const cityName = document.getElementById("cityName");
    // const cityData = document.getElementById("city-Name");

    // const submitBtn = document.getElementById('submitButton');

    // const temperature = document.getElementById("temp-real-val");
    // const tempStatus = document.getElementById("temp-status");

    // const dataHide = document.querySelector(".middle-layer");

    // const currDay = document.getElementById("day");

    // const currDate = document.getElementById("date");

    // useEffect(() => {
    //     const currDay = document.getElementById("day");

    //     const currDate = document.getElementById("date");
    // console.log(currDate+ " "+ currDay);

    // },[])

    // // date.innerText = Date.date();
    // var currentTime = new Date()
    // var date = currentTime.getDate()
    // var month = currentTime.getMonth();
    // var day = currentTime.getDay();

    // const getDay = () => {
    //     const weekDay = new Array(7);
    //     weekDay[0] = "Sunday";
    //     weekDay[1] = "Monday";
    //     weekDay[2] = "Tuesday";
    //     weekDay[3] = "Wednesday";
    //     weekDay[4] = "Thusday";
    //     weekDay[5] = "Friday";
    //     weekDay[6] = "Saturday";
    //     currDay.innerText = `${weekDay[day]}`
    // }
    // getDay();

    // const getDateAndMonth = () => {
    //     var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    //     currDate.innerText = `${date} ${months[month]}`;
    // }
    // getDateAndMonth();


    // const getInfo = async (event) => {
    //     event.preventDefault();
    //     let cityVal = cityName.value;
    //     if (cityVal === "") {
    //         cityData.innerText = "Please enter City Name first";
    //         dataHide.classList.add("data-hide");
    //     }
    //     else {
    //         try {
    //             // http://api.openweathermap.org/data/2.5/find?q=Pune&units=metric&appid=c547ef67b96d8ef0d336091312129403

    //             let url = `http://api.openweathermap.org/data/2.5/find?q=${cityVal}&units=metric&appid=c547ef67b96d8ef0d336091312129403`;
    //             const response = await fetch(url);
    //             //  response = ReadableStream
    //             const data = await response.json();
    //             // data = object
    //             const arrdata = [data];
    //             // arrData = array of o0bject

    //             cityData.innerText = `${arrdata[0].list[0].name}, ${arrdata[0].list[0].sys.country}`;
    //             temperature.innerText = arrdata[0].list[0].main.temp;
    //             const tempMood = arrdata[0].list[0].weather[0].main;

    //             if (tempMood === "Clear") {
    //                 tempStatus.innerHTML = "<i class='fas fa-sun' style = 'color:  #E3CF91;'></i>"
    //             }
    //             else if (tempMood === "Clouds") {
    //                 tempStatus.innerHTML = "<i class='fas fa-cloud' style= 'color: #D6D6D6;'></i>"
    //             }
    //             else if (tempMood === "Rainy") {
    //                 tempStatus.innerHTML = "<i class='fas fa-cloud-rain' style='color:  #71717A;'></i>"
    //             }
    //             else {
    //                 tempStatus.innerHTML = "<i class='fas fa-sun' style= 'color: #726C6F ;'></i>"
    //             }
    //             dataHide.classList.remove("data-hide");

    //         }
    //         catch {
    //             cityData.innerText = "Please enter a valid City Name";
    //             dataHide.classList.add("data-hide");
    //         }
    //     }

    // }

    // // submitBtn.addEventListener("click", getInfo);
    // submitBtn.addEventListener("click", getInfo);


    const [city, setcity] = useState("");

    const onFieldChange = (e) => {
        setcity(e.target.value)
    }

    const [output, setOutput] = useState('Get Output hear');
    
    const [temp, setTemp] = useState('0');

    const [date, setDate] = useState('01');
    const [day, setDay] = useState('Sun');
    const [month, setMonth] = useState('Jan')

    useEffect(() => {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const currday = (dayInDig) => {
            if (dayInDig === 1) {
                return "Mon";
            }
            else if (dayInDig === 2) {
                return "Tue";
            }
            else if (dayInDig === 3) {
                return "Wed";
            }
            else if (dayInDig === 4) {
                return "Thurs";
            }
            else if (dayInDig === 5) {
                return "Fri";
            }
            else if (dayInDig === 6) {
                return "Sat";
            }
            else {
                return "Sun";
            }
        }
        var currentTime = new Date();
        var currDate = currentTime.getDate();
        var currDay = currentTime.getDay();
        var currMon = currentTime.getMonth();
        setDate(currDate);
        setDay(currday(currDay));
        setMonth(months[currMon]);
    }, [])


    const dataHide = document.querySelector(".middle-layer");

    const tempStatus = document.getElementById("temp-status");

    const getInfo = async (event) => {
        // event.preventDefault();
        let cityVal = city;
        if (cityVal === "") {
            setOutput("Please enter City Name first");
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
                console.log(arrdata);
                console.log(arrdata[0].list[0].main.temp);
                setOutput(`${arrdata[0].list[0].name}, ${arrdata[0].list[0].sys.country}`);
                setTemp(arrdata[0].list[0].main.temp);
                // cityData.innerText = `${arrdata[0].list[0].name}, ${arrdata[0].list[0].sys.country}`;
                // temperature.innerText = arrdata[0].list[0].main.temp;

                const tempMood = arrdata[0].list[0].weather[0].main;

                if (tempMood === "Clear") {
                    tempStatus.innerHTML = "<i class='fas fa-sun' style = 'color:  #E3CF91;'></i>"
                }
            //     else if (tempMood === "Clouds") {
            //         tempStatus.innerHTML = "<i class='fas fa-cloud' style= 'color: #D6D6D6;'></i>"
            //     }
            //     else if (tempMood === "Rainy") {
            //         tempStatus.innerHTML = "<i class='fas fa-cloud-rain' style='color:  #71717A;'></i>"
            //     }
            //     else {
            //         tempStatus.innerHTML = "<i class='fas fa-sun' style= 'color: #726C6F ;'></i>"
            //     }
                dataHide.classList.remove("data-hide");

            }
            catch {
                setOutput("Please enter a valid City Name")
                dataHide.classList.add("data-hide");
            }
        }

    }



    const clicked = (e) => {
        e.preventDefault();
        getInfo(city);
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid main-header">
                <div className="row">
                    <div className="mid">
                        <div className="col-md-10 col-12 mx-auto">
                            <div className="main-content">
                                <form className="temp-form">
                                    {/* <input type="text" id="cityName" placeholder="Enter city name" autoComplete="off" /> */}
                                    <input type="text" placeholder="Enter Name" id="name"
                                        onChange={(e) => onFieldChange(e)}
                                        value={city}
                                    />
                                    <input type="submit" onClick={clicked} id="submitButton" value="Search" />
                                    {/* <button type='submit' id='submitButton' value={"Search"} /> */}
                                </form>
                            </div>
                            <div className="tempInformation">
                                <div className="top-layer">
                                    <p id="day">{day}</p>
                                    <p id="date">{date}/{month}</p>
                                </div>
                                <div className="main-layer">
                                    <p id="city-Name">{output}</p>
                                    <div className="middle-layer data-hide">
                                        <p id="temp"><span id="temp-real-val">{temp}</span><sup>&deg;</sup>C</p>
                                        <p id="temp-status"><i className="fas fa-cloud"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}
export default Weather;