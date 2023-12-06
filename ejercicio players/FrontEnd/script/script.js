const apiUrl = "http://localhost:3000/players";

async function getApi () {
    const response = await fetch(apiUrl);
    const result = await response.json();
    const playersData = result;
    console.log(result);
    generatePlayers(result);
}

getApi();


function generatePlayers(playersData) {
    playersData.forEach(player => {
        const players = {
        nombre: player.nombre,
        edad: player.edad,
        nacionalidad: player.nacionalidad,
        posicion: player.posicion,
        retirado: player.retirado,
        liga: player.liga
        }
        // console.log(playersData);

        paintPlayer(players);
    });
    
}

const playerInfo$$ = document.querySelector('.players-info');

function paintPlayer(players) {
    const myDiv$$ = document.createElement('div');
    myDiv$$.classList.add('player');

    const myList$$ = document.createElement('ul');
    myList$$.classList.add('listPlayer');
    
    const nameItem$$ = document.createElement('p');
    nameItem$$.textContent = players.nombre;
    myDiv$$.appendChild(nameItem$$);

    const ageItem$$ = document.createElement('li');
    ageItem$$.textContent = `Edad: ${players.edad}`;
    myList$$.appendChild(ageItem$$);


    const countryItem$$ = document.createElement('li');
    countryItem$$.textContent = `País: ${players.nacionalidad}`;
    myList$$.appendChild(countryItem$$);


    const positionItem$$ = document.createElement('li');
    positionItem$$.textContent = `Posición: ${players.posicion}`;
    myList$$.appendChild(positionItem$$);


    const activeItem$$ = document.createElement('li');
    if(players.retirado === false) {
        activeItem$$.textContent = "Activo: Sí";
    } else {
        activeItem$$.textContent = "Activo: No"; 
    }
    myList$$.appendChild(activeItem$$);


    const leagueItem$$ = document.createElement('li');
    leagueItem$$.textContent = `Liga: ${players.liga}`;
    myList$$.appendChild(leagueItem$$);


    myDiv$$.appendChild(myList$$);
    playerInfo$$.appendChild(myDiv$$);
}