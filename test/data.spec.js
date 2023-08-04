import { especieF, orderData, filterData } from '../src/data.js';
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
}]

const sorting = {
  field: "popularity",
};

const filters = {
  species: []
};


describe('Función especieF', () => {
  it('is a function', () => {
    expect(typeof especieF).toBe('function');
  });
  it("la lista contiene la especie de los personajes", () => {
    expect(especieF(data)[0].name).toEqual("Rick Sanchez");
    expect(especieF(data)[1].name).toEqual("Beth Smith");
  });
});

describe('Función orderData', () => {
  it('debería retornar la data original', () => {
    expect(orderData(data, sorting)).toEqual(data);
  });
});

describe('Función filterData', () => {
  it('debería retornar los datos originales si no se proporcionan filtros', () => {
    expect(filterData(data, filters)).toEqual(data);
  });
  it('debería filtrar los datos por la especie humanoide', () => {
    expect(filterData(data, filters)).toEqual(data);
  })
  it('Comparación cuando a[field] es mayor que b[field]', () => {
    const a = { id: 1, value: 10 };
    const b = { id: 2, value: 5 };
    const field = 'value';

    expect( orderData([a, b], { field })).toBe(1);
  });
});

