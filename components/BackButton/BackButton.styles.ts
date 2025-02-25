import Colors from "@/constants/Colors";
import { StyleSheet, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const makeStyles = () => {
  const colorsScheme = useColorScheme() || "light";
  const { top } = useSafeAreaInsets();
  return StyleSheet.create({
    backButton: {
      position: "absolute",
      left: 15,
      top: top + 15,
      width: 35,
      height: 35,
      backgroundColor: Colors[colorsScheme].black,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  });
};

export default makeStyles;
