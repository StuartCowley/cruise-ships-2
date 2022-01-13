const Port = require('../src/ports.js');
const Ship = require('../src/ships.js');

describe('Port', () => {
  it('instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('new port', () => {
    const port = new Port('Dublin')
    expect(port.ports).toBe('Dublin');
  });
  it('adds ship to port', () => {
    const port = new Port('Dublin')
    const ship = {}
    port.addShip(ship)
    expect(port.ships).toContain(ship)
  })
  it('removes ship from port', () => {
    const port = new Port('Dublin')
    const hmslmao = {}
    const hmslol = {}
    port.addShip(hmslmao)
    port.addShip(hmslol)
    port.removeShip(hmslol)
    expect(port.ships).toEqual([hmslmao])
  })
});