import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute, useNavigation } from '@react-navigation/native';

import { api } from '../services/api';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import logo from '../assets/logo.png';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';


type RootParamsProps = {
   user: string
};

type User = {
  _id: string;
  name: string;
  user: string;
  bio: string;
  avatar: string;
  likes: string[]; 
  dislikes: string[]; 
}

export function Main() {
  const [devs, setDevs] = useState<User[]>([]);
  
  const navigation = useNavigation()
  const route = useRoute()
  
  const { user } = route.params as RootParamsProps
  
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs', {
        headers: {
          user,
        },
      });
      setDevs(response.data);
    }

    loadDevs();
  }, [user]);

  async function handleLike() {
    const [dev, ...rest] = devs

    await api.post(`/devs/${dev._id}/likes`, null, {
      headers: {user}
    })

    setDevs(rest)
  }
  
  async function handleDislike() {
    const [dev, ...rest] = devs

    await api.post(`/devs/${dev._id}/dislikes`, null, {
      headers: {user}
    })

    setDevs(rest)
  }

  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate('login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Image style={styles.logo} source={logo} />
      </TouchableOpacity>
      <View style={styles.cardsContainer}>
        {
          devs.length === 0 ? (
            <Text style={styles.empty}>Acabou !</Text>
          ) : (
            devs.map((dev, index) => (
              <View
                key={dev._id}
                style={[styles.card, {zIndex: devs.length - index}]}
              >
                <Image style={styles.avatar} source={{ uri: dev.avatar }}/>
                <View style={styles.footer}>
                  <Text style={styles.name}>{dev.name}</Text>
                  <Text style={styles.bio} numberOfLines={3}>{dev.bio}</Text>
                </View>
              </View>
            ))
          )
        }
      </View>
      
      {
        devs.length > 0 && (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleDislike}
            >
              <Image source={dislike}/>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handleLike}
            >
              <Image source={like}/>
            </TouchableOpacity>
          </View>
        )
      }

      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    marginTop: 80,
  },

  empty: {
    alignSelf: 'center',
    color: '#999',
    fontSize: 24,
    fontWeight: 'bold',
  },

  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },

  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  avatar: {
    flex: 1,
    height: 300,
  },

  footer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  bio: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
    lineHeight: 18,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
