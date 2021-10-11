//API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
//const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";

const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";


class API_WEATHER{
  constructor(city){
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city === ""){
      city = "paris";
    }
    this.city = city;
  }

  // Faire la requete à l'API openweathermap

  // Retourne une promise
  fetchTodayForecast(){
    return axios
    .get(`${API_URL}?q=${this.city}&units=metric&cnt=4&appid=${API_KEY}`, {
      crossdomain: true
      // API_URL --> adresse à laquelle on envoie la requête
      // Clé API_KEY --> passe droit pour demander des infos à la page web (API c'est une appli en ligne)
      // ?--> a partir du point d'interrogation , tu definis des variables qui seront lu par le PHP
      // q--> détient la ville 
    })
  }
  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }
}
