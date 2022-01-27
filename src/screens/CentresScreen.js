import React, { useState, useContext, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import {
  Ionicons,
  AntDesign,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Searchbar, RadioButton } from "react-native-paper";
import { getGeneralInfo } from "../../services.js";
import CenterContext from "../context/CenterContext";
import RBSheet from "react-native-raw-bottom-sheet";

const Centres = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [checked, setChecked] = useState("all");
  const [isModal, setModal] = useState(false);
  const  {centers:[centers,setCenters]}= useContext(CenterContext)
  const refRBSheet = useRef();
  const Header = () => {
    return (
      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Search Centre name"
          onChangeText={(value) => setSearchQuery(value)}
          value={searchQuery}
          style={{
            width: "85%",
            height: 42,
            backgroundColor: "white",
            elevation: 0,
          }}
        />
        <TouchableOpacity style={styles.searchBarFilter}>
          <Ionicons name="ios-filter-outline" size={20} color="#ABA7A7" />
        </TouchableOpacity>
      </View>
    );
  };

  const Item = ({ item }) => {
    const { id, name, address, kindService, children, waitlisted, services } =
      item;
    const servicesNumber = services.length;

    return (
      <View style={styles.itemBox}>
        <Text style={styles.itemPoint}>9.8</Text>
        <Image
          style={styles.itemLogo}
          source={require("../../assets/images/logo.png")}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CentreDetails", { centerId: id });
          }}
        >
          <View style={{ overflow: "hidden" }}>
            <Image
              source={require("../../assets/images/avatar.jpg")}
              style={styles.itemImg}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.itemBody}>
          <Text style={styles.itemTitle}>{name}</Text>
          <View style={[styles.itemInfo, { width: "100%" }]}>
            <Image source={require("../../assets/icons/ic-map.png")} />
            <Text style={{ marginLeft: 6 }}>
              {address.LGA} {address.Region}
            </Text>
          </View>
          <View style={styles.itemRow}>
            <View style={styles.itemInfo}>
              <Image source={require("../../assets/icons/ic-baby.png")} />
              <Text style={{ marginLeft: 6 }}>{children} children</Text>
            </View>
            <View style={styles.itemInfo}>
              <Image source={require("../../assets/icons/ic-wailist.png")} />
              <Text style={{ marginLeft: 6 }}>{waitlisted} waitlisted</Text>
            </View>
          </View>
          <View style={styles.itemRow}>
            <View style={styles.itemInfo}>
              <Image source={require("../../assets/icons/ic-Kindi.png")} />
              <Text style={styles.itemText}>{kindService}</Text>
            </View>
            <View style={styles.itemInfo}>
              <Image source={require("../../assets/icons/ic-service.png")} />
              <Text style={{ marginLeft: 6 }}>{servicesNumber} services</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const HeaderItem = ({ title, value, children }) => (
    <View style={isModal ? styles.sliderItemOpen : styles.sliderItem}>
      <View style={styles.sliderRow}>
        {children}
        {!isModal && <Text style={styles.sliderTitle}>{title}</Text>}
      </View>
      <Text style={isModal ? styles.sliderValueOpen : styles.sliderValue}>
        {value}
      </Text>
    </View>
  );
  const modalHeader = () => (
    <View
      style={[
        styles.modalItem,
        { backgroundColor: checked === "all" ? "#FFF0FB" : null },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.modalImg}
          source={require("../../assets/images/avatar.jpg")}
        />
        <Text>All Centre</Text>
      </View>
      <RadioButton
        status={checked === "all" ? "checked" : "unchecked"}
        onPress={() => setChecked("all")}
        color="#DB147F"
      />
    </View>
  );

  const modalItem = ({ item }) => (
    <View
      style={[
        styles.modalItem,
        { backgroundColor: checked === item.id ? "#FFF0FB" : null },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.modalImg}
          source={require("../../assets/images/avatar.jpg")}
        />
        <Text>{item.name}</Text>
      </View>
      <RadioButton
        status={checked === item.id ? "checked" : "unchecked"}
        onPress={() => setChecked(item.id)}
        color="#DB147F"
      />
    </View>
  );

  if (!centers.length)
    return (
      <View style={{ flex: 1, alignContent: "center" }}>
        <Text>Loading......</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Pressable
          style={styles.headerSelect}
          onPress={() => refRBSheet.current.open()}
        >
          <Entypo name="shop" size={20} color="white" />
          <Text style={styles.headerTitle}>All Centres</Text>
          <AntDesign name="down" size={20} color="white" />
        </Pressable>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={[styles.slider, { height: isModal ? 70 : 120 }]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <HeaderItem title="Total Centres" value="122">
          <Entypo
            name="shop"
            size={20}
            color="pink"
            style={[styles.headerIcon, { backgroundColor: "#FFF0FB" }]}
          />
        </HeaderItem>
        <HeaderItem title="Total Places" value={"3200"}>
          <Ionicons
            name="location-outline"
            size={20}
            color="#FB8429"
            style={[styles.headerIcon, { backgroundColor: "#FFF4EC" }]}
          />
        </HeaderItem>
        <HeaderItem title="Est. Earning" value="$3,465,000">
          <MaterialIcons
            name="attach-money"
            size={20}
            color="#32A4FC"
            style={[styles.headerIcon, { backgroundColor: "#E9F4FF" }]}
          />
        </HeaderItem>
        <HeaderItem title="Waitlist Value" value="$3,465">
          <MaterialCommunityIcons
            name="clipboard-text-outline"
            size={20}
            color="#E62828"
            style={[styles.headerIcon, { backgroundColor: "#FEEFEF" }]}
          />
        </HeaderItem>
      </ScrollView>
      <FlatList
        data={getGeneralInfo(centers)}
        renderItem={Item}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={Header}
        style={styles.body}
        showsVerticalScrollIndicator={false}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={false}
        height={600}
        onOpen={() => setModal(true)}
        onClose={() => setModal(false)}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(45, 31, 33, 0.52)",
          },
          container: {
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            paddingHorizontal: 20,
          },
        }}
      >
        <View style={styles.modalHeader}>
          <AntDesign
            style={styles.modalClose}
            name="close"
            size={24}
            color="black"
            onPress={() => refRBSheet.current.close()}
          />
          <Text style={styles.modalTitle}>Select Centre</Text>
        </View>
        <Searchbar
          placeholder="Search Centre name"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.modalSearch}
        />
        <FlatList
          data={centers}
          ListHeaderComponent={modalHeader}
          renderItem={modalItem}
          keyExtractor={(modalItem) => modalItem.id}
          showsVerticalScrollIndicator={false}
        />
      </RBSheet>
    </View>
  );
};
export default Centres;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 136,
    backgroundColor: "#DB147F",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 52,
    paddingHorizontal: 20,
  },
  headerSelect: {
    flexDirection: "row",
  },
  headerTitle: {
    color: "white",
    fontSize: 14,
    paddingHorizontal: 10,
  },
  headerIcon: {
    padding: 7,
    borderRadius: 20,
  },
  modalHeader: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F5",
  },
  modalClose: {
    position: "absolute",
    top: 20,
    left: 0,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalSearch: {
    marginVertical: 12,
    borderRadius: 8,
    elevation: 0,
    borderColor: "#D3CCCC",
    borderWidth: 1,
  },
  modalItem: {
    padding: 8,
    marginBottom: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  body: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  itemBox: {
    marginTop: 16,
  },
  itemImg: {
    height: 80,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  itemBody: {
    padding: 12,
    height: 152,
    justifyContent: "space-between",
  },
  itemTitle: {
    fontWeight: "bold",
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemInfo: {
    flexDirection: "row",
    width: "48%",
    alignItems: "center",
  },
  itemText: {
    marginLeft: 6,
    backgroundColor: "#E9F4FF",
    color: "#32A4FC",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontWeight: "600",
  },
  itemPoint: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 4,
    fontWeight: "700",
    color: "white",
    backgroundColor: "#DB147F",
    zIndex: 10,
  },
  itemLogo: {
    position: "absolute",
    top: 40,
    right: 10,
    zIndex: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBarFilter: {
    width: 42,
    height: 42,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  slider: {
    paddingLeft: 20,
    marginTop: -41,
  },
  sliderItem: {
    borderRadius: 12,
    width: 178,
    marginRight: 12,
    paddingLeft: 12,
    justifyContent: "center",
    backgroundColor: "white",
  },
  sliderItemOpen: {
    borderRadius: 12,
    marginRight: 8,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal:12
  },
  sliderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  sliderTitle: {
    marginLeft: 8,
  },
  sliderValue: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700",
  },
  sliderValueOpen: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    marginLeft: 8,
  },
});
