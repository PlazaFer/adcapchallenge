import { StyleSheet, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const makeStyles = () => {
    const { top } = useSafeAreaInsets();
    const colorsScheme = useColorScheme() ?? 'light'

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white200      
    },
    image: {
      width: "100%",
      height: 400,
      resizeMode: "cover",
      position: 'relative'
    },
    backButton: {
        position: 'absolute',
        left: 10,
        top: top + 20,
        width: 35,
        height: 35,
        backgroundColor: Colors[colorsScheme].black,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
      padding: 16,
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 8,
      paddingVertical: 4,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: Colors[colorsScheme].black,
      marginRight: 30,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: "semibold",
      color: Colors[colorsScheme].black,
      flexShrink: 1,
    },
    descriptionContainer: {
      gap: 10,
      marginTop: 10,
      marginBottom: 20,
    },
    author: {
      fontSize: 18,
      fontStyle: "italic",
      color: Colors[colorsScheme].black,
      marginBottom: 12,
    },
    description: {
      fontSize: 16,
      color: Colors[colorsScheme].black,
      marginBottom: 16,
    },
    categoriesContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    category: {
      fontSize: 14,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    categoryBadge: {
        borderRadius: 24,
        backgroundColor: Colors[colorsScheme].pink,
        alignSelf: "flex-start",
      },
  });
};

export default makeStyles;
