const Itinerary = require('../src/itinerary.js');

describe('itinerary', () => {
    it('instantiates itinerary', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('ports', () => {
        const dublin = jest.fn()
        const liverpool = jest.fn()
        const itinerary = new Itinerary([dublin, liverpool])
        expect(itinerary.ports).toStrictEqual([dublin, liverpool]);
    })
});