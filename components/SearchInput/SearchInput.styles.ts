import Colors from "@/constants/Colors";
import { StyleSheet, useColorScheme } from "react-native";

const makeStyles = () => {
  const colorScheme = useColorScheme() || "light";

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 36,
      paddingHorizontal: 18,
      paddingVertical: 5,
      backgroundColor: Colors[colorScheme].white200,
      marginHorizontal: 24
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: Colors[colorScheme].black,
      paddingVertical: 16,
    },
  });
};

export default makeStyles;
