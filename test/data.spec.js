import { especieF, anotherExample } from '../src/data.js';


describe('data.especieF', () => {
  it('is a function', () => {
    expect(typeof especieF).toBe('function');
  });

  it('returns `especieF`', () => {
    expect(especieF()).toBe('especieF');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
