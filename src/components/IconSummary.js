import { View,Text,StyleSheet} from "react-native"
import { AntDesign } from '@expo/vector-icons';

export  const IconSummary = ({value,style}) => {
    return (
        <View style={styles.contentRow}>
                <AntDesign name="upcircle" size={24} color="#32A4FC" />
                <Text style={style}> {value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contentRow: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
    },
})