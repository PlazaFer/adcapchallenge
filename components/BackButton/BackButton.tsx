import React from "react";
import { Pressable } from "react-native";
import ArrowBackIcon from "@/assets/icons/ArrowBackIcon";
import makeStyles from "./BackButton.styles";

interface BackButtonProps {
  onPress: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  const styles = makeStyles();
  return (
    <Pressable onPress={onPress} style={styles.backButton}>
      <ArrowBackIcon />
    </Pressable>
  );
};

export default BackButton;
