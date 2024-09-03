

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
    
    
    //função que traz o carregamento de pokemons
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

    // Função que filtra os pokemons que aparecerão
    function filtragemPokemon() {
        // Limpa a lista atual antes de aplicar os novos filtros
        pokemonList.innerHTML = '';
    
        switch (true){
    
            case estado === 0:
                maxRecords = 1008;
                    limit = 50;
                    offset = 0; 
                    break;
    
            case estado === 1:
                maxRecords = 151;
                limit = 50;
                offset = 0;
                    break;
                    
            case estado === 2:
                maxRecords = 251;
                limit = 50;
                offset = 151;
                    break;
            
            
            case estado === 3:
            maxRecords = 386;
            limit = 50;
            offset = 251;
                    break;
    
            case estado === 4:
                maxRecords = 493;
                limit = 50;
                offset = 386;
                    break;
    
            case estado === 5:
                maxRecords = 649;
                limit = 50;
                offset = 493;
                    break;
    
            case estado === 6:
                maxRecords = 721;
                limit = 50;
                offset = 649;
                    break;
    
            case estado === 7:
                maxRecords = 809;
                limit = 50;
                offset = 721;
                    break;
    
            case estado === 8:
                maxRecords = 905;
                limit = 50;
                offset = 809;
                    break;
            
            case estado === 9:
                maxRecords = 1008;
                limit = 50;
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

// botoes de filtragem
GeracaoButton.addEventListener("click", () => {
    estado = 0;  
    filtragemPokemon();
});
GeracaoButton1.addEventListener("click", () => {
    estado = 1;
    filtragemPokemon();
});
GeracaoButton2.addEventListener("click", () => {
    estado = 2;
    filtragemPokemon();

});
GeracaoButton3.addEventListener("click", () => {
    estado = 3;
    filtragemPokemon();

});
GeracaoButton4.addEventListener("click", () => {
    estado = 4;
    filtragemPokemon();

});
GeracaoButton5.addEventListener("click", () => {
    estado = 5;
    filtragemPokemon();

});
GeracaoButton6.addEventListener("click", () => {
    estado = 6;
    filtragemPokemon();

});
GeracaoButton7.addEventListener("click", () => {
    estado = 7;
    filtragemPokemon();

});
GeracaoButton8.addEventListener("click", () => {
    estado = 8;
    filtragemPokemon();

});
GeracaoButton9.addEventListener("click", () => {
    estado = 9;
    filtragemPokemon();

    
});


function toggleMenu() {
    if (popupMenu.style.display === 'none' || popupMenu.style.display === '') {
        popupMenu.style.display = 'block';
    } else {
        popupMenu.style.display = 'none';
    }
}