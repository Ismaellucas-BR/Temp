const submit = document.querySelector(".submit");
const nameCity = document.querySelector(".nameCity");
const minTemp = document.querySelector(".minTemp");
const maxTemp = document.querySelector(".maxTemp");
const fellsLLike = document.querySelector(".fellsLLike");
const restText = document.querySelector(".restText");
const wind = document.querySelector(".wind");
const changeText = document.querySelector(".changeText");
const textTemp = document.querySelector(".textTemp");

function ShowTemp() {
  const apikey = "ada4f33b42ea4dd995bf2b3aa9b07f2e";
  const cityInput = document.querySelector("#city-input");
  const imageChange = document.querySelector(".imageChange");
  const contentTemp = document.querySelector(".contentTemp");
  const city = cityInput.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === 404) {
        imageChange.src = "img/erro-404.png";
        textTemp.style.display = "none";
        restText.style.display = "none";
        changeText.style.display = "none";
      }
      switch (json.weather[0].main) {
        case "Clear":
          imageChange.src = "img/sol.png";
          changeText.innerHTML = `A temperatura minima hoje é ${parseInt(
            json.main.temp_min
          )}ºC e a maxima é ${Math.round(
            json.main.temp_max
          )}ºC, com sensação termica de ${Math.round(
            json.main.feels_like
          )} ºC e ventos de ${Math.round(json.wind.speed)} km/h.`;
          restText.innerHTML = "Hoje é dia de muito calor ☀️⛱️";
          break;

        case "Snow":
          imageChange.src = "img/floco-de-neve.png";
          changeText.innerHTML = `A temperatura minima hoje é ${Math.round(
            json.main.temp_min
          )}ºC e a maxima é ${Math.round(
            json.main.temp_max
          )}ºC, com sensação termica de ${Math.round(
            json.main.feels_like
          )} ºC e ventos de ${Math.round(json.wind.speed)} km/h.`;
          restText.innerHTML = "Hoje é dia de neve ❄️☃️";
          break;

        case "Rain":
          imageChange.src = "img/trovoada.png";
          changeText.innerHTML = `A temperatura minima hoje é ${Math.round(
            json.main.temp_min
          )}ºC e a maxima é ${Math.round(
            json.main.temp_max
          )}ºC, com sensação termica de ${Math.round(
            json.main.feels_like
          )} ºC e ventos de ${Math.round(json.wind.speed)} km/h.`;
          restText.innerHTML = "É bom pegar um guarda-chuva ⛈️☔";
          break;
        case "Clouds":
          imageChange.src = "img/dia-nublado.png";
          changeText.innerHTML = `A temperatura minima hoje é ${Math.round(
            json.main.temp_min
          )}ºC e a maxima é ${Math.round(
            json.main.temp_max
          )}ºC, com sensação termica de ${Math.round(
            json.main.feels_like
          )} ºC e ventos de ${Math.round(json.wind.speed)} km/h.`;
          restText.innerHTML = "Bastante nuvens hoje. ☁️";
          break;
        case "Mist":
          imageChange.src = "img/nevoa.png";
          changeText.innerHTML = `A temperatura minima hoje é ${Math.round(
            json.main.temp_min
          )}ºC e a maxima é ${Math.round(
            json.main.temp_max
          )}ºC, com sensação termica de ${Math.round(
            json.main.feels_like
          )} ºC e ventos de ${Math.round(json.wind.speed)} km/h.`;
          restText.innerHTML = "Cuidado na estrada, pouca visibilidade. 🌫️";
          break;
      }
      nameCity.innerHTML = json.name;
      minTemp.innerHTML = `${Math.round(json.main.temp_min)}ºC`;
      maxTemp.innerHTML = ` ${Math.round(json.main.temp_max)}ºC`;
      fellsLLike.innerHTML = ` <img src="img/temperaturas.png" alt="icone de sensação termica"> ${Math.round(
        json.main.feels_like
      )} ºC`;
      wind.innerHTML = ` <img src="img/ventoso.png" alt="icone de vento"> ${Math.round(
        json.wind.speed
      )} km/h`;
      contentTemp.style.display = "block";
      contentTemp.style.transition = "1s ease-in-out";
      wind.classList.add("fadeIn");
      fellsLLike.classList.add("fadeIn");
    });
}
submit.addEventListener("click", function () {
  ShowTemp();
});
document.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    ShowTemp();
  }
});
