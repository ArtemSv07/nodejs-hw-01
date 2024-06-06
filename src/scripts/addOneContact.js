import { PATH_DB } from '../constants/contacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
import { Buffer } from 'buffer';

export const addOneContact = async () => {
  const newContact = createFakeContact();

  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    contacts.push(newContact);

    const updatedContacts = JSON.stringify(contacts, null, 2);

    await fs.writeFile(PATH_DB, updatedContacts);
  } catch (error) {
    console.error('Помилка запису у файл:', error);
  }
};

await addOneContact();
