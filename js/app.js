// ---------------------------Creating Api Countries ----------------------------

const container = document.querySelector(".container");

const countriesUrl = " https://restcountries.com/v3.1/all/";

const getData = async () => {
  try {
    const response = await fetch(countriesUrl);
    const dataCountries = await response.json();
    console.log(dataCountries);
    dataCountries.forEach((element) => {
      //console.log(element.flags.png);
      container.innerHTML += ` 
      
              <div class="card">
                  <img class="bandera" src="${element.flags.png}" alt="" />
                  <article>
                      <p>${element.name.common}</p>
                      <p>Población: ${element.population}</p>
                      <p>Regíon: ${element.continents}</p>
                      <p>Capital: ${element.capital}</p>
                  </article>
                 
              </div>
        `;
    });
  } catch (error) {
    console.log("Error");
  }
};

getData();
