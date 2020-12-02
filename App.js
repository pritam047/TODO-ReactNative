import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/ToDoItem';
import AddTodo from './components/addTodo';



export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Make coffee', key: '1' },
    { text: 'Learn React Native', key: '2' },
    { text: 'Play Valorant', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    }
    else {
      Alert.alert('OOPS!', 'Todo must be atleast 4 chars long!', [
        { 'text': 'GOT IT!', onPress: () => console.log('Alert Closed!') }
      ])
    }

  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});