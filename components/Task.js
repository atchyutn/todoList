import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AddTask from './AddTask';

const Task = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.markDoneBtn}></View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.addTask}>
        {/* Add new task */ }
        <AddTask></AddTask>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },  
  item: {
    flex: 1,
    backgroundColor: '#EB984E',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
    minHeight: 80
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    color: 'red'
  },
  markDoneBtn: {
    width: 24,
    height: 24,
    backgroundColor: 'black',
    opacity: 0.4
  },
  itemText: {
    paddingLeft: 20,
    maxWidth: '80%',
    fontSize: 20
  },
  circle: {
    borderColor: 'black',
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 5
  },
  addTask: {
    height: 550
  }
});
export default Task;