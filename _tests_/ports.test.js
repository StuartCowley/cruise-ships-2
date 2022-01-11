const Port = require('../src/ports.js');

describe('Port', () => {
  it('instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('new port', () => {
    const port = new Port('Dublin')
    expect(port.ports).toBe('Dublin');
  });
});