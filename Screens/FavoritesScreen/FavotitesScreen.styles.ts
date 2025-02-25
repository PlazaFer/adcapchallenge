import Colors from "@/constants/Colors";
import { StyleSheet, useColorScheme } from "react-native";

const makeStyles = () => {
    const colorScheme = useColorScheme() || 'light';
    return StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
      },
      loaderContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
      },
      title: {
        color: Colors[colorScheme].tint,
        fontSize: 18,
        marginVertical: 12
      },
    });
}

export default makeStyles;
