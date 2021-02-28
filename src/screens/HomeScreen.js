import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, Dimensions, Linking } from 'react-native'
import { IconButton } from 'react-native-paper'
//import * as Permissions from 'expo-permissions'
const screenWidth = Dimensions.get('window').width
import styles from './components/allStyles'

//const Websites = [Alabama: https://dhr.alabama.gov/child-protective-services/child-abuse-neglect-reporting/, Alaska: http://dhss.alaska.gov/Pages/default.aspx, Arizona: https://dcs.az.gov/, Arkansas: https://humanservices.arkansas.gov/, California: http://www.childsworld.ca.gov/ , Colorado: https://www.colorado.gov/cdhs, Connecticut: https://portal.ct.gov/DCF, Delaware: https://kids.delaware.gov/, District of Columbia: https://cfsa.dc.gov/, Florida: https://www.myflfamilies.com/index.shtml, Georgia: https://dfcs.georgia.gov/, Hawaii: http://humanservices.hawaii.gov/, Idaho: http://healthandwelfare.idaho.gov/services-programs/children-families, Illinois: https://www2.illinois.gov/dcfs/Pages/default.aspx, Indiana: https://www.in.gov/dcs/, Iowa: https://dhs.iowa.gov/home, Kansas: http://www.dcf.ks.gov/Pages/default.aspx, Kentucky: http://dcfs.gov.ky/portal/page/portal/sochome, Louisiana: http://www.dss.state.la.us/, Maine: https://www.maine.gov/dhhs/ocfs/cw/, Maryland: http://dhs.maryland.gov/, Massachusetts: https://www.mass.gov/topics/health-social-services, Michigan: https://www.michigan.gov/mdhhs, Minnesota: https://mn.gov/dhs/people-we-serve/children-and-families/, Mississippi: https://www.mdhs.ms.gov/, Missouri: https://dss.mo.gov/ , Montana: https://dphhs.mt.gov/cfsd/index, Nebraska: http://dhhs.ne.gov/Pages/default.aspx, Nevada: http://dcfs.nv.gov/, New Hampshire: https://www.dhhs.nh.gov/dcyf/index.htm, New Jersey: https://www.nj.gov/dcf/index.shtml, New Mexico: https://cyfd.org/, New York: https://ocfs.ny.gov/main/, North Carolina: https://www.ncdhhs.gov/, North Dakota: http://www.nd.gov/dhs/services/childfamily/, Ohio: http://jfs.ohio.gov/ocf/index.stm, Oklahoma: http://www.okdhs.org/Pages/default.aspx, Oregon: https://www.oregon.gov/DHS/children/Pages/index.aspx, Pennsylvania: https://www.dhs.pa.gov/Pages/default.aspx, Puerto Rico: https://childcare.gov/state-resources?state=118&type=203, Rhode Island: http://www.dcyf.ri.gov/, South Carolina: https://dss.sc.gov/, South Dakota: https://dss.sd.gov/, Tennessee: https://www.tn.gov/content/tn/children-and-families.html, Texas: http://www.dfps.state.tx.us/, U.S. Virgin Islands: http://www.dhs.gov.vi/contact/index.html, Utah: https://dcfs.utah.gov/, Vermont: https://dcf.vermont.gov/, Virginia: https://www.dss.virginia.gov/family/cps/index.cgi, Washington: https://www.dcyf.wa.gov/, West Virginia: https://dhhr.wv.gov/bcf/Pages/default.aspx, Wisconsin: https://dcf.wisconsin.gov/, Wyoming: https://dfs.wyo.gov/]



export default class HomeScreen extends Component {
  constructor(props) {
	  super();
      this.state = {
        assetsLoaded: false,
      }
  }
  
  render() {

    return (

      <View style={styles.contentContainer}>

        <View style = {styles.container}>
          <Image style={styles.logoImage} source={require('../../assets/house.png')}/>
          <Text style={styles.homeTitle}>shelter</Text>
          <Text style={styles.homeText}>Locate a Child Protective Services Shelter near you!</Text>
          <IconButton style = {styles.mapIcon}
            icon = 'google-maps'
            color = 'green'
            size={screenWidth*0.18}
            onPress={() => {
              this.props.navigation.navigate('Map')
            }}
          />
        </View>
      </View>
    );
  }
}



	
const DATA = [
  {
    id: '0',
    title: 'Alabama',
  },
  {
    id: '1',
    title: 'Alaska',
  },
  {
    id: '2',
    title: 'Arizona',
  },
  {
    id: '3',
    title: 'Arkansas',
  },
  {
    id: '4',
    title: 'California',
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





