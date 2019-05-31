import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './book.css'
import '../../assets/icon/close.png';

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
            <View className='chapter-l-l f'><Text className='chapter-t'>1-2</Text> Excuse me!</View>
            <View className='chapter-l-r f'><image className='chapter-img' src={require('../../assets/icon/close.png')} /></View>
          </View>
          <View className='chapter-list f'>
            <View className='chapter-l-l f'>3-4: Sorry sir.</View>
            <View className='chapter-l-r f'><image className='chapter-img' src={require('../../assets/icon/close.png')} /></View>
          </View>
          <View className='chapter-list f'>
            <View className='chapter-l-l f'>Lesson 5-6 Nice to meet you</View>
            <View className='chapter-l-r f'><image className='chapter-img' src={require('../../assets/icon/close.png')} /></View>
          </View>
          <View className='chapter-list f'>
            <View className='chapter-l-l f'>Lesson 5-6 Mrs. Smith’s living room</View>
            <View className='chapter-l-r f'><image className='chapter-img' src={require('../../assets/icon/close.png')} /></View>
          </View>
          <View className='chapter-list'>章节名称</View>
          <View className='chapter-list'>章节名称</View>
          <View className='chapter-list'>章节名称</View>
        </View>
      </View>
    )
  }
}
