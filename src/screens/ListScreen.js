import React, {Component, useState, useEffect} from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Linking} from 'react-native'
import { Appbar } from 'react-native-paper'
import styles from './components/allStyles'
const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
  const DATA = [
    {
      id: '0',
      title: 'Alabama',
      url: 'https://dhr.alabama.gov/child-protective-services/child-abuse-neglect-reporting/'
    },
    {
      id: '1',
      title: 'Alaska',
      url: 'http://dhss.alaska.gov/Pages/default.aspx'
    },
    {
      id: '2',
      title: 'Arizona',
      url: 'https://dcs.az.gov/'
    },
    {
      id: '3',
      title: 'Arkansas',
      url: 'https://humanservices.arkansas.gov/'
    },
    {
      id: '4',
      title: 'California',
      url: 'http://www.childsworld.ca.gov/'
    },
    {
      id: '5',
      title: 'Colorado',
    },
    {
      id: '6',
      title: 'Connecticut',
    },
    {
      id: '7',
      title: 'Delaware',
    },
    {
      id: '8',
      title: 'Florida',
    },
    {
      id: '9',
      title: 'Georgia',
    },
    {
      id: '10',
      title: 'Hawaii',
    },
    {
      id: '11',
      title: 'Idaho',
    },
    {
      id: '12',
      title: 'Illinois',
    },
    {
      id: '13',
      title: 'Indiana',
    },
    {
      id: '14',
      title: 'Iowa',
    },
    {
      id: '15',
      title: 'Kansas',
    },
    {
      id: '16',
      title: 'Kentucky',
    },
    {
      id: '17',
      title: 'Louisiana',
    },
    {
      id: '18',
      title: 'Maine',
    },
    {
      id: '19',
      title: 'Maryland',
    },
    {
      id: '20',
      title: 'Massachusetts',
    },
    {
      id: '21',
      title: 'Michigan',
    },
    {
      id: '22',
      title: 'Minnesota',
    },
    {
      id: '23',
      title: 'Mississippi',
    },
    {
      id: '24',
      title: 'Missouri',
    },
    {
      id: '25',
      title: 'Montana',
    },
    {
      id: '26',
      title: 'Nebraska',
    },
    {
      id: '27',
      title: 'Nevada',
    },
    {
      id: '28',
      title: 'New Hampshire',
    },
    {
      id: '29',
      title: 'New Jersey',
    },
    {
      id: '30',
      title: 'New Mexico',
    },
    {
      id: '31',
      title: 'New York',
    },
    {
      id: '32',
      title: 'North Carolina',
    },
    {
      id: '33',
      title: 'North Dakota',
    },
    {
      id: '34',
      title: 'Ohio',
    },
    {
      id: '35',
      title: 'Oklahoma',
    },
    {
      id: '36',
      title: 'Oregon',
    },
    {
      id: '37',
      title: 'Pennsylvania',
    },
    {
      id: '38',
      title: 'Rhode Island',
    },
    {
      id: '39',
      title: 'South Carolina',
    },
    {
      id: '40',
      title: 'South Dakota',
    },
    {
      id: '41',
      title: 'Tennessee',
    },
    {
      id: '42',
      title: 'Texas',
    },
    {
      id: '43',
      title: 'Utah',
    },
    {
      id: '44',
      title: 'Vermont',
    },
    {
      id: '45',
      title: 'Virginia',
    },
    {
      id: '46',
      title: 'Washington',
    },
    {
      id: '47',
      title: 'West Virginia',
    },
    {
      id: '48',
      title: 'Wisconsin',
    },
    {
      id: '49',
      title: 'Wyoming',
    },
  ];
export default function ListScreen({navigation}) {
    

      const [selectedId, setSelectedId] = useState(null);

      const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    
        return (
          <Item
            item={item}
            onPress={() => {
                setSelectedId(item.id);
                Linking.openURL(item.url)
                }
            }
            style={{ backgroundColor }}
          />
        );
      };
    
      
      return (
        <SafeAreaView style={styles.container}>
        <Appbar.Header
            dark = {true}
            style={{backgroundColor:'#bdbdbd'}}
          >
          <Appbar.Action 
            icon = 'arrow-left'
            size = {18}
              onPress={() =>{
                navigation.navigate('Home')
              }}
          />
          </Appbar.Header>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
        />
    </SafeAreaView>
      );
}





