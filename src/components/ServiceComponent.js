import React, { useContext, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { getDetail } from "../../services";
import CenterContext from "../context/CenterContext";

const ServiceComponent = ({ centerId }) => {
  const [services, setServices] = useState([]);
  const {centers:[centers,setCenters]} = useContext(CenterContext);
  useEffect(async () => {
    setServices(getDetail(centers, centerId, "services"));
  }, []);
  const renderItem = ({ item }) => {
    const { icon, title, description, time, price } = item;
    return (
      <View style={styles.service}>
        <View style={styles.body}>
          <Image source={{ uri: icon }} style={styles.icon} />
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{time}</Text>
            <Text style={styles.description}>
              <Text style={styles.price}>${price}.00</Text> / {description}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {services.length ? (
        <FlatList
          data={services}
          renderItem={renderItem}
          keyExtractor={(item, index) => `services${index}`}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text> Loading</Text>
      )}
    </View>
  );
};

export default ServiceComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  service: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  body: {
    flexDirection: "row",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    elevation: 1,
    backgroundColor: "white",
    borderRadius: 10,
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    color: "black",
    paddingVertical: 4,
    fontWeight: "bold",
    fontSize: 14,
  },
  subtitle: {
    color: "black",
    paddingVertical: 4,
  },
  description: {
    color: "black",
    paddingVertical: 4,
  },
  icon: {
    height: 48,
    width: 48,
  },
  price: {
    fontWeight: "bold",
  },
});
