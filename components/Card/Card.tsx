import { View, Text, Image, Pressable } from "react-native";
import makeStyles from "./Card.styles";
import EmptyHeartIcon from "@/assets/icons/EmptyHeartIcon";
import FillHeartIcon from "@/assets/icons/FillHeartIcon";
import { Strings } from "@/utils/Strings";
import { getFavorite } from "@/storage/Storage";
import { useCallback, useEffect, useState } from "react";
import { ArtworkResponse } from "@/types/Artwork";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import EmptyImageIcon from "@/assets/icons/EmptyImageIcon";
import ArtworkImage from "../ArtworkImage/ArtworkImage";

type CardProps = {
  item: ArtworkResponse;
  handleToggleFavorite: (item: ArtworkResponse) => Promise<void>;
};

const Card = ({ item, handleToggleFavorite }: CardProps) => {
  const router = useRouter();
  const styles = makeStyles();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const title = Strings.cutString(item.title);

  const getIsFavorite = async () => {
    const isFavoriteStorage = await getFavorite(item.id);
    setIsFavorite(isFavoriteStorage);
  };

  useFocusEffect(
    useCallback(() => {
      getIsFavorite();
    }, [])
  );

  const hanldeFavorite = async () => {
    try {
      await handleToggleFavorite(item);
      setIsFavorite((prev) => !prev);
    } catch (error) {
      console.log("Error al setear como favorito", error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/artworkDetail",
            params: { id: item.id },
          })
        }
        style={styles.imageContainer}
      >
        <ArtworkImage
          image_id={item.image_id}
          alt_image_ids={item.alt_image_ids}
          thumbnail={item.thumbnail}          
        />
      </Pressable>
      <View style={styles.textContainer}>
        <Text>{title}</Text>
        <Pressable style={styles.heartContainer} onPress={hanldeFavorite}>
          {isFavorite ? <FillHeartIcon /> : <EmptyHeartIcon />}
        </Pressable>
      </View>
    </View>
  );
};

export default Card;
