const Itinerary = require('../src/itinerary.js');
const Port = require('../src/ports.js');

describe('itinerary', () => {
    it('instantiates itinerary', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('ports', () => {
        const dublin = new Port('Dublin')
        const liverpool = new Port('Liverpool')
        const itinerary = new Itinerary([dublin, liverpool])
        expect(itinerary.ports).toStrictEqual([dublin, liverpool]);
    })
});