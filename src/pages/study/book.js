import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './book.css'

export default class Book extends Component {

  config = {
    navigationBarTitleText: '课程'
  }

  componentWillMount () { }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className='book-wapper'>
        <View className='chapter'>
          <View className='chapter-list f'>
            <View className='chapter-l-l f'>时代峰峻时代峰峻时代峰峻时代峰峻时代峰峻</View>
            <View className='chapter-l-r f'>sdf</View>
          </View>
          <View className='chapter-list f'>
            <View className='chapter-l-l f'>时代峰峻时代峰峻时代峰峻时</View>
            <View className='chapter-l-r f'>sdf</View>
          </View>
          <View className='chapter-list'>章节名称</View>
          <View className='chapter-list'>章节名称</View>
          <View className='chapter-list'>章节名称</View>
        </View>
      </View>
    )
  }
}
