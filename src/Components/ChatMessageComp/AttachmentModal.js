// components/AttachmentModal.js
import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';


import { moderateScale, scale } from 'react-native-size-matters';
import iconsPath from '../../constants/iconsPath';
import colors from '../../style/colors';

const options = [
  { label: 'Gallery', icon: iconsPath.gallery },
  { label: 'Camera', icon: iconsPath.camera },
  { label: 'Location', icon: iconsPath.location },
  { label: 'Contact', icon: iconsPath.contact },
  { label: 'Document', icon: iconsPath.document },
 
];

const AttachmentModal = ({ visible, onClose,onPickGallery, onPickCamera, onPickContact, onPickDocument  }) => {
   const handlePress = (label) => {
    if (label === 'Gallery') onPickGallery?.();
    else if (label === 'Camera') onPickCamera?.();
    else if (label === 'Contact') onPickContact?.();
    else if (label === 'Document') onPickDocument?.();
    onClose();
  };
  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1}>
        <View style={styles.modalContainer}>
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => handlePress(item.label)}
            >
              <Image source={item.icon} style={styles.icon} />
              <Text style={styles.label}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',

   
  },
  modalContainer: {
        marginBottom:80,
    backgroundColor: '#f7f8fa',
  marginHorizontal:4,
    borderRadius:16,
    padding: scale(15),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  item: {
   width:'23%',
    alignItems: 'center',
     borderWidth:1,
     borderRadius:20,
     padding:10,
     borderColor:'gray',
    margin: scale(8),
    backgroundColor:'white'
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 5,
      tintColor: '#0096FF', 
  },
  label: {
    textAlign: 'center',
    fontSize: 10,
  },
});

export default AttachmentModal;
