import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, useColorScheme } from "react-native";
import { ReactNode } from "react";
import Colors from "@/constants/Colors";
import makeStyles from "./Layout.styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const styles = makeStyles();
  return (
    <SafeAreaView style={styles.flex} edges={["top"]}>
      <View style={styles.flex}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
