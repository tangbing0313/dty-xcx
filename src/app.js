import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [

      'pages/study/book',
      'pages/index/index',
      'pages/user/index',
      'pages/study/index',
      'pages/club/index',
      //'pages/study/book'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#36b378',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar:{
      color: '#000000',
      selectedColor: '#36b378',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [
        {
          pagePath:'pages/index/index',
          text:'首页',
          iconPath: "./assets/common/tab1.png",
          selectedIconPath: "./assets/common/tab1_select.png"
        },{
          pagePath:'pages/club/index',
          text:'发现',
          iconPath: "./assets/common/tab3.png",
          selectedIconPath: "./assets/common/tab3_select.png"
        },{
          pagePath:'pages/user/index',
          text:'我的',
          iconPath: "./assets/common/tab4.png",
          selectedIconPath: "./assets/common/tab4_select.png"
        }
      ]
    }
  }

  componentDidMount () {

  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
