import { Text, View } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const onMinus = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.seperator} />

      <View style={styles.row}>
        <AntDesign
          name='minuscircleo'
          size={60}
          color='black'
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name='pluscircleo'
          size={60}
          color='black'
          onPress={onPlus}
        />
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} {quantity > 1 ? "items" : "item"} to basket &#8226; $
          {getTotal()}
        </Text>
      </View>
    </View>
  );
};

export default DishDetailsScreen;
