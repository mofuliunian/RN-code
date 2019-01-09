import React, { Component } from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import Storage from '../Utils/Storage'
import { withNavigation } from 'react-navigation';

const TabHeaderTextPaddingTop = 11
const TabHeaderTextPaddingButtom = 11


class TabHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      TabHeight: 0
    }
  }
  componentDidMount() {
    Storage.getStorage('TabHeight').then(res => {
      console.log(res)
      this.setState({
        TabHeight: Number(res)
      })
    })
  }
  render() {
    let {
      backGround, // 导航栏背景颜色
      text
    } = this.props
    return (
      <View
        style={[
          Style.constainer,
          {
            paddingTop: this.state.TabHeight + TabHeaderTextPaddingTop,
            backgroundColor: backGround || '#fff'
          }
        ]}
      >
        <Text style={Style.HeaderText}>{text}</Text>
        <TouchableOpacity style={[Style.LeftButtom,{top: this.state.TabHeight + TabHeaderTextPaddingTop-7}]} onPress={this.gotoBack}>
          <Image style={Style.LeftImage} source={require('../Image/back.png')}></Image>
        </TouchableOpacity>
      </View>
    )
  }
  gotoBack = () => {
    this.props.navigation.goBack()
  }
}

const Style = StyleSheet.create({
  constainer: {
    paddingBottom: TabHeaderTextPaddingButtom,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 16,
  },
  LeftButtom: {
    padding: 10,
    position: 'absolute',
    left: 6,
  },
  LeftImage: {
    width: 20,
    height: 16
  }
})

export default withNavigation(TabHeader);
