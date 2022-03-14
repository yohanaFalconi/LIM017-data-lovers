import { filterData, orderBy , topStats, searchData } from '../src/data.js';

const pokemonDataTest = [
  {
    num: "013",
    name: "bulbasaur",
    type: ["grass","poison","fire"],
    stats: {
      "base-attack": "300",
      "base-defense": "100",
      "base-stamina": "496",
      "max-cp": "3050",
      "max-hp": "403"
    }
  },
  {
    num: "115",
    name: "abra",
    type:["fire","grass"],
    stats: {
      "base-attack": "17",
      "base-defense": "396",
      "base-stamina": "67",
      "max-cp": "2090",
      "max-hp": "64"
    }
  },
  { 
    num: "002",
    name: "zubat",
    type:["water"],
    stats: {
      "base-attack": "118",
      "base-defense": "32",
      "base-stamina": "320",
      "max-cp": "4178",
      "max-hp": "147"
    }
  }
] 


describe('filterData Test', () =>{
  it('devuelve el tipo del pokemon', () =>{
    const result = filterData(pokemonDataTest, "type", "fire");
    expect(result.length).toBe(2);
    expect(result).toEqual([
      {
        num: "013",
        name: "bulbasaur",
        type: ["grass","poison","fire"],
        stats: {
          "base-attack": "300",
          "base-defense": "100",
          "base-stamina": "496",
          "max-cp": "3050",
          "max-hp": "403"
        }
      },
      {
        num: "115",
        name: "abra",
        type:["fire","grass"],
        stats: {
          "base-attack": "17",
          "base-defense": "396",
          "base-stamina": "67",
          "max-cp": "2090",
          "max-hp": "64"
        }
      }])
  
  })
})


describe('orderBy Test', () =>{
  it('devuelve el número ordenado de menor a mayor', () =>{
    const ascenOrder = orderBy(pokemonDataTest,'bottomNumber');
    expect(ascenOrder).toEqual([
      { 
        num: "002",
        name: "zubat",
        type:["water"],
        stats: {
          "base-attack": "118",
          "base-defense": "32",
          "base-stamina": "320",
          "max-cp": "4178",
          "max-hp": "147"
        }
      },
      {
        num: "013",
        name: "bulbasaur",
        type: ["grass","poison","fire"],
        stats: {
          "base-attack": "300",
          "base-defense": "100",
          "base-stamina": "496",
          "max-cp": "3050",
          "max-hp": "403"
        }
      },
      {
        num: "115",
        name: "abra",
        type:["fire","grass"],
        stats: {
          "base-attack": "17",
          "base-defense": "396",
          "base-stamina": "67",
          "max-cp": "2090",
          "max-hp": "64"
        }
      }
    ])
  })
  it('devuelve el número ordenado de mayor a menor', () =>{
    const descenOrder = orderBy(pokemonDataTest,'topNumber');
    expect(descenOrder).toEqual([
      {
        num: "115",
        name: "abra",
        type:["fire","grass"],
        stats: {
          "base-attack": "17",
          "base-defense": "396",
          "base-stamina": "67",
          "max-cp": "2090",
          "max-hp": "64"
        }
      },
      {
        num: "013",
        name: "bulbasaur",
        type: ["grass","poison","fire"],
        stats: {
          "base-attack": "300",
          "base-defense": "100",
          "base-stamina": "496",
          "max-cp": "3050",
          "max-hp": "403"
        }
      },
      { 
        num: "002",
        name: "zubat",
        type:["water"],
        stats: {
          "base-attack": "118",
          "base-defense": "32",
          "base-stamina": "320",
          "max-cp": "4178",
          "max-hp": "147"
        }
      }
    ])
  })
  it('devuelve el nombre ordenado de A_Z', () =>{
    const azOrder = orderBy(pokemonDataTest,'A_Z');
    expect(azOrder).toEqual([
      {
        num: "115",
        name: "abra",
        type:["fire","grass"],
        stats: {
          "base-attack": "17",
          "base-defense": "396",
          "base-stamina": "67",
          "max-cp": "2090",
          "max-hp": "64"
        }
      },
      {
        num: "013",
        name: "bulbasaur",
        type: ["grass","poison","fire"],
        stats: {
          "base-attack": "300",
          "base-defense": "100",
          "base-stamina": "496",
          "max-cp": "3050",
          "max-hp": "403"
        }
      },
      { 
        num: "002",
        name: "zubat",
        type:["water"],
        stats: {
          "base-attack": "118",
          "base-defense": "32",
          "base-stamina": "320",
          "max-cp": "4178",
          "max-hp": "147"
        }
      }
    ])
  })
  it('devuelve el nombre ordenado de Z_A', () =>{
    const zaOrder = orderBy(pokemonDataTest,'Z_A');
    expect(zaOrder).toEqual([
      { 
        num: "002",
        name: "zubat",
        type:["water"],
        stats: {
          "base-attack": "118",
          "base-defense": "32",
          "base-stamina": "320",
          "max-cp": "4178",
          "max-hp": "147"
        }
      },
      {
        num: "013",
        name: "bulbasaur",
        type: ["grass","poison","fire"],
        stats: {
          "base-attack": "300",
          "base-defense": "100",
          "base-stamina": "496",
          "max-cp": "3050",
          "max-hp": "403"
        }
      },
      {
        num: "115",
        name: "abra",
        type:["fire","grass"],
        stats: {
          "base-attack": "17",
          "base-defense": "396",
          "base-stamina": "67",
          "max-cp": "2090",
          "max-hp": "64"
        }
      }
    ])
  })
})

