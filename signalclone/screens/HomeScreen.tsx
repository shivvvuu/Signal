import { StyleSheet,Image,FlatList} from 'react-native';
import { RootTabScreenProps } from '../types';
import ChatRoomItem from '../components/ChatRoomItem'
import { Text, View } from '../components/Themed';
import chatRoomData from '../assets/dummy-data/ChatRooms'



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
     <View style={styles.page}>
      <FlatList 
        data={chatRoomData}
        renderItem={({item})=><ChatRoomItem chatRoom={item}
        
        />
        
      }
      showsVerticalScrollIndicator={false}
      />
     </View>
  );
}

const styles = StyleSheet.create({
page:{
  flex:1,
}
});
