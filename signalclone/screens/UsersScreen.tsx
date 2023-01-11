import { StyleSheet,Image,FlatList} from 'react-native';
import { RootTabScreenProps } from '../types';
import ChatRoomItem from '../components/ChatRoomItem'
import { Text, View } from '../components/Themed';
import Users from '../assets/dummy-data/Users'
import UserItem from './../components/UserItem/UserItem';



export default function UsersScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
     <View style={styles.page}>
      <FlatList 
        data={Users}
        renderItem={({item})=><UserItem user={item}
        
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
