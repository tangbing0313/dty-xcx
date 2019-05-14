import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Taobao extends Component {

  config = {
    navigationBarTitleText: '淘宝相应'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className='index'>
        <Text>淘宝</Text>
      </View>
    )
  }
}
