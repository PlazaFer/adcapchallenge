import React from "react";
import { Image, useColorScheme } from "react-native";
import styles from "./ArtworkImage.styles";
import EmptyImageIcon from "@/assets/icons/EmptyImageIcon";
import { Thumbnail } from "@/types/Artwork";
import {
  CONFIG_URL_IMAGE_BIG,
  CONFIG_URL_IMAGE_SMALL,
  CONFIG_URL_PREFIX,
} from "@/constants/apiParameters";
import Colors from "@/constants/Colors";

interface ArtworkImageProps {
  image_id?: string;
  alt_image_ids?: string[];
  thumbnail?: Thumbnail;
  isBig?: boolean;
}

const ArtworkImage: React.FC<ArtworkImageProps> = ({
  image_id,
  alt_image_ids,
  thumbnail,
  isBig = false,
}) => {
  const colorsScheme = useColorScheme() || "light";
  const getImageUri = (): string | null => {
    if (image_id) {
      return `${CONFIG_URL_PREFIX}/${image_id}/${
        isBig ? CONFIG_URL_IMAGE_BIG : CONFIG_URL_IMAGE_SMALL
      }`;
    }
    if (alt_image_ids?.length) {
      return `${CONFIG_URL_PREFIX}/${alt_image_ids[0]}/${
        isBig ? CONFIG_URL_IMAGE_BIG : CONFIG_URL_IMAGE_SMALL
      }`;
    }
    if (thumbnail?.lqip) {
      return thumbnail.lqip;
    }
    return null;
  };

  const uri = getImageUri();

  if (uri) {
    return (
      <Image
        source={{ uri }}
        style={isBig ? styles.imageBig : styles.imageSmall}
        width={5}
        height={5}
        resizeMode="cover"
      />
    );
  }

  return <EmptyImageIcon color={Colors[colorsScheme].tint} />;
};

export default ArtworkImage;
