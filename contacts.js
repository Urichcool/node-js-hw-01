const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");
console.log(contactsPath);

function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => console.table(JSON.parse(data)))
    .catch((err) => console.error(err.message));
}

function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then((data) => console.table(JSON.parse(data).find(contact => Number(contact.id) === contactId)))
    .catch((err) => console.error(err.message));
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {

}



