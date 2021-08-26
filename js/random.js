const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then( res => res.json())
    .then( data => displayBuddies(data))
}
loadBuddies()
const displayBuddies = data =>{
    const buddies = data.results;
    const buddieContainer = document.getElementById('buddies-container');
    for( const buddie of buddies){
    //    console.log(buddie.name.title)
    const p = document.createElement('p');
    p.innerText =  `Name : ${buddie.name.title} ${buddie.name.first} ${buddie.name.last} , Email: ${buddie.email}`;
    buddieContainer.appendChild(p);
    }
}