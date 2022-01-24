import React, { useState} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Summary from './SummaryScreen';
import Information from './InformationScreen';
import HoursComponents from '../components/HoursComponents';
import FeatureComponent from '../components/FeatureComponent';
import ServiceComponent from '../components/ServiceComponent';
import MarketingComponent from '../components/MarketingComponent';
import { useNavigation } from '@react-navigation/native';
import { TAB_DETAIL_LABEL } from './constants';
import RatingAndServiceComponent from '../components/RatingandServiceComponent';



const CentreDetails  =  ({route})=> {
    const [active, setActive] = useState('SUMMARY');
    const navigation = useNavigation();
    const {centerId}= route.params;
    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons onPress={() => {navigation.goBack()}} style={styles.headerBack} name="arrow-back-sharp" size={20} color="#857E7F" />
                    <Text style={styles.headerTitle}>Centre Details</Text>
                </View>

                <View>
                    <ScrollView contentContainerStyle={styles.tabPane} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {Object.keys(TAB_DETAIL_LABEL)?.map((nameValue,index)=>
                        <Text 
                            key={index} 
                            onPress={() => { setActive(TAB_DETAIL_LABEL[nameValue].label) }} 
                            style={[styles.tabItem, { 
                                color: active == TAB_DETAIL_LABEL[nameValue].label ? '#DB147F' : '#857E7F',
                                backgroundColor: active == TAB_DETAIL_LABEL[nameValue].label ? 'white' : '#F7F8F9'                               
                                }]}>
                        {TAB_DETAIL_LABEL[nameValue].text}
                        </Text>)}
                    </ScrollView>
                </View>
              
                {active == TAB_DETAIL_LABEL.SUMMARY.label&& <Summary centerId={centerId} />  }
                {active == TAB_DETAIL_LABEL.INFORMATION.label && <Information  centerId={centerId}  />  }
                {active == TAB_DETAIL_LABEL.HOURS.label&& <HoursComponents centerId={centerId}   /> }
                {active == TAB_DETAIL_LABEL.FEATURES.label && <FeatureComponent centerId={centerId}   />  }
                {active == TAB_DETAIL_LABEL.SERVICES.label && <ServiceComponent  centerId={centerId}   />  }
                {active == TAB_DETAIL_LABEL.REVIEWS.label && <RatingAndServiceComponent  centerId={centerId}   />  }
                {active == TAB_DETAIL_LABEL.MARKETING.label && <MarketingComponent centerId={centerId}   />  } 
            </View>
    );
}

export default CentreDetails;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7F8F9'
    },
    header: {
        height: 88,
        paddingHorizontal: 20,
        paddingBottom: 12,
        justifyContent: 'flex-end',
        backgroundColor:'white'
    },
    headerBack: {
        position: 'absolute',
        left: 20,
        bottom: 12,
        zIndex:10
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center'
    },
    tabPane: {
        paddingVertical: 12,
        paddingLeft: 20,
        paddingRight: 8,
    },
    tabItem: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 12,
        fontSize: 10,
        fontWeight: '700',
        borderRadius:12
    }
})