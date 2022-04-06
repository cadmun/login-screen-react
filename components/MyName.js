import React from "react";
import { Text, View } from "react-native";

// export default function MyName(props) {
//   return (
//     <View>
//       <Text>My name is Matt.</Text>
//       <Text>And i have {props.years} years.</Text>
//     </View>
//   )
// }

class MyName extends React.Component {
  render() {
    return (
      <View>
        <Text>My name is Matt.</Text>
        <Text>And i have {this.props.years} years.</Text>
      </View>
    );
  }
}

export default MyName;