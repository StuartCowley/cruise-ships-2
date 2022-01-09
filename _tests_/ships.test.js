const Ship = require('../src/ships.js');
const Port = require('../src/ports.js')

describe('ship', () => {
    it('new ship created', () => {
        expect(new Ship()).toBeInstanceOf(Object)
    });
    it('ship starting port', () => {
        const port = new Port('Dublin')
        const ship = new Ship(port)
        
        expect(ship.currentPort).toBe(port)
    });
    it('ship ready to set sail', () => {
        const port = new Port('Dublin')
        const ship = new Ship(port)
        ship.setSail()
        expect(this.currentPort).toBeFalsy();
    });
    it('can dock at different port', () => {
        const dublin = new Port('Dublin')
        const ship = new Ship(dublin)
        const liverpool = new Port('Liverpool')
        ship.setSail()
        ship.dock(liverpool)
        expect(ship.currentPort).toBe(liverpool)
    });
});