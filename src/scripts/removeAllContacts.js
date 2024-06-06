import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  const removeArray = JSON.stringify([], null, 2);
  try {
    await fs.writeFile(PATH_DB, removeArray, 'utf8');
  } catch (error) {
    console.error(error);
  }
};

await removeAllContacts();
