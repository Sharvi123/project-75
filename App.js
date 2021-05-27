import React from 'react';
import {Text, View , Image} from 'react-native';
import writeStoryScreen from '../screens/writeStoryScreen';
import readStoryScreen from '../screens/readStoryScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
  return (
    <View>
      <AppContainer />
    </View>
  );
  }
}
const TabNavigator= createBottomTabNavigator({
  writeStoryScreen:{screens:writeStoryScreen},
  readStoryScreen: {screens:readStoryScreen},
},
{
defaultNavigationOptions :({navigation})=>({
  tabBarIcon:({})=>{
    const routeName=navigation.state.routeName
    if(routeName==='writeStoryScreen'){
      return(
        <Image
        source={require('./assets/write.png')}
        style={{width:35,height:35}} />
      )
    }
    else if(routeName==='readStoryScreen'){
      return(
        <Image 
        source={require('./assets/read.png')}
        style={{width:35,height:35}} />
      )
    }
  }
})
})
const AppContainer=createAppContainer(TabNavigator)


