import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem ,Image} from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '多途英语'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='indexWapper'>
          <Swiper
            className='indexSwiper'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            style={{height:'150px',width:'100%'}}
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <Image style={{width:'100%'}}  src='http://p1.music.126.net/yHRI1v_VjLXbxlbBPVOVIQ==/109951164072281201.jpg' />
            </SwiperItem>
            <SwiperItem>
              <Image style={{width:'100%'}}  src='http://p1.music.126.net/L8V3uVejBPq0-sayNgDMYA==/109951164072238305.jpg' />
            </SwiperItem>
            <SwiperItem>
              <Image style={{width:'100%'}}  src='http://p1.music.126.net/yYt2NIFerGKv1NIgsd8isA==/109951164072244366.jpg' />
            </SwiperItem>
          </Swiper>


          <View className='summary'>
            sdffds
          </View>
        </View>
      </View>
    )
  }
}
