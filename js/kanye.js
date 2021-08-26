/* 
const loadData = () => {
    fetch('https://api.kanye.rest/')
    .then( res => res.json()).then( data => displayData(data))
}
const displayData = data =>{
    const displayQuote = document.getElementById('quoto');
    displayQuote.innerText = data.quote;
}

document.getElementById('quoto-btn').addEventListener('click', function(){
    loadData()
}); */

/****************** Another Way**********************/

const loadData = () => {
    fetch('https://api.kanye.rest/').then(res => res.json()).then( data => displayData(data))
}

const displayData = data =>{
    const quoto = document.getElementById('quoto');
    quoto.innerText = data.quote;
}

const changePage = () =>{
    location.href = 'buddy.html';
}