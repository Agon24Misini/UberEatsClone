import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
  row: {
    flex: 1,
  },
});

export default styles;
