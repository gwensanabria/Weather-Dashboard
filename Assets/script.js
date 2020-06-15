$(document).ready(function () {
  let mo = moment()
  let currentDate = mo.format("dddd, MMMM Do YYYY")
  // console.log('Current Date: ', currentDate)
// })

const api = {
    key: "4ca8edd41a241b901aa10ddc3d467e69",
    baseurl: "https://api.openweathermap.org/data/2.5/",
  };
  
  const searchBox = document.querySelector(".search-box");
  searchBox.addEventListener(
    "keypress",
    setQuery
  );
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchBox.value);
      // console.log(searchBox.value);
    }
  }
  
  function getResults(query) {
    fetch(`${api.baseurl}forecast?q=${query}&units=imperial&appid=${api.key}`)
      .then((weather) => {
        return weather.json();
      })
      .then(displayResults);
  }
  
  function displayResults(weather) {
    // console.log(weather);
    // let city = document.querySelector(".location .city");
    // city.textContent = `${weather.city.name}, ${weather.city.country}`;
   
    $(".city").text(`${weather.city.name}, ${weather.city.country}`)
    console.log(`${weather.city.name}`)

    // let date = document.querySelector(".location .date");
    // date.textContent = currentDate;
    $(".date").text(`${currentDate}`)
    
    // let temp = document.querySelector('.current .temp')
    // temp.textContent = `${weather.main[0].temp}` // list[0].main.temp, weather.main.temp, list[1].temp
    $(".temp").text(`${weather.list[0].weather[0].main}`)
    console.log(weather.list[0].weather[0].main)
  
    // let weatherEl = document.querySelector('.current .weather')
    // weatherEl.textContent = `${weather.weather[0].main}` // list[0].weather.main, list.weather.main, weather.main, weather.weather[0].main
    $(".weather").text(`${weather.weather.main}`)
  
    // let windSpeed = document.querySelector('.current .windSpeed')
    // windSpeed.textContent = `${weather.wind[0].speed}`  // wind.speed, weather.wind.speed, list.wind.speed, weather[0].speed, list[4].speed
    $(".windSpeed").text(`${weather.wind.speed}`)

    // let humidity = document.querySelector('.current .humidity')
    // humidity.textContent = `${weather.main.humidity}`  // list[1].humidity, weather.humidity, list.weather.humidity
    $(".humidity").text(`${weather.main.humidity}`)
  }
  
  // function dateBuilder(d) {
  //   let months = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];
  //   let days = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];
  
  //   let day = days[d.getDay()]
  //   let date = d.getDay()
  //   let month = months[d.getMonth()]
  //   let year = d.getFullYear()
  
  //   return `${day} ${date} ${month} ${year}`
  // }

})