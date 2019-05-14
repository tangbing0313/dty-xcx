import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  click(e){
    e.stopPropagation()

    Taro.switchTab({
      url: '/pages/index/index'
    })

    Taro.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
      .then(res => console.log(res))
  }
  click2(e){
    e.stopPropagation()
    Taro.navigateTo({
      url: '/pages/content/taobao'
    })
  }
  render () {
    return (
      <View className='user'>
        <Text>我们 中心啊</Text>
        <Button onClick={this.click}>点击下试试</Button>
        <Button onClick={this.click2}>点击下试试</Button>
      </View>
    )
  }
}
