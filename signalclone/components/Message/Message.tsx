import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from '../../components/Themed';

const Message = ({message}) => {

    const myID = 'u1'
    const isMe = message.user.id == myID
    const blue = '#3777f0'
    const gray ='gray'


  return (
    <View style={[
        styles.cointainer, isMe ? styles.rightContainer : styles.leftContainer ]}>
      <Text style={{color : isMe ? 'black':'white' }}>{message.content}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    cointainer:{
        padding:10,
        margin:10,
        borderRadius:10,
        maxWidth:'70%'
    },

    leftContainer:{
        backgroundColor:'#3777f0',
        marginLeft:10,
        marginRight:'auto'
    },

    rightContainer:{
        backgroundColor:'gray',
        marginLeft:'auto',
        marginRight:10
    }

   
})