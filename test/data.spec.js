//import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filterData, searchData } from '../src/data.js';
//import { pokemon } from './data/pokemon/pokemon.js';

const pokemonData = [
  {
    num: "013",
    name: "weedle",
    type: ["grass","poison","fire"]
  },
  {
    num: "115",
    name: "kangaskhan",
    type:["fire","grass"]
  },
  { 
    num: "002",
    name: "ivysaur",
    type:["water"]
  }
];
//filterData,  testear: los tipos de pokemones
describe('filterData Test', () =>{
  it('devuelve el tipo del pokemon', () =>{
    const result = filterData(pokemonData, "type", "fire");
    //console.log(result)
    //expect(result.length).toBe(2);
    expect(result).toEqual([
    { num: "013",
    name: "weedle",
    type: ["grass","poison","fire"]},
    { num: "115",
    name: "kangaskhan",
    type:["fire","grass"]}])
  });
})

//searchData, testear: búsqueda de pokemones por nombre
describe('searchData Test',() =>{
  it('devuelve la búsqueda del pokemon', () =>{
    const result = searchData(pokemonData,"name","ivysaur");
    expect(result).toEqual([{ 
      num: "002",
      name: "ivysaur",
      type:["water"]
    }])
  })
})