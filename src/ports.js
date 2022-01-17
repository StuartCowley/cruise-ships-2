function Port (name) {
    this.ports = name;
    this.ships = []
};

Port.prototype = {
    addShip(ship) {
    this.ships.push(ship)   
    },
    removeShip() {
       this.ships.pop()
    },
};
module.exports = Port;

