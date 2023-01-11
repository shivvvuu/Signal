
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      padding:10,
    },
    text : {
      color:'gray'
    },
    image:{
      height:60,
      width:60,
      borderRadius:50,
      marginRight:10,
    },
    row:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    name:{
      fontWeight:'bold',
      fontSize:18,
      
  
    },
    rightContainer:{
      // backgroundColor:'blue',
      flex:1,
      marginTop:5,
    },
    badgeContainer:{
      backgroundColor:'#3872E9',
      width:20,
      height:20,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      borderWidth:1,
      borderColor:'black',
      position:'absolute',
      left:47,
      top:10
    },
    badgeText:{
      color:'white'
    }
  });

  export default styles;