import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageSmall: {
    width: 180,
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  imageBig: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    position: "relative",
  },
});

export default styles;
