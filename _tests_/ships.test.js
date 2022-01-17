const Ship = require('../src/ships.js');


describe('ship', () => {

    describe('with ports and an itinerary', () => {
        let dublin 
        let liverpool 
        let itinerary 
        let ship
       
        beforeEach(() => {
        dublin = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: 'Dublin',
            ships: []
        }
        
        liverpool = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: 'Liverpool',
            ships: []
        }

        itinerary = {
            ports: [dublin, liverpool]
        };

        ship = new Ship(itinerary)
        });

        it('can be instatiated', () => {

        expect(ship).toBeInstanceOf(Object)
        });

        it('ship starting port', () => {

        expect(ship.currentPort).toBe(dublin)
        });

        it('ship previous port', () => {

        expect(ship.previousPort).toBeFalsy()
        });

        it('ship ready to set sail', () => {
        ship.setSail()

        expect(ship.currentPort).toBeFalsy();
        expect(dublin.removeShip).toHaveBeenCalledWith(ship)
        });

        it('ship set sail to previous port', () => {
        ship.setSail()

        expect(this.previousPort).toBe(this.currentPort)
        expect(dublin.ships).not.toContain(ship)
        });

        it('gets added to port on instantiation', () => {
        
        expect(dublin.addShip).toHaveBeenCalledWith(ship)
        });

        it('can dock at a different port', () => {
            
            ship.setSail()
            ship.dock()

            expect(ship.currentPort).toBe(liverpool);
            expect(liverpool.addShip).toHaveBeenCalledWith(ship)
        });

        it("can't go further that the itinerary", () => {
            ship.setSail()
            ship.dock()

            expect(() => ship.setSail()).toThrowError('End of itinerary reached')
        });
    });
    });
        
        