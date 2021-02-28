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
      url: 'https://www.colorado.gov/cdhs'
    },
    {
      id: '6',
      title: 'Connecticut',
      url: 'https://portal.ct.gov/DCF'
    },
    {
      id: '7',
      title: 'Delaware',
      url: 'https://kids.delaware.gov/'
    },
    {
      id: '8',
      title: 'Florida',
      url: 'https://www.myflfamilies.com/index.shtml'
    },
    {
      id: '9',
      title: 'Georgia',
      url: 'https://dfcs.georgia.gov/'
    },
    {
      id: '10',
      title: 'Hawaii',
      url: 'http://humanservices.hawaii.gov/'
    },
    {
      id: '11',
      title: 'Idaho',
      url: 'http://healthandwelfare.idaho.gov/services-programs/children-families'
    },
    {
      id: '12',
      title: 'Illinois',
      url: 'https://www2.illinois.gov/dcfs/Pages/default.aspx'
    },
    {
      id: '13',
      title: 'Indiana',
      url: 'https://www.in.gov/dcs/'
    },
    {
      id: '14',
      title: 'Iowa',
      url: 'https://dhs.iowa.gov/home'
    },
    {
      id: '15',
      title: 'Kansas',
      url: 'http://www.dcf.ks.gov/Pages/default.aspx'
    },
    {
      id: '16',
      title: 'Kentucky',
      url: 'http://dcfs.gov.ky/portal/page/portal/sochome'
    },
    {
      id: '17',
      title: 'Louisiana',
      url: 'http://www.dss.state.la.us/'
    },
    {
      id: '18',
      title: 'Maine',
      url: 'https://www.maine.gov/dhhs/ocfs/cw/'
    },
    {
      id: '19',
      title: 'Maryland',
      url: 'http://dhs.maryland.gov/'
    },
    {
      id: '20',
      title: 'Massachusetts',
      url: 'https://www.mass.gov/topics/health-social-services'
    },
    {
      id: '21',
      title: 'Michigan',
      url: 'https://www.michigan.gov/mdhhs'
    },
    {
      id: '22',
      title: 'Minnesota',
      url: 'https://mn.gov/dhs/people-we-serve/children-and-families/'
    },
    {
      id: '23',
      title: 'Mississippi',
      url: 'https://www.mdhs.ms.gov/'
    },
    {
      id: '24',
      title: 'Missouri',
      url: 'https://dss.mo.gov/'
    },
    {
      id: '25',
      title: 'Montana',
      url: 'https://dphhs.mt.gov/cfsd/index'
    },
    {
      id: '26',
      title: 'Nebraska',
      url: 'http://dhhs.ne.gov/Pages/default.aspx'
    },
    {
      id: '27',
      title: 'Nevada',
      url: 'http://dcfs.nv.gov/'
    },
    {
      id: '28',
      title: 'New Hampshire',
      url: 'https://www.dhhs.nh.gov/dcyf/index.htm'
    },
    {
      id: '29',
      title: 'New Jersey',
      url: 'https://www.nj.gov/dcf/index.shtml'
    },
    {
      id: '30',
      title: 'New Mexico',
      url: 'https://cyfd.org/'
    },
    {
      id: '31',
      title: 'New York',
      url: 'https://ocfs.ny.gov/main/'
    },
    {
      id: '32',
      title: 'North Carolina',
      url: 'https://www.ncdhhs.gov/'
    },
    {
      id: '33',
      title: 'North Dakota',
      url: 'http://www.nd.gov/dhs/services/childfamily/'
    },
    {
      id: '34',
      title: 'Ohio',
      url: 'http://jfs.ohio.gov/ocf/index.stm'
    },
    {
      id: '35',
      title: 'Oklahoma',
      url: 'http://www.okdhs.org/Pages/default.aspx'
    },
    {
      id: '36',
      title: 'Oregon',
      url: 'https://www.oregon.gov/DHS/children/Pages/index.aspx'
    },
    {
      id: '37',
      title: 'Pennsylvania',
      url: 'https://www.dhs.pa.gov/Pages/default.aspx'
    },
    {
      id: '38',
      title: 'Rhode Island',
      url: 'http://www.dcyf.ri.gov/'
    },
    {
      id: '39',
      title: 'South Carolina',
      url: 'https://dss.sc.gov/'
    },
    {
      id: '40',
      title: 'South Dakota',
      url: 'https://dss.sd.gov/'
    },
    {
      id: '41',
      title: 'Tennessee',
      url: 'https://www.tn.gov/content/tn/children-and-families.html'
    },
    {
      id: '42',
      title: 'Texas',
      url: 'http://www.dfps.state.tx.us/'
    },
    {
      id: '43',
      title: 'Utah',
      url: 'https://dcfs.utah.gov/'
    },
    {
      id: '44',
      title: 'Vermont',
      url: 'https://dcf.vermont.gov/'
    },
    {
      id: '45',
      title: 'Virginia',
      url: 'https://www.dss.virginia.gov/family/cps/index.cgi'
    },
    {
      id: '46',
      title: 'Washington',
      url: 'https://www.dcyf.wa.gov/'
    },
    {
      id: '47',
      title: 'West Virginia',
      url: 'https://dhhr.wv.gov/bcf/Pages/default.aspx'
    },
    {
      id: '48',
      title: 'Wisconsin',
      url: 'https://dcf.wisconsin.gov/'
    },
    {
      id: '49',
      title: 'Wyoming',
      url: 'https://dfs.wyo.gov/'
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





