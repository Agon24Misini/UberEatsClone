import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    marginRight: 10,
    paddingVertical: 2,
    borderRadius: 3,
  },
  price: {
    marginLeft: "auto",
  },
  orderName: {
    fontWeight: "600",
  },
});

export default styles;
