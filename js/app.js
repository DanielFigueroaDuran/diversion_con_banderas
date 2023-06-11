// ---------------------------Creating Api Countries ----------------------------

const container = document.querySelector(".container");

const countriesUrl = " https://restcountries.com/v3.1/all/";

const getData = async () => {
  try {
    const response = await fetch(countriesUrl);
    const dataCountries = await response.json();
    //console.log(dataCountries);
    dataCountries.forEach((element) => {
      //console.log(element.flags.png);
      //console.log(element);
      container.innerHTML += ` 
      
              <div class="card">
                  <img class="bandera" src="${element.flags.png}" alt="" />
                  <article>
                                          
                      <p>${element.name.common}</p>
                      <p>Población: ${element.population}</p>
                      <p>Regíon: ${element.region}</p>
                      <p>Capital: ${element.capital}</p>
                  </article>
                    <div class="btn">
                        <a href="./pages/countries.html?name=${element.name.common}"><button type="button">Más</button></a>
                    </div> 
                    
              </div>
                 
        `;
    });
  } catch (error) {
    console.log("Error");
  }
};

getData();
