import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width:1, height:2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  }
}

const Card = (props) => {
  return (
    <View style = {styles.containerStyle} >
      {props.children}
      </View>
  )
}

export default Card;
