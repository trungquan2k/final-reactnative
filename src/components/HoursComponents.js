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

  const Button = ({value, active, setActive }) => {
    return (
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
    width: "48%",
  },
  timeTitle: {
    marginBottom: 4,
  },
  timeItem: {
    paddingVertical: 6,
    borderRadius: 8,
    width:58,
    textAlign:'center',
    backgroundColor: "#E9F4FF",
  },
});
