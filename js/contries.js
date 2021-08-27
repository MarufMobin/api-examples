const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then( rest => rest.json())
    .then( data => displayCountries(data))
};

loadCountries();
/* 
const displayCountries = countries =>{
    // for( const countrie of countries){
    //     console.log(countrie.name)
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach( countries => {
        // console.log(countries.name)

        const div = document.createElement('div');
        div.classList.add('country');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        p.innerText = countries.capital;
        h2.innerText = countries.name;

        div.appendChild(h2)
        div.appendChild(p)

        countriesDiv.appendChild(div)
        
    })
} */


const displayCountries = data => {

    const countryContainer = document.getElementById('countries');

    data.forEach( data => {

       const createDiv = document.createElement('div');
       createDiv.classList.add('country')

       const makeAdiv = `
        <h2> ${data.name} </h2>
        <p> ${ data.capital}</p>
        <button class="country-detail" onclick="countryDetails('${data.name}')">Country Details</button>
       `
       createDiv.innerHTML = makeAdiv
        countryContainer.appendChild(createDiv)      
    })
};



const countryDetails = name =>{
    // console.log(name)
   const url =`https://restcountries.eu/rest/v2/name/${name}`
   fetch(url).then( res => res.json()).then( data => showCountryDetails(data))
}


const showCountryDetails = data =>{

    const showData = document.getElementById('countryDetails');
  
    data.forEach( data => {
        //  console.log(data)
        const newElement = document.createElement('div');
        newElement.classList.add('country-details')
        newElement.innerHTML = `
            <img  src="${data.flag}" class="img">
            <div>
                <h3 class="name">${data.name}</h3>
                <p class="pepole">${data.population}</p>
            </div>
        `
        showData.appendChild(newElement)

    })    
}