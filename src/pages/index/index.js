import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem ,Image} from '@tarojs/components'
import './index.css'
import img1 from '../../assets/book/01.jpg'
import img2 from '../../assets/book/02.jpg'
import img3 from '../../assets/book/03.jpg'
import img4 from '../../assets/book/04.jpg'

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
              <View className='summary-title'>从入门到<Text className='s'>放弃</Text>精通</View>
              <View className='summary-more'>更多 ..</View>
            </View>

            <View className='summary-box f'>
              <View className='summary-item f' onClick={() => {
                wx.navigateTo({
                  url: '/pages/study/book'
                })
              }}>
                <View className='summary-img f'>
                  <Image className='summary-img-ref' src={img1} />
                </View>
                <View className='summary-txt f'>
                  <View className='summary-item-title'>新概念第一册</View>
                  <View className='summary-item-content'>在这本教材中，每两课课文——每课大约为1课时。</View>
                  <View className='summary-item-h f'><View className='summary-item-c ls2 f'>零基础</View> <View className='ls2'>1999位同学</View> </View>
                </View>
              </View>
              <View className='summary-item f'>
                <View className='summary-img f'>
                  <Image className='summary-img-ref' src={img2} />
                </View>
                <View className='summary-txt f'>
                  <View className='summary-item-title'>新概念第二册</View>
                  <View className='summary-item-content'>被看成1个教学单元。学生学每课时大概用1小时。</View>
                  <View className='summary-item-h f'><View className='summary-item-c ls2 f'>高级</View> <View className='ls2'>1999位同学</View> </View>
                </View>
              </View>
              <View className='summary-item f'>
                <View className='summary-img f'>
                  <Image className='summary-img-ref' src={img3} />
                </View>
                <View className='summary-txt f'>
                  <View className='summary-item-title'>新概念第三册</View>
                  <View className='summary-item-content'>学生学每课时大概用1小时。</View>
                  <View className='summary-item-h f'><View className='summary-item-c ls2 f'>炼狱</View> <View className='ls2'>1999位同学</View> </View>
                </View>
              </View>
              <View className='summary-item f'>
                <View className='summary-img f'>
                  <Image className='summary-img-ref' src={img4} />
                </View>
                <View className='summary-txt f'>
                  <View className='summary-item-title'>新概念第四册</View>
                  <View className='summary-item-content'>被看成1个教学单元。学生学每课时大概用1小时。</View>
                  <View className='summary-item-h f'><View className='summary-item-c ls2 f'>深渊</View> <View className='ls2'>1999位同学</View> </View>
                </View>
              </View>
            </View>
          </View>

        </View>
      </View>
    )
  }
}
