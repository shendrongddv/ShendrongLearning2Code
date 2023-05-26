let fact = document.getElementById("fact");
let btn = document.getElementById("generate-btn");

let option = {
  method: "GET",
  headers: { "x-api-key": apiKey },
};

let url = "https://api.api-ninjas.com/v1/facts?limit=1";

let generateQuote = () => {
  fetch(url, option)
    .then((response) => response.json())
    .then((data) => {
      fact.innerText = data[0].fact;
    });
};

btn.addEventListener("click", generateQuote);
window.addEventListener("load", generateQuote);
