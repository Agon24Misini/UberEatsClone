import { Image, Text, View } from "react-native";
import styles from "./style";

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{restaurant.title}</Text>
      <Text style={styles.subtitle}>
        ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
        {restaurant.maxDeliveryTime} minutes
      </Text>
    </View>
  );
};

export default RestaurantItem;
