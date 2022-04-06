import React from 'react';
import { View, Text } from 'react-native';

class DimensionsFixed extends React.Component {
  render () {
    return (
      <View style={{ backgroundColor: 'red'}}>
        <Text>opa</Text>
        {/* <View style={{ flexShrink: 1, flexBasis: 300, backgroundColor: 'powderblue'}} />
        <View style={{ flexShrink: 3, flexBasis: 300, backgroundColor: 'skyblue'}} />
        <View style={{ flexShrink: 1, flexBasis: 300, backgroundColor: 'steelblue'}} /> */}
      </View>
    );
    // return (
    //   <View style={{ width: '100%', height: '100%', flexDirection: 'column', alignItems: 'stretch' }}>
    //     <View style={{ flexShrink: 1, flexBasis: 300, backgroundColor: 'powderblue'}} />
    //     <View style={{ flexShrink: 3, flexBasis: 300, backgroundColor: 'skyblue'}} />
    //     <View style={{ flexShrink: 1, flexBasis: 300, backgroundColor: 'steelblue'}} />
    //   </View>
    // );
  }
};

export default DimensionsFixed;