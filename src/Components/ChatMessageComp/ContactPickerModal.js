import React from 'react';
import {
  Modal,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ContactPickerModal = ({ visible, onClose, contacts, onSelect }) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1}>
        <View style={styles.container}>
          <FlatList
            data={contacts}
            keyExtractor={(item) => item.recordID}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text style={styles.name}>{item.displayName}</Text>
                <Text style={styles.phone}>{item.phoneNumbers[0]?.number || 'No number'}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    backgroundColor: '#fff',
    padding: 16,
    maxHeight: '60%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  name: {
    fontWeight: 'bold',
  },
  phone: {
    color: 'gray',
  },
});

export default ContactPickerModal;
