import React from "react";
import { Pressable } from "react-native";
import EmptyHeartIcon from "@/assets/icons/EmptyHeartIcon";
import FillHeartIcon from "@/assets/icons/FillHeartIcon";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onPress: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      {isFavorite ? <FillHeartIcon /> : <EmptyHeartIcon />}
    </Pressable>
  );
};

export default FavoriteButton;