  
import React from 'react'
import { Header } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import Icon from '@mdi/react'
import { mdiMapLegend, mdiMagnify, mdiFilter, mdiBellOutline } from '@mdi/js'
import { View } from 'native-base'
import styles from '../../assets/css/header.js'

export default class MyHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.type = this.props.type
        this.navigation = this.props.navigation
    }

    rightContent = 
        <View style={styles.horizontalList}>
          <Icon path={mdiFilter} size={1} color="#fff"/>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.navigation.navigate('Search')}
          >
            <Icon path={mdiMagnify} size={1} color="#fff"/>
          </TouchableOpacity>
          <Icon path={mdiMapLegend} size={1} color="#fff"/>
        </View>

    leftContent = 
        <View>
          <Icon path={mdiBellOutline} size={1} color="#fff"/>
        </View>

    ProfileHeader = 
      <View>
        <Header
          leftComponent={this.leftContent}
          rightComponent={this.rightContent}
          containerStyle={{
            backgroundColor: 'rgb(63, 81, 181)',
          }}
        />
      </View>

    addHeader = 
      <View>
        <Header
          leftComponent={this.leftContent}
          rightComponent={this.rightContent}
          containerStyle={{
            backgroundColor: 'rgb(63, 81, 181)',
          }}
        />
      </View>

    render() {
      const type = this.type
      let HeaderComponent
      if(type === 'Profile'){
        HeaderComponent =  this.ProfileHeader
      } else {
        HeaderComponent =  this.addHeader
      }
      return (
        HeaderComponent
      )
    }
}