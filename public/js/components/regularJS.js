var pokemonDB = [
  {
    name: "charmander",
    type: "fire",
    hp: '39',
    attack: 52,
    stamina: 43,
    level: 1,
    img: 'http://www.smogon.com/dex/media/sprites/xy/charmander.gif',

  },
  {
    name: "bulbasaur",
    type: "grass",
    hp: '45',
    attack: 49,
    stamina: 49,
    level: 1,
    img: 'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif',
  },
  {
    name: "squirtle",
    type: "water",
    hp: '44',
    attack: 48,
    stamina: 65,
    level: 1,
    img: 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif',

  },
];

var gameState = {
  userPokemon: "",
  rivalPokemon: "",
};

var pokemonsEL = document
  .querySelector(".select-screen")
  .querySelectorAll(".character");

console.log(pokemonsEL);

var battleScreenEl = document.getElementById("battle-screen");

var i = 0;
while (i < pokemonsEL.length) {
  pokemonsEL[i].onclick = function () {
    var pokemonName = this.dataset.pokemon;
    var player1IMg = document
      .querySelector(".player1")
      .getElementsByTagName("img");
    var player2IMg = document
      .querySelector(".player2")
      .getElementsByTagName("img");

    gameState.userPokemon = pokemonName;

    cpuPick();
    battleScreenEl.classList.toggle("active");

    var currentPokemon = pokemonDB.filter(function (pokemon) {
      return pokemon.name == gameState.userPokemon;
    });
    
    var currentRivalPokemon = pokemonDB.filter(function (pokemon) {
      return pokemon.name == gameState.rivalPokemon;
    });

    player1IMg[0].src = currentPokemon[0].img
    player2IMg[0].src = currentRivalPokemon[0].img

    console.log("***************");
    console.log(currentPokemon);

    console.log(gameState);
    console.log(player1IMg[0]);
  };
  i++;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cpuPick() {
  gameState.rivalPokemon = pokemonsEL[randomNumber(0, 3)].dataset.pokemon;
}

// webpackJsonp([0],{

// /***/ 235:
// /***/ (function(module, exports, __webpack_require__) {

// "use strict";

// // pokemon
// // create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)
// var pokemons = [{
//   name: 'charmander',
//   type: 'fire',
//   attack: 52,
//   stamina: 39,
//   level: 1
// }, {
//   name: 'charmander',
//   type: 'fire',
//   attack: 52,
//   stamina: 39,
//   level: 1
// }];

// var attack = 20;
// var level = 10;
// var stack = 1.3;
// var stamina = 39;

// // create a formula for attacks
// console.log(attack * level * stack / 7);

// // create a formula for health
// //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
// console.log(0.20 * Math.sqrt(level) * stamina * 15);

// // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// // p1 vs p2

// // when one user loses all his health declare a winner

// /***/ })

// },[235]);
