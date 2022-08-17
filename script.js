let firstChars = [];
let filteredChar = '';

function init(){
    renderContent();
    renderFilter();
}

function renderContent(){
    let container = document.getElementById('content');
    container.innerHTML = '';
    for (let i = 0; i < bundeslaender.length; i++) {
        const bundesland = bundeslaender[i];
        container.innerHTML += `
        <a href="${bundesland.url}" target="_blank" class="card" id="${i}">
            <h2>${bundesland.name}</h2>
            <span>${bundesland.population.toString().replace('.',',')} Millionen</span>
        </a>
        `
        fillFilterArray(bundesland);
    }
}

function fillFilterArray(bundesland){
    let firstChar = bundesland.name.charAt(0);
    let index = firstChars.indexOf(firstChar);
    if(index == -1){
        firstChars.push(firstChar);
    }
}

function renderFilter(){
    let filterContainer = document.getElementById('filter-container');
    filterContainer.innerHTML = `
        <div class="filter" onclick="renderContent()"><-</div>
    `;
    for (let i = 0; i < firstChars.length; i++) {
        const firstChar = firstChars[i];
        filterContainer.innerHTML +=`
            <div class="filter" onclick="filter('${firstChar}')">${firstChar}</div>
        `
    }
}

function filter(char){
    let container = document.getElementById('content');
    container.innerHTML = '';
    for (let i = 0; i < bundeslaender.length; i++) {
        const bundesland = bundeslaender[i];
        if(bundesland.name.charAt(0) == char){
            container.innerHTML += `
            <a href="${bundesland.url}" target="_blank" class="card" id="${i}">
                <h2>${bundesland.name}</h2>
                <span>${bundesland.population.toString().replace('.',',')} Millionen</span>
            </a>
              `
        }
    }
}


