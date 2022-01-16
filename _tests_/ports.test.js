const Port = require('../src/ports.js');

describe('Port', () => {
  describe('port and ship', () => {
    let port
    let ship 

    beforeEach(() => {
      port = new Port('Dublin')
      ship = jest.fn()
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
    port.addShip(ship)
    port.addShip(ship)
    port.removeShip(ship)

    expect(port.ships).toEqual([ship])
  });
});
});
    
