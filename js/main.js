let x = {};

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(r => r.json())
  .then(pokemon => {
    console.log(pokemon);

    x = pokemon;
  })
  .catch(error => {
    console.log('Это в блоке catch');
    console.log(error);
  });

setTimeout(() => {
  console.log(x);
}, 5000);
