import { especieF, orderData } from '../src/data.js';
// const con array c
const data = [{
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
}, {
  "name": "Beth Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
}, {
  "name": "Risotto Groupon",
  "status": "Dead",
  "species": "Alien",
  "type": "Blue ape alien",
  "gender": "Male",
}, {
  "name": "Scary Brandon",
  "status": "Alive",
  "species": "Humanoid",
  "type": "Monster",
  "gender": "Male",
}
]

const sorting = {
  field: "popularity",
};

describe('es una funcion', () => {
  it('is a function', () => {
    expect(typeof especieF).toBe('function');
  });
  it("la lista contiene la especie de los personajes", () => {
    expect(especieF(data)[0].name).toEqual("Rick Sanchez");
    expect(especieF(data)[1].name).toEqual("Beth Smith");
  });
});

describe('El valor de field es pupularity', () => {
  it('debería retornar popularity', () => {
    expect(orderData(sorting)[0].field).toEqual("popularity");
  });
});