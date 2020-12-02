import React from 'react'
import {StyleSheet, TouchableOpacity, Text,View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color='#333'/>
        <Text style={styles.itemText}>{item.text}</Text>
        </View>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection : 'row', 
    padding: 16,
    marginTop: 16,
    backgroundColor:'#4630eb',
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 1,
    borderRadius: 10,
  },
  itemText:{
    marginLeft: 8,
    color:'#fff'
  }
});