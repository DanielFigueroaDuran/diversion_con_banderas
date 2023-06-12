const container = document.querySelector(".container");

const parameters = window.location.search;
const newParam = new URLSearchParams(parameters);
const nameCountry = newParam.get("name");

const countriesUrl = `https://restcountries.com/v3.1/name/${nameCountry}`;

const getData = async () => {
  try {
    const response = await fetch(countriesUrl);
    const dataCountries = await response.json();
       
    dataCountries.forEach((element,i) => {
      const currencies = Object.keys(element.currencies);
      const languages = Object.values(element.languages);

      console.log(currencies);
      container.innerHTML += `
         <div class="card">
                  <img class="bandera" src="${element.flags.png}" alt="" />
                  <article>                                          
                      <p>${element.name.common}</p>
                      <p>Nombre en idioma nativo: ${languages}</p>
                      <p>Población: ${element.population}</p>
                      <p>Regíon: ${element.region}</p>
                      <p>Subregión: ${element.subregion}</p>
                      <p>Capital:  ${element.capital}</p>
                      <p>Monedas: ${currencies}</p>
                      <p>Idiomas: ${languages}</p>
                      <p>Países con los que hace frontera: ${element.borders}</p>
                  </article>
                                       
              </div>
      `;
    });
  } catch (error) {
    console.log(`Error`);
  }
};

getData();
