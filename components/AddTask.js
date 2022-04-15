import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

const AddTask = () => {
  return (
    <View
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
      style={styles.textInputWrapper}
    >
      <TextInput
        placeholder='Add your task'
        style = {styles.textInput}
      />
      <TouchableOpacity>
        <View style={styles.addBtnWrapper}>
          <Text style={styles.addBtn}>
            +
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  textInputWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  
  textInput: {
    borderColor: '#36C2F9',
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    width: 250,
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  addBtnWrapper: {
    borderColor: '#36C2F9',
    borderWidth: 1,
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#36C2F9'
  },
  addBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 0
  }

});


export default AddTask;