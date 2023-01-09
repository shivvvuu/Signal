import { Text, View } from '../../components/Themed';
import React from 'react'
import { StyleSheet,TextInput } from 'react-native';
import { SimpleLineIcons ,Feather,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

const MessageInput = () => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons name='emotsmile' size={24} color='gray' style={styles.icon} />
        <TextInput 
            style={styles.input}
            placeholder="Drop the Message..."
        />
        <Feather name='camera' size={24} color='gray' style={{margin:5}} />
        <MaterialCommunityIcons name='microphone' size={24} color='gray' />
      </View>
      <View style={styles.buttonContainer}>
        <AntDesign name='plus' size={24} color='white' />
      </View>
    </View>
  )
}

export default MessageInput

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        padding:10,
    },

    inputContainer:{
        backgroundColor:'#f2f2f2',
        flex:1,
        marginRight:10,
        borderRadius:25,
        borderWidth:1,
        borderColor:'dedede',
        alignItems:'center',
        flexDirection:'row',
        padding:5
    },

    input:{
        flex:1,
        marginHorizontal:5,
    },

    icon:{
        marginHorizontal:5,
    },

    buttonContainer:{
        width:50,
        height:50,
        backgroundColor:'#3777f0',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        
    },

    buttonText:{
        color:'white',
        fontSize:35,

    }
})