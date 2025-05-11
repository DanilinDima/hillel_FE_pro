class Equipment {
    #isAvailable = true;
    #rentedAt = null;
    constructor(name, serialNumber) {
        this.name = name;
        this.serialNumber = serialNumber;
    }
    rent() {
        if (this.#isAvailable) {
            this.#isAvailable = false;
            this.#rentedAt = new Date();
            console.log(`You rented "${this.name}"`);
        } else {
            console.log(`Sorry, "${this.name}" is not available`);
        }
    }
    return() {
        if (this.#isAvailable) {
            console.log(`"${this.name}" is already available`);
            return;
        }
        this.#isAvailable = true;
        let rentedDuration = Math.floor((new Date() - this.#rentedAt) / 1000); 
        console.log(`You returned "${this.name}"`);
        return rentedDuration;
    }
    isAvailable() {
        return this.#isAvailable;
    }
}

class Laptop extends Equipment {
    constructor(name, serialNumber, ram, cpu) {
        super(name, serialNumber);
        this.ram = ram;
        this.cpu = cpu;
    }
    getInfo() {
        return `Laptop: ${this.name} (Serial: ${this.serialNumber}) - RAM: ${this.ram}, CPU: ${this.cpu}`;
    }
}

class Projector extends Equipment {
    constructor(name, serialNumber, lumens, resolution) {
        super(name, serialNumber);
        this.lumens = lumens;
        this.resolution = resolution;
    }
    getInfo() {
        return `Projector: ${this.name} (Serial: ${this.serialNumber}) - Lumens: ${this.lumens}, Resolution: ${this.resolution}`;
    }
}
class RentalService {
    constructor() {
        this.inventory = [];
    }
    addEquipment(equipment) {
        this.inventory.push(equipment);
    }
    listAvailableEquipment() {
        return this.inventory.filter((equipment) => equipment.isAvailable());
    }
    findEquipmentBySerialNumber(serialNumber) {
        return this.inventory.find((e) => e.serialNumber === serialNumber);
    }
    rentEquipment(serialNumber) {
        const equipment = this.findEquipmentBySerialNumber(serialNumber);
        if (equipment) {
            equipment.rent();
        } else {
            console.log(
                `Equipment with serial number ${serialNumber} not found`
            );
        }
    }
    returnEquipment(serialNumber) {
        const equipment = this.findEquipmentBySerialNumber(serialNumber);
        if (equipment) {
            const duration = equipment.return();
            console.log(`Equipment returned after ${duration} seconds`);
        } else {
            console.log(
                `Equipment with serial number ${serialNumber} not found`
            );
        }
    }
}

const laptop1 = new Laptop("MacBook Pro", "ABC123", 16, "M1");
const projector1 = new Projector("Epson", "XYZ999", 3000, "1920x1080");

const rental = new RentalService();
rental.addEquipment(laptop1);
rental.addEquipment(projector1);

rental.rentEquipment("ABC123"); // арендует MacBooktime
setTimeout(() => {
    rental.returnEquipment("ABC123"); // возвращает и показывает, сколько часов был в аренде
}, 10000); // 5 секунд аренды
