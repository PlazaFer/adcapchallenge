import Colors from "@/constants/Colors";
import { StyleSheet, useColorScheme } from "react-native";

const makeStyles = () => {
  const colorScheme = useColorScheme() || "light";

  return StyleSheet.create({
    container: {
      overflow: "hidden",
      marginTop: 24
    },
    imageContainer: {
      overflow: "hidden",
    },
    image: {
      width: 180,
      height: 180,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    textContainer: {
      flex: 1,
      backgroundColor: Colors[colorScheme].white200,
      borderBottomEndRadius: 16,
      borderBottomLeftRadius: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 16,
    },
    heartContainer: {
      marginTop: 3,
    },
  });
};

export default makeStyles;