import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWraper}>
        <Text style={styles.heading}>ToDo List</Text>

        <View style={styles.items}>
          {/* TODO: Added logic for items */}
          <Task text="This is the first task"></Task>
        </View>
      </View>
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
});
