import { Text, View } from '../../components/Themed';
import React,{useState} from 'react'
import { StyleSheet,TextInput,Pressable } from 'react-native';
import { SimpleLineIcons ,Feather,MaterialCommunityIcons,AntDesign, Ionicons } from '@expo/vector-icons';

const MessageInput = () => {

    const [message,setMessage] = useState('');

    const sendMessage = () =>{
        console.warn("sending",message)

        setMessage('');
    }

    const onPlusClicked = () => {
        
    }

    const onPress = () => {
        if(message){
            sendMessage();
        }else{
            onPlusClicked();
        }
    }

    // console.warn(message);

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons name='emotsmile' size={24} color='gray' style={styles.icon} />
        <TextInput 
            style={styles.input}
            value={message}
            onChangeText={ setMessage}
            placeholder="Drop the Message..."
        />
        <Feather name='camera' size={24} color='gray' style={{margin:5}} />
        <MaterialCommunityIcons name='microphone' size={24} color='gray' />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? <Ionicons name='send' size={20} color='white'/>:<AntDesign name='plus' size={24} color='white' />}
      </Pressable>
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
        width:40,
        height:40,
        backgroundColor:'#3777f0',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        marginTop:3
        
    },

    buttonText:{
        color:'white',
        fontSize:35,

    }
})