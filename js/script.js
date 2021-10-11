// Fonction appelée lors du click du bouton
function start(){
  // Création de l'objet apiWeather
  // const city = "";
  const city = document.getElementById("city-input").value;
  console.log(city);
  const apiWeather = new API_WEATHER(city);
  // créer un objet de type API_Weather que l'on nomme apiweather
  // Appel de la fonction fetchTodayForecast


  apiWeather.fetchTodayForecast().then(function(response) {
      // Récupère la donnée d'une API
      console.log(response);
      const data = response.data;

      // On récupère l'information principal
      
      const description = data.list[0].weather[0].description;
      const main = data.list[0].weather[0].main;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      const description1 = data.list[1].weather[0].description;
      const main1 = data.list[1].weather[0].main;
      const temp1 = data.list[1].temp.day;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      const description2 = data.list[2].weather[0].description;
      const main2 = data.list[2].weather[0].main;
      const temp2 = data.list[2].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      const description3 = data.list[3].weather[0].description;
      const main3 = data.list[3].weather[0].main;
      const temp3 = data.list[3].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);
    
      console.log(description);
      console.log(main);
      console.log(temp);
      console.log(icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
      document.getElementById('tomorow1-forecast-main').innerHTML = main1;
      document.getElementById('tomorow1-forecast-more-info').innerHTML = description1;
      document.getElementById('icon1-weather-container').innerHTML = icon1;
      document.getElementById('tomorow1-forecast-temp').innerHTML = `${temp1}°C`;
      
      document.getElementById('tomorow2-forecast-main').innerHTML = main2;
      document.getElementById('tomorow2-forecast-more-info').innerHTML = description2;
      document.getElementById('icon2-weather-container').innerHTML = icon2;
      document.getElementById('tomorow2-forecast-temp').innerHTML = `${temp2}°C`;

      document.getElementById('tomorow3-forecast-main').innerHTML = main3;
      document.getElementById('tomorow3-forecast-more-info').innerHTML = description3;
      document.getElementById('icon3-weather-container').innerHTML = icon3;
      document.getElementById('tomorow3-forecast-temp').innerHTML = `${temp3}°C`;
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

/*function getThreeDayForecast(){

  const city = document.getElementById("city-input").value;
  console.log(city);
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast
}*/
