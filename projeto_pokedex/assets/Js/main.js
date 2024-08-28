

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById("loadMoreButton");
const GeracaoButton = document.getElementById("GeracaoButton");
const popupMenu = document.getElementById('popupMenu');

    let maxRecords = 0;
    let limit = 0;
    let offset = 0;
    
    OriginalEstado = 1;
    estado = 0;
    filtragemPokemon()
    
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <button class = "pop-upButton"> 
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>   
            </li>
        `).join('');
        
        pokemonList.innerHTML += newHtml;
    });
}

function filtragemPokemon() {
    // Limpa a lista atual antes de aplicar os novos filtros
    pokemonList.innerHTML = '';

    switch (true){

        case estado === 0:
            maxRecords = 700;
                limit = 25;
                offset = 0; 
                break;

        case estado === 1:
            maxRecords = 151;
            limit = 25;
            offset = 0;
                break;
                
        case estado === 2:
            maxRecords = 251;
            limit = 25;
            offset = 151;
                break;
        
        
        case estado === 3:
        maxRecords = 386;
        limit = 25;
        offset = 251;
                break;

        case estado === 4:
            maxRecords = 493;
            limit = 25;
            offset = 386;
                break;

        case estado === 5:
            maxRecords = 649;
            limit = 25;
            offset = 493;
                break;

        case estado === 6:
            maxRecords = 721;
            limit = 25;
            offset = 649;
                break;

        case estado === 7:
            maxRecords = 809;
            limit = 25;
            offset = 721;
                break;

        case estado === 8:
            maxRecords = 905;
            limit = 25;
            offset = 809;
                break;
        
        case estado === 9:
            maxRecords = 1008;
            limit = 25;
            offset = 905;
                break;
    }

    loadPokemonItens(offset, limit);
}

// Evento de carregamento de mais pokemons
loadMoreButton.addEventListener("click", () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
});

// Evento do botão para alterar valores e executar a nova filtragem
GeracaoButton.addEventListener("click", () => {
    estado = 1;  // Define o estado para 3 (Segunda Geração)
    filtragemPokemon();  // Executa a nova filtragem com as alterações
});
GeracaoButton2.addEventListener("click", () => {
    estado = 2;  // Define o estado para 3 (Segunda Geração)
    filtragemPokemon();  // Executa a nova filtragem com as alterações
});
GeracaoButton3.addEventListener("click", () => {
    estado = 3;  // Define o estado para 3 (Segunda Geração)
    filtragemPokemon();  // Executa a nova filtragem com as alterações
});
GeracaoButton4.addEventListener("click", () => {
    estado = 4;  // Define o estado para 3 (Segunda Geração)
    filtragemPokemon();  // Executa a nova filtragem com as alterações
});
GeracaoButton5.addEventListener("click", () => {
    estado = 5;  // Define o estado para 3 (Segunda Geração)
    filtragemPokemon();  // Executa a nova filtragem com as alterações
});
GeracaoButton6.addEventListener("click", () => {
    estado = 6;  // Define o estado para 3 (Segunda Geração)
    filtragemPokemon();  // Executa a nova filtragem com as alterações
});
GeracaoButton7.addEventListener("click", () => {
    estado = 7;  // Define o estado para 3 (Segunda Geração)
    filtragemPokemon();  // Executa a nova filtragem com as alterações
});
GeracaoButton8.addEventListener("click", () => {
    estado = 8;  // Define o estado para 3 (Segunda Geração)
    filtragemPokemon();  // Executa a nova filtragem com as alterações
});
GeracaoButton9.addEventListener("click", () => {
    estado = 9;  // Define o estado para 3 (Segunda Geração)
    filtragemPokemon();  // Executa a nova filtragem com as alterações
    
});


function toggleMenu() {
    if (popupMenu.style.display === 'none' || popupMenu.style.display === '') {
        popupMenu.style.display = 'block';
    } else {
        popupMenu.style.display = 'none';
    }
}