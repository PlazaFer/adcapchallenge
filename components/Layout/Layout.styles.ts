import Colors from "@/constants/Colors";
import { StyleSheet, useColorScheme } from "react-native";

const makeStyles = () => {
  const colorScheme = useColorScheme() || "light";
  return StyleSheet.create({
    flex: {
      flex: 1,
      backgroundColor: Colors[colorScheme].background,
    },
  });
};

export default makeStyles;
