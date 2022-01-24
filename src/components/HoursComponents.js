import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CenterContext from "../context/CenterContext";

const HoursComponents = ({ centerId }) => {
    const {centers:[centers]} = useContext(CenterContext);
    const { hours } = centers.find(v => v.id === centerId);
    const [activeOne, setActiveOne] = useState(hours.normal.Mon_Fri);
    const [activeTwo, setActiveTwo] = useState(hours.term.Mon_Fri);
    const [activeThree, setActiveThree] = useState(hours.holidays.Mon_Fri);
    const Hour = ({ title, item }) => {

<<<<<<< HEAD
        const { Mon_Fri, Sat, Sun } = item;

=======
const HoursComponents = ({ centerId }) => {
    const [activeButton, setActiveButton] = useState('Monday')
    const centers = useContext(CenterContext);
    const { hours } = centers.find(v => v.id === centerId);

    const Hour = ({ title, item }) => {

        const { Mon_Fri, Sat, Sun } = item;

>>>>>>> 947360d (done Ui Dashboard)
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>{}} style={styles.btnSelected}>
                            <Text style={styles.textLight}>Mon-Fri</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} style={styles.btnSelected}>
                            <Text style={styles.textLight}>Sat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} style={styles.btnSelected}>
                            <Text style={styles.textLight}>Sun</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.bodyLeft}>
                            <Text style={styles.textDark}>Morning</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.hours}>{Mon_Fri.morning.start}</Text>
                                <Text style={styles.hours}>{Mon_Fri.morning.end}</Text>
                            </View>
                        </View>
                        <View >
                            <Text style={styles.textDark}>Afternoon</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.hours}>{Mon_Fri.afternoon.start}</Text>
                                <Text style={styles.hours}>{Mon_Fri.afternoon.end}</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        );
    }

  const Button = ({value, active, setActive }) => {
    return (
<<<<<<< HEAD
      <TouchableOpacity
        onPress={() => setActive(value)}
        style={[
          styles.button,
          { backgroundColor: active.title == value.title ? "#DB147F" : null },
        ]}
      >
        <Text
          style={[
            styles.buttonTitle,
            { color: active.title == value.title ? "white" : "#857E7F" },
          ]}
        >
          {value.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const Time = ({ title, active }) => {
    return (
      <View style={styles.timeContainer}>
        <Text style={styles.timeTitle}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.timeItem}>{active.start}</Text>
          <Text style={styles.timeItem}>{active.end}</Text>
        </View>
      </View>
    );
  };
  const Block = ({ title,values, active, setActive }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.content}>
          <View style={[styles.row, { marginBottom: 24 }]}>
            <Button value={values.Mon_Fri} active={active} setActive={setActive} />
            <Button value={values.Sat} active={active} setActive={setActive} />
            <Button value={values.Sun} active={active} setActive={setActive} />
          </View>
          <View style={styles.row}>
            <Time title="Morning" active={active.morning} />
            <Time title="Afternoon" active={active.afternoon} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block title="Normal" values={hours.normal} active={activeOne} setActive={setActiveOne} />
      <Block title="School Term" values={hours.term} active={activeTwo} setActive={setActiveTwo} />
      <Block
        title="School Holidays"
        values={hours.holidays}
        active={activeThree}
        setActive={setActiveThree}
      />
    </ScrollView>
  );
};

export default HoursComponents;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 8,
  },
  title: {
    paddingVertical: 8,
    fontWeight: "bold",
  },
  content: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 4,
    borderRadius: 8,
    width: 86,
  },
  buttonTitle: {
    lineHeight: 24,
    textAlign: "center",
  },
  timeContainer: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F2F2F2",
    width: 146,
  },
  timeTitle: {
    marginBottom: 4,
  },
  timeItem: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#E9F4FF",
  },
});
=======
        <>
            <Hour title="Normal" item={hours.normal} />
            <Hour title="School Holidays" item={hours.holidays} />
            <Hour title="School Term" item={hours.term} />
        </>
    )
}

export default HoursComponents;
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    content: {
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: "white",
        borderRadius: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    title: {
        fontWeight: 'bold', fontSize: 16, color: "#2D1F21", paddingVertical: 10
    },
    btnSelected: {
        width: 86,
        height: 32,
        backgroundColor: "#DB147F",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#DB147F",
        borderWidth: 1,
    },
    btnNotSelected: {
        width: 86,
        height: 32,
        backgroundColor: "white",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#DB147F",
        borderWidth: 1,
    },
    textLight: {
        color: 'white'
    },
    textDark: {
        color: 'black'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 10

    },
    hours: {
        backgroundColor: '#E9F4FF',
        marginTop: 10,
        height: 36,
        width: 58,
        marginRight: 10,
        borderRadius: 8,
        textAlign: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,

    }
})
>>>>>>> 947360d (done Ui Dashboard)
