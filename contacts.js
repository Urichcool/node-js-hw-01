const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");

function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => console.table(JSON.parse(data)))
    .catch((err) => console.error(err.message));
}

function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then((data) =>
      console.table(
        JSON.parse(data).find((contact) => Number(contact.id) === contactId)
      )
    )
    .catch((err) => console.error(err.message));
}

function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data);
      const index = contacts.findIndex(
        (contact) => Number(contact.id) === contactId
      );
      contacts.splice(index, 1);
      return contacts;
    })
    .then((contacts) =>
      fs.writeFile("db/contacts.json", JSON.stringify(contacts))
    )
    .catch((err) => console.error(err.message));
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data);
      contacts.push({
        id: String(contacts.length + 1),
        name: name,
        email: email,
        phone: phone,
      });
      return contacts;
    })
    .then((contacts) =>
      fs.writeFile("db/contacts.json", JSON.stringify(contacts))
    )
    .catch((err) => console.error(err.message));
}

