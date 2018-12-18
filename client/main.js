import React from "react";
import { Text, View } from "react-native";
import Header from "./components/Header";
import MusicList from "./components/MusicList";

export default class Main extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Top Pop Songs'} />
        <MusicList />
      </View>
    );
  }
}
