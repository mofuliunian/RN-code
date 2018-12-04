import { createMaterialTopTabNavigator } from 'react-navigation'
import Popular from '../../src/home/Popular/Popular'
import Store from '../../src/home/Store/Store'
import Phone from '../../src/home/Phone/Phone'
import Device from '../../src/home/Device/Device'
import Woman from '../../src/home/Woman/Woman'
import Food from '../../src/home/Food/Food'
import Motion from '../../src/home/Motion/Motion'
import Car from '../../src/home/Car/Car'
import Shoe from '../../src/home/Shoe/Shoe'
export default createMaterialTopTabNavigator(
  {
    Popular: {
      screen: Popular,
      navigationOptions: {
        tabBarLabel: '热门'
      }
    },
    Store: {
      screen: Store,
      navigationOptions: {
        tabBarLabel: '百货'
      }
    },
    Phone: {
      screen: Phone,
      navigationOptions: {
        tabBarLabel: '手机'
      }
    },
    Device: {
      screen: Device,
      navigationOptions: {
        tabBarLabel: '电器'
      }
    },
    Woman: {
      screen: Woman,
      navigationOptions: {
        tabBarLabel: '女装'
      }
    },
    Food: {
      screen: Food,
      navigationOptions: {
        tabBarLabel: '食物'
      }
    },
    Motion: {
      screen: Motion,
      navigationOptions: {
        tabBarLabel: '运动'
      }
    },
    Car: {
      screen: Car,
      navigationOptions: {
        tabBarLabel: '汽车'
      }
    },
    Shoe: {
      screen: Shoe,
      navigationOptions: {
        tabBarLabel: '鞋子'
      }
    }
  },
  {
    initialRouteName: 'Popular',
    lazy: true,
    tabBarOptions: {
      scrollEnabled: true,
      upperCaseLabel: false, // 不大写
      activeTintColor: 'white', // 活动选项卡
      inactiveTintColor: 'white', // "非活动" 选项卡
      tabStyle : { // 选项卡样式
        width: 60,
      },  
      style: {
        backgroundColor: 'red' // 头部导航栏样式
      },
      indicatorStyle: {
        backgroundColor: 'white' // 指示器样式
      }
    }
  }
)
