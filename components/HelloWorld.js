import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
// import Styles from '../styles/Styles';

// export default function HelloWorld(props) {
//   return (
//     <View>
//       <Text>Hello,</Text>
//       <Text>{props.name}!</Text>
//     </View>
//   )
// }

class HelloWorld extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.content}>Hello,</Text>
        <Text style={styles.text}>{this.props.name}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: 'red',
    borderWidth: 2,
    padding: 10,
  },
  content: {
    fontSize: 50,
  }
})

export default HelloWorld;
