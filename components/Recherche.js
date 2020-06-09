import React from 'react'
import { Text, View, SafeAreaView, TextInput } from 'react-native'
import MyHeader from './headers/Header'
import { Footer, FooterTab, Button, } from 'native-base'
import styles from '../assets/css/home.js'
import Icon from '@mdi/react'
import { mdiMessageProcessingOutline, mdiPlusCircle, mdiMapMarker } from '@mdi/js'


export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      age: null,
      country: null,
    }
    this.navigation = this.props.navigation
  }
  
  render() {
  const navigation = this.props.navigation
  return (
    <SafeAreaView style={styles.bdy}>
      <MyHeader type='Profile' />
      <View style={styles.circle}>
        <Text>IMG</Text>
        <Text>Profile</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => alert('text')}
        />
      </View>
      <Footer>
          <FooterTab>
            <Button vertical>
              <Icon path={mdiMapMarker} size={1} color="#fff"/>
              <Text style={styles.blankText}>A proximité</Text>
            </Button>
            <Button vertical>
              <Icon path={mdiPlusCircle} size={1} color="#fff"/>
              <Text style={styles.blankText}>Ajouter</Text>
            </Button>
            <Button vertical active>
              <Icon path={mdiMessageProcessingOutline} size={1} color="#fff"/>
              <Text style={styles.blankText}>Messages</Text>
            </Button>
          </FooterTab>
        </Footer>
    </SafeAreaView>
  )
  }
}