import React from 'react'
import { Text, TouchableOpacity, SafeAreaView, FlatList, StyleSheet, View, Image } from 'react-native'
import {Card} from 'react-native-elements'
import Constants from 'expo-constants';


export default class Flat extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tab: [{id:1, value: 'hello'}, {id:2, value: 'coucou'}] }
    this.navigation = this.props.navigation
    
  }

    DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',

    },
  ];
  
  

  static navigationOptions = {
    header: {
    visible: false
    }
    };
  render() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={this.DATA}
        renderItem={({ item }) => (
            <TouchableOpacity>
                <Card>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                          style={{width: 100, height: 100, borderRadius: 50}}
                          resizeMode="cover"
                          source={require('../assets/img/logo.png')}
                        />
                        <Text>Hello</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  )
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      justifyContent: 'center',
      alignItems: 'center'
    },

  });