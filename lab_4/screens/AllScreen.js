import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  CheckBox
} from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { jsxAttribute } from "@babel/types";
import todos_list from "../utils/data";

export default class AllScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <LoadTodos/>
      </View>
    );
  }
}

export class LoadTodos extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: todos_list
    }
  }

  render(){
    if (this.state.todos.length == 0) {
      return <Text style={styles.empty}>*Empty*</Text>;
    } else {
      return <ScrollView>{this.state.todos.map(item => this.TodoBox(item))}</ScrollView>;
    }
  }

  TodoBox = item => {
    return (
      <TouchableOpacity key={item.id} style={styles.todoBox}>
        <CheckBox onValueChange={this.changeCheck(item)} value={item.status == "Done" ? true : false} />
        <Text numberOfLines={1} style={{ fontSize: 20 }}>
          {item.content}
        </Text>
      </TouchableOpacity>
    );
  }

  changeCheck = (item) => {
    todos_len = this.state.todos.length
    for (i = 0; i < todos_len; ++i){
      if (this.state.todos[i].id == item.id){
        alert(item.status)
      }
    }
  }
}

AllScreen.navigationOptions = {
  title: "All Todos"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },

  empty: {
    color: "lightgrey"
  },

  todos_scrollview: {
    flex: 1
  },

  todoBox: {
    height: 50,
    width: "90%",
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: "center",
    marginBottom: 15,
    alignItems: "center",
    overflow: "hidden"
  }
});
