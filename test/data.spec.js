import { especieF } from '../src/data.js';


describe('data.especieF', () => {
  it('is a function', () => {
    expect(typeof especieF).toBe('function');
  });

  it('returns `especieF`', () => {
    expect(especieF()).toBe('especieF');
  });
});


