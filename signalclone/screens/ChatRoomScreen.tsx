
import React from 'react'
import { Text, View } from '../components/Themed';
import Message from '../components/Message/Message';
import { StyleSheet,FlatList,SafeAreaView } from 'react-native';
import chatRoomData from '../assets/dummy-data/Chats'
import { useRoute,useNavigation } from '@react-navigation/core';
import MessageInput from '../components/MessageInput/MessageInput';

export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  // console.warn("Display chat room:",route.params?.id)

  navigation.setOptions({title:'elon'})

  return (
    <SafeAreaView style={styles.page} >
        <FlatList
            data={chatRoomData.messages}
            renderItem={({item}) => <Message message={item}/>}
            inverted
        />
        <MessageInput/>
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
    }
})