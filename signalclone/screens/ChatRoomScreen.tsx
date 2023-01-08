
import React from 'react'
import { Text, View } from '../components/Themed';
import Message from '../components/Message/Message';
import { StyleSheet,FlatList } from 'react-native';
import chatRoomData from '../assets/dummy-data/Chats'

export default function ChatRoomScreen() {
  return (
    <View style={styles.page} >
        <FlatList
            data={chatRoomData.messages}
            renderItem={({item}) => <Message message={item}/>}
            inverted
        />
       
    </View>
  )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
    }
})