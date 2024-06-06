import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { faker } from '@faker-js/faker';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  const users = faker.helpers.multiple(createFakeContact, {
    count: number,
  });
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const existingContacts = JSON.parse(data);

    const updatedContacts = JSON.stringify(
      [...existingContacts, ...users],
      null,
      2,
    );

    await fs.writeFile(PATH_DB, updatedContacts, 'utf8');
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

await generateContacts(5);
