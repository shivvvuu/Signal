
import React from 'react'
import { Text, View } from '../components/Themed';
import Message from '../components/Message/Message';
import { StyleSheet,FlatList,SafeAreaView } from 'react-native';
import chatRoomData from '../assets/dummy-data/Chats'
import MessageInput from '../components/MessageInput/MessageInput';

export default function ChatRoomScreen() {
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