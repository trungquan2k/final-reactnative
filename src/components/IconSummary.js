import { View,Text,StyleSheet,Image} from "react-native"
import { AntDesign } from '@expo/vector-icons';

export  const IconSummary = ({icon,value,style}) => {
    return (
        <View style={styles.contentRow}>
                <Image  style={styles.tinyLogo} source={{uri:icon}} />
                <Text style={style} > {value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contentRow: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
    },
    tinyLogo: {
        width: 20,
        height: 20,
      },
})