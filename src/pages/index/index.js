import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem ,Image} from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '多途英语'
  }

  componentWillMount(){
    /*Taro.request({
      url: 'http://wechat.duotuill.com/xcx/index',
      data: {
        foo: 'foo',
        bar: 10
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then(res => console.log(res.data))*/
  }

  render () {
    return (
      <View className='index'>
        <View className='indexWapper'>
          <View className='indexSwiper'>
            <Swiper
              indicatorColor='#999'
              indicatorActiveColor='#333'
              style={{height:'150px'}}
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
          </View>


          <View className='summary'>
            <View className='summary-title-box'>
              <View className='summary-title'>学习</View>
              <View className='summary-more'>更多 ..</View>
            </View>

            <View className='summary-box flex'>
              <View className='summary-item'>
                <View className='summary-img'>
                  <Image className='summary-img-ref' src='http://p1.music.126.net/yHRI1v_VjLXbxlbBPVOVIQ==/109951164072281201.jpg' />
                </View>
                <View className='summary-txt'>

                </View>
              </View>
            </View>
          </View>

        </View>
      </View>
    )
  }
}
