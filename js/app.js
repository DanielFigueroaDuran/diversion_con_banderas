//------------------------Mode Dark-----------------------------
const mode = document.querySelector("#modo");
const body = document.querySelector("body");
const header = document.querySelector("header");
//const iconn = document.querySelector("img");
//const inpu = document.querySelector("input");
//const select = document.querySelector("select");



// ---------------------------Creating Api Countries ----------------------------
const container = document.querySelector(".container");
const countriesUrl = " https://restcountries.com/v3.1/all/";

const getData = async () => {
  try {
    const response = await fetch(countriesUrl);
    const dataCountries = await response.json();
    
    
    
    dataCountries.forEach((element) => {
      
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
                        <a href="./pages/countries.html?name=${element.name.common}"><button type="button">More</button></a>
                    </div> 
                    
              </div>
                 
        `;
    });
  } catch (error) {
    console.log("Error");
  }
};

getData();
 
//------------------------Mode Dark-----------------------------

mode.addEventListener("click", function(){
  body.classList.toggle("dark");
  header.classList.toggle("dark");
  //inpu.classList.toggle("inp");
  //select.classList.toggle("seleted");
  //iconn.classList.toggle("icon");
});