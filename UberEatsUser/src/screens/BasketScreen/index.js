import { FlatList, Text, View } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import BasketDishItem from "../../components/BasketDishItem";

const restaurant = restaurants[0];

const BasketScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.items}>Your Items</Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />
      <View style={styles.seperator} />
      <View style={styles.button}>
        <Text style={styles.buttonText}>Create order</Text>
      </View>
    </View>
  );
};

export default BasketScreen;
