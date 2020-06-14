import React from 'react'
import { Text, View, SafeAreaView  } from 'react-native'
import MyHeader from './headers/Header'
import { Footer, FooterTab, Button, } from 'native-base';
import styles from '../assets/css/home.js'
import Icon from '@mdi/react'
import { mdiMessageProcessingOutline, mdiPlusCircle, mdiMapMarker } from '@mdi/js'


export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.navigation = this.props.navigation
    
  }
  static navigationOptions = {
    header: {
    visible: false
    }
    };
  render() {
  return (
    <SafeAreaView style={styles.bdy}>
      <MyHeader type='Profile' />
      <View style={styles.circle}>
        <Text>IMG</Text>
        <Text>Profile</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.boxList}>

        <View style={styles.box}>
            <View style={styles.boxHead}>
              <Text>Table</Text>
            </View>
            <View style={styles.boxBdy}>
              <Text>Img Produits</Text>
            </View>
            <View style={styles.boxFooter}>
              <Text style={styles.boxFooterTxtLeft}>150 m</Text>
              <Text style={styles.boxFooterTxtRight}>1j</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxHead}>
              <Text>Chaise en bois</Text>
            </View>
            <View style={styles.boxBdy}>
              <Text>Img Produits</Text>
            </View>
            <View style={styles.boxFooter}>
              <Text style={styles.boxFooterTxtLeft}>100 m</Text>
              <Text style={styles.boxFooterTxtRight}>3 h</Text>
            </View>
          </View>

        </View>
      </View>
      <Footer>
          <FooterTab>
            <Button vertical>
              <Icon path={mdiMapMarker} size={1} color="#fff"/>
              <Text style={styles.blankText}>A proximité</Text>
            </Button>
            <Button vertical>
              
              <Text style={styles.blankText}>Ajouter</Text>
            </Button>
            <Button vertical active>
              
              <Text style={styles.blankText}>Messages</Text>
            </Button>
          </FooterTab>
        </Footer>
    </SafeAreaView>
  )
  }
}