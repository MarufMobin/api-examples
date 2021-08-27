const searchButton = () => {
    const searchField =  document.getElementById('input-field');
    const searchText = searchField.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then( res => res.json())
    .then( result => displaySearchResult(result.meals))
    searchField.value = '';
 }
 
 // searchButton()
 
 const displaySearchResult = meals => {
 
     const preloader = document.getElementById('preloader');
     preloader.style.display = 'none';
     
     const searchContainer = document.getElementById('search-container');
     searchContainer.textContent = '';
 
     meals.forEach( meal => {
 
         const div =  document.createElement('div');
         div.classList.add('col');
         div.innerHTML =`
         <div class="card h-100" style="cursor: pointer;" onclick="loadMoreDetails('${meal.idMeal}')">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${meal.strMeal}</h5>
                 <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
             </div>
         </div>
         `;
         searchContainer.appendChild(div);
 
     })
 };
 
 
 const loadMoreDetails = id => {
     
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
     fetch(url)
     .then( res => res.json())
     .then( data => displayMoreDetails(data.meals[0]))    
 }
 
 const displayMoreDetails = ( data ) =>{
 // console.log()
     // const imgUrl = data
     const detailsContainer = document.getElementById('details-container');
     detailsContainer.textContent = '';
 
     const div = document.createElement('div');
     div.textContent = '';
     div.innerHTML = `
         <div class="col-md-6 mx-auto shadow-lg p-3 mb-5 rounded">
             <div class="card text-white">
                 <img src="${data.strMealThumb}" class="card-img" alt="...">
                 <div class="card-img-overlay">
                     <h5 class="card-title fw-bold">${data.strMeal}</h5>
                     <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <a href="${data.strYoutube}" class="href="#" style="text-decoration: none; font-weight: 700;" target="_blank" >If You want see Our Channel</a>
                 </div>
             </div>
         </div>
     `;
 
     detailsContainer.appendChild(div)
 
 }
 