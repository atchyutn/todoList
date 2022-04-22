import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import Task from './components/Task';
import AddTask from './components/AddTask';

export default function App() {
  const [tasks, setTasks] = useState([]);
  handleCallback = (childData) => {
    setTasks({ childData });
    console.log(setTasks);
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWraper}>
        <Text style={styles.heading}>ToDo List</Text>

        <View style={styles.items}>
          {/* TODO: Added logic for items */}
          <Task text="This is the first task"></Task>
        </View>
      </View>
      {/* Add new task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.addTask}>
        <AddTask parentCallback={this.handleCallback}></AddTask>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEDEF',
  },
  tasksWraper:{
    paddingTop: 80,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  addTask: {
    height: 700
  }
});
