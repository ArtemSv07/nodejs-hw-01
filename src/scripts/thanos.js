import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    const randomContacts = JSON.stringify(
      contacts.filter(() => Math.random() >= 0.5),
      null,
      2,
    );

    await fs.writeFile(PATH_DB, randomContacts);
  } catch (error) {
    console.error(error);
  }
};

await thanos();
