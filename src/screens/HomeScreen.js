import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, Dimensions, Linking } from 'react-native'
import { IconButton } from 'react-native-paper'
//import * as Permissions from 'expo-permissions'
//import * as Font from 'expo-font'
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
  
 // async componentDidMount(){
    // await Font.loadAsync({
    //   'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
    //   'Lato-Regular' : require('../../assets/fonts/Lato-Regular.ttf'),
    // })
    // this.setState({ assetsLoaded: true })
 // }
  render() {

    return (

      <View style={styles.contentContainer}>

        <View style = {styles.container}>
          <Text style={styles.homeTitle}>Shelter</Text>
        <View style = {styles.container}>
          <Text style={styles.textAlign}>Locate a Child Protective Services Shelter near you!</Text>

        <View style = {styles.container}>
          
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
    </View>
    </View>
    );
  }
}

