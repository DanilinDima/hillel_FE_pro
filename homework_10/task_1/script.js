let userInfo = {
    name: "Rob",
    age: 30,
    address: {
        city: "Odesa",
        street: "Deribasivska",
    },
    getInfo: function () {
        return `Name: ${this.name}, Age: ${this.age}, Address: City - ${this.address.city}, Street - ${this.address.street}`;
    },
    showInfo: function () {
        console.log(this.getInfo());
        return this;
    },
}
