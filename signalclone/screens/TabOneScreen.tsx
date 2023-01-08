import { StyleSheet,Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (

      
        <View style={styles.container}>
         <Image source={{uri : 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} style={styles.image}/>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>4</Text>
          </View>
        <View style={styles.rightContainer}>
          <View style={styles.row }>
            <Text style={styles.name}>Elon MUsk</Text>
            <Text style={styles.text}>11:00</Text>
          </View>
            <Text numberOfLines={1} style={styles.text}>hola this is messgae lkmlesknmrlenwlnrlknelwk;jtn;lkjerntkljnrekjngtkljrenkgjnkrjengkerngknekrgn</Text>
        </View>
      </View>

    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
