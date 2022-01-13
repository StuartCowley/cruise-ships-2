const Port = require('../src/ports.js');
const Ship = require('../src/ships.js');

describe('Port', () => {
  describe('port and ship', () => {
    let port
    let ship 

    beforeEach(() => {
      port = new Port('Dublin')
      ship = {}
    })
  
    it('instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  })

  it('new port', () => {
    expect(port.ports).toBe('Dublin');
  })

  it('adds ship to port', () => {
   
    port.addShip(ship)
    expect(port.ships).toContain(ship)
  })

  it('removes ship from port', () => {
    const hmslmao = {}
    const hmslol = {}

    port.addShip(hmslmao)
    port.addShip(hmslol)
    port.removeShip(hmslol)

    expect(port.ships).toEqual([hmslmao])
  });
});
});