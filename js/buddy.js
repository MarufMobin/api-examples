// 
// buddy-container


const displayBuddy = () =>{
    fetch('https://randomuser.me/api/?results=1')
    .then( res => res.json()).then(data => desplayUiBuddy(data))
}

const desplayUiBuddy = values => {
    const buddysContainer = document.getElementById('buddy-container');
    const buddysName = document.getElementById('name');
    //  const innerImg = document.getElementById('autoImg');
    const buddyslocation = document.getElementById('location');

    const buddys = values.results;
    for( const buddy of buddys ){
        // const buddyEmail = buddy.email;
        // const buddyTitle = buddy.name;
        // const img = document.createElement('img');
        const h5 = document.createElement('h5');
        const p = document.createElement('p');
        const pSecond = document.createElement('p');

        p.innerText = `Email: ${buddy.email}`;
        h5.innerText = `Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;
        pSecond.innerText = `Location : ${buddy.location.city}`
        // innerImg.setAttribute.src = buddy.picture.large;
        document.getElementById('autoImg').src = buddy.picture.large;
        buddysContainer.appendChild(p);
        buddysName.appendChild(h5);
        buddyslocation.appendChild(pSecond)



    }
}

displayBuddy()