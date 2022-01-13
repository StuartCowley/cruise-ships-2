const Ship = require('../src/ships.js');
const Itinerary = require('../src/itinerary.js');
const Port = require('../src/ports.js');

describe('ship', () => {
    it('new ship created', () => {
        const port = new Port('Dublin')
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary)
        expect(ship).toBeInstanceOf(Object)
    });
    it('ship starting port', () => {
        const port = new Port('Dublin')
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary)
        expect(ship.currentPort).toBe(port)
    });
   it('ship previous port', () => {
        const port = new Port('Dublin')
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary)
        expect(ship.previousPort).toBeFalsy()
    });
    it('ship ready to set sail', () => {
        const port = new Port ('Dublin')
        const itinerary = new Itinerary([port, port])
        const ship = new Ship(itinerary)
        ship.setSail()
        expect(ship.currentPort).toBeFalsy();
    });
    it('ship set sail to previous port', () => {
        const port = new Port ('Dublin')
        const itinerary = new Itinerary([port, port])
        const ship = new Ship(itinerary)
        ship.setSail()
        expect(this.previousPort).toBe(this.currentPort)
        expect(port.ships).not.toContain(ship)
   });
    it('can dock at different port', () => {
        const dublin = new Port('Dublin')
        const liverpool = new Port('Liverpool')
        const itinerary = new Itinerary([dublin, liverpool])
        const ship = new Ship(itinerary)
        ship.setSail()
        ship.dock()
        expect(ship.currentPort).toBe(liverpool);
        expect(liverpool.ships).toContain(ship);
    });
    it("can't go further that the itinerary", () => {
        const dublin = new Port ('Dublin')
        const liverpool = new Port('Liverpool')
        const itinerary = new Itinerary([dublin, liverpool])
        const ship = new Ship(itinerary)
        ship.setSail()
        ship.dock()
        expect(() => ship.setSail()).toThrowError('End of itinerary reached')
    });
    it('gets added to port on instantiation', () => {
        const dublin = new Port('Dublin')
        const itinerary = new Itinerary([dublin])
        const ship = new Ship(itinerary)
        expect(dublin.ships).toContain(ship)
    });
});