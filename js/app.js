// ---------------------------Creating Api Countries ----------------------------

const section = document.querySelector(".container");

const countriesUrl = " https://restcountries.com/v3.1/all";

const getData = async () => {
  try {
    const response = await fetch(countriesUrl);
    const dataCountries = await response.json();
    //console.log(dataCountries[1].flags);

    const promises = dataCountries.map(async (element) => {
      const resCountries = await fetch(element.url);
      const countriesData = await resCountries.json();
      console.log(countriesData);
      // return;
    });

    //const result = await PromiseAll(promises);
  } catch (error) {
    console.log("Error");
  }
};

getData();
