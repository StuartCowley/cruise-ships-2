const Ship = require('../src/ships');

describe('ship', () => {
    it('new ship created', () => {
        expect(new Ship()).toBeInstanceOf(Object)
    });
    it('ship starting port', () => {
        const ship = new Ship('Liverpool')
        expect(ship.startingPort).toBe('Liverpool')
    })
});