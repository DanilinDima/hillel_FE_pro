let phoneBook = {
    contacts:[
        {
            name: "Bob",
            phone: "+1234567890",
            email: "bob@bikinibottom.com",
        },
        {
            name: "Patrick",
            phone: "+0987654321",
            email: "patrick@bikinibottom.com",
        },
        {
            name: "Squidward",
            phone: "+1122334455",
            email: "squidward@bikinibottom.com",
        }
    ],
    getContactByName: function(name) {
        let contact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (contact) {
            return contact;
        } else {
            return "Contact not found";
        }
    },
    addContact: function(name, phone, email) {
        let newContact = {
            name,
            phone,
            email,
        };
        this.contacts.push(newContact);
        return newContact;
    },
    removeContactByName: function(name) {
        let index = this.contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
            return this.contacts.splice(index, 1)[0];
        } else {
            return "Contact not found";
        }
    },
}

console.log(phoneBook.getContactByName("bob"));
phoneBook.addContact("Mr. Crubs", "+232423423", "Crubs@bikinobottom.com")
console.log("Verify that new contact is added\n", phoneBook.getContactByName("mr. crubs"));
phoneBook.removeContactByName("squidward");
console.log("Verify that new contact is removed\n", phoneBook.getContactByName("squidward"));
console.log(phoneBook.contacts);