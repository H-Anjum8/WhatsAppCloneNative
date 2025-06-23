// utils/pickContact.js
import Contacts from 'react-native-contacts';
import { PermissionsAndroid, Platform } from 'react-native';

export const pickContact = async () => {
  try {
    if (Platform.OS === 'android') {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
        throw new Error('Contacts permission denied');
      }
    }

    const contacts = await Contacts.getAll();
    if (contacts.length > 0) {
      return contacts[0]; // Just return first for now (or implement a list later)
    }
  } catch (error) {
    console.log('Error picking contact:', error);
  }
};
