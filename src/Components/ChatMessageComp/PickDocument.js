// utils/pickDocument.js
import DocumentPicker from 'react-native-document-picker';

export const pickDocument = async () => {
  try {
    const res = await DocumentPicker.pickSingle({
      type: [DocumentPicker.types.allFiles],
    });
    return res;
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      console.log('User cancelled document picker');
    } else {
      throw err;
    }
  }
};
