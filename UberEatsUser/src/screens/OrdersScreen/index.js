import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import OrderListItem from "../../components/OrderListItem";
import orders from "../../../assets/data/orders.json";

const OrdersScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrdersScreen;