describe('topStats Test', () => {
  it('devuelve los 2 más altos puntajes en ataque', () => {
    const attackTop = topStats(pokemonDataTest, 'base-attack',2);
    expect(attackTop).toEqual([
      {
        num: "013",
        name: "bulbasaur",
        type: ["grass","poison","fire"],
        stats: {
          "base-attack": "300",
          "base-defense": "100",
          "base-stamina": "496",
          "max-cp": "3050",
          "max-hp": "403"
        }
      },
      { 
        num: "002",
        name: "zubat",
        type:["water"],
        stats: {
          "base-attack": "118",
          "base-defense": "32",
          "base-stamina": "320",
          "max-cp": "4178",
          "max-hp": "147"
        }
      },
    ])
  })
  it('devuelve los 2 más altos puntajes en defensa', () => {
    const defenseTop = topStats(pokemonDataTest, 'base-defense',2);
    expect(defenseTop).toEqual([
      {
        num: "115",
        name: "abra",
        type:["fire","grass"],
        stats: {
          "base-attack": "17",
          "base-defense": "396",
          "base-stamina": "67",
          "max-cp": "2090",
          "max-hp": "64"
        }
      },
      {
        num: "013",
        name: "bulbasaur",
        type: ["grass","poison","fire"],
        stats: {
          "base-attack": "300",
          "base-defense": "100",
          "base-stamina": "496",
          "max-cp": "3050",
          "max-hp": "403"
        }
      },
    ])
  })
  it('devuelve los 2 más altos puntajes en resistencia', () => {
    const staminaTop = topStats(pokemonDataTest, 'base-stamina',2);
    expect(staminaTop).toEqual([
      {
        num: "013",
        name: "bulbasaur",
        type: ["grass","poison","fire"],
        stats: {
          "base-attack": "300",
          "base-defense": "100",
          "base-stamina": "496",
          "max-cp": "3050",
          "max-hp": "403"
        }
      },
      { 
        num: "002",
        name: "zubat",
        type:["water"],
        stats: {
          "base-attack": "118",
          "base-defense": "32",
          "base-stamina": "320",
          "max-cp": "4178",
          "max-hp": "147"
        }
      }
    ])
  })
  it('devuelve los 2 más altos puntajes en poder de combate', () => {
    const cpTop = topStats(pokemonDataTest, 'max-cp',2);
    expect(cpTop).toEqual([
      { 
        num: "002",
        name: "zubat",
        type:["water"],
        stats: {
          "base-attack": "118",
          "base-defense": "32",
          "base-stamina": "320",
          "max-cp": "4178",
          "max-hp": "147"
        }
      },
      {
        num: "013",
        name: "bulbasaur",
        type: ["grass","poison","fire"],
        stats: {
          "base-attack": "300",
          "base-defense": "100",
          "base-stamina": "496",
          "max-cp": "3050",
          "max-hp": "403"
        }
      }
    ])
  })
  it('devuelve los 2 más altos puntajes en poder de sanación', () => {
    const hpTop = topStats(pokemonDataTest, 'max-hp',2);
    expect(hpTop).toEqual([
      {
        num: "013",
        name: "bulbasaur",
        type: ["grass","poison","fire"],
        stats: {
          "base-attack": "300",
          "base-defense": "100",
          "base-stamina": "496",
          "max-cp": "3050",
          "max-hp": "403"
        }
      },
      { 
        num: "002",
        name: "zubat",
        type:["water"],
        stats: {
          "base-attack": "118",
          "base-defense": "32",
          "base-stamina": "320",
          "max-cp": "4178",
          "max-hp": "147"
        }
      }
    ])
  })
}) 

// searchData Test: búsqueda de pokemones
describe('searchData Test',() =>{
  it('devuelve la búsqueda del pokemon', () =>{
    const result = searchData(pokemonDataTest,"name","bulbasaur");
    expect(result).toEqual([
      {
        num: "013",
        name: "bulbasaur",
        type: ["grass","poison","fire"],
        stats: {
          "base-attack": "300",
          "base-defense": "100",
          "base-stamina": "496",
          "max-cp": "3050",
          "max-hp": "403"
        }
      }])
  })
})







