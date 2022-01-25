import React, { useContext, useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import SwitchToggle from "react-native-switch-toggle";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import CenterContext from "../context/CenterContext";
import { getMarketings, getDetail } from "../../services";

const MarketingComponent = ({ centerId }) => {
  const [allMarketings, setMarketings] = useState([]);
  const [active, setActive] = useState([]);
  const [dataModel, setDataModel] = useState();
  const centers = useContext(CenterContext);
  const refRBSheet = useRef();

  useEffect(async () => {
    const marketings = await getMarketings();
    setMarketings([...marketings]);
    setActive([...getDetail(centers, centerId, "marketing")]);
  }, []);

  const RenderItem = ({ item }) => {
    const { price, id, name, description, time } = item;
    const check = active.includes(id);
    const toggleSwitch = () => {
      if (check) {
        active.splice(active.indexOf(id), 1);
        setActive([...active]);
      } else {
        setActive([...active, id]);
      }
    };
    return (
      <View style={styles.item}>
        <View style={styles.itemContent}>
          <View style={styles.itemRow}>
            <Text style={styles.itemName}>{name}</Text>
            <TouchableOpacity
              style={styles.itemIcon}
              onPress={() => {
                setDataModel({ name: name, description: description });
                refRBSheet.current.open();
              }}
            >
              <Ionicons name="information-circle" size={14} color="#857E7F" />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <Text style={styles.itemPrice}>${price}</Text>
            <Text> / {time}</Text>
          </View>
        </View>
        <SwitchToggle
          switchOn={check}
          onPress={() => toggleSwitch()}
          containerStyle={styles.itemSwitch}
          circleStyle={styles.itemSwCircle}
          circleColorOff="#FFFFFF"
          circleColorOn="#FFFFFF"
          backgroundColorOn="#DB147F"
          backgroundColorOff="#BEBEBE"
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={allMarketings}
        renderItem={RenderItem}
        keyExtractor={(item, index) => `marketings${index}`}
        style={styles.flatList}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={false}
        height={216}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(45, 31, 33, 0.52)",
          },
          container: {
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            paddingHorizontal: 16,
          },
        }}
      >
        <View>
          <Text style={styles.btTitle}>{dataModel?.name}</Text>
          <AntDesign
            style={styles.btClose}
            name="close"
            size={20}
            color="#2D1F21"
            onPress={() => refRBSheet.current.close()}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.btContent}>{dataModel?.description}</Text>
        </ScrollView>
      </RBSheet>
    </View>
  );
};

export default MarketingComponent;

const styles = StyleSheet.create({
  btTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "bold",
    paddingVertical: 20,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F5",
  },
  btContent: {
    paddingTop: 16,
    lineHeight: 24,
  },
  btClose: {
    position: "absolute",
    top: 22,
    right: 0,
  },
  item: {
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemContent: {
    flexDirection: "column",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemName: {
    lineHeight: 24,
    fontWeight: "700",
  },
  itemIcon: {
    marginBottom: 16,
    marginLeft: 4,
  },
  itemPrice: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  itemSwitch: {
    width: 36,
    height: 22,
    borderRadius: 25,
    padding: 3,
  },
  itemSwCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
  },
});
