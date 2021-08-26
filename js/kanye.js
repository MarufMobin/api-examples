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
});