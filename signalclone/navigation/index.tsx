/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable, SafeAreaView, useWindowDimensions } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen'
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Text, View } from '../components/Themed';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: HomeHeader}} /> 
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={{headerTitle:ChatRoomHeader,headerBackTitleVisible:false,title:'elon musk'}}  />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const HomeHeader = (props) =>{
  const {width} = useWindowDimensions();
  return(
    <SafeAreaView style={{flexDirection:'row' , justifyContent:'space-between',width:'97%',padding:3,alignItems:'center' }}>
      <Image 
        source={ {uri :'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
        style={{width:30,height:30,borderRadius:30}}
      />
      <Text style={{flex:1,textAlign:'center' ,marginLeft:50,fontWeight:'bold'}}>Signal</Text>
      <Feather name='camera' size={24} color='gray' style={{marginHorizontal:10}} />
      <Feather name='edit-2' size={24} color='gray' style={{marginHorizontal:10}} />
    </ SafeAreaView>
  )
}

const ChatRoomHeader = (props) =>{
  const {width} = useWindowDimensions();
  return(
    <SafeAreaView style={{flexDirection:'row' , justifyContent:'space-between',width:width-50,padding:3,alignItems:'center',marginLeft:-25 }}>
      <Image 
        source={ {uri :'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
        style={{width:30,height:30,borderRadius:30}}
      />
      <Text style={{flex:1 ,marginLeft:10,fontWeight:'bold'}}>{props.children}</Text>
      <Feather name='camera' size={24} color='gray' style={{marginHorizontal:10}} />
      <Feather name='edit-2' size={24} color='gray' style={{marginHorizontal:10}} />
    </ SafeAreaView>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
