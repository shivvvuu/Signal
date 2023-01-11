import React from 'react';
import { StyleSheet,Image,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import EditScreenInfo from '../EditScreenInfo';
import { Text, View } from '../Themed';
import { RootTabScreenProps } from '../../types';
import styles from './styles';
export default function UserItem({user }) {
    

    const navigation = useNavigation();

    const onPress = () => {
      //creat a chatRoom

    }

    return(
      <Pressable onPress={onPress} style={styles.container}>
         <Image source={{uri : user.imageUri}} style={styles.image}/>
        <View style={styles.rightContainer}>
          <View style={styles.row }>
            <Text style={styles.name}>{user.name}</Text>
          </View>
        </View>
      </Pressable>
    );
}

