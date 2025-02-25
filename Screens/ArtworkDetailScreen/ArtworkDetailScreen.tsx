import React, { useCallback, useEffect, useState, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import useArtworksApi from "@/hooks/useArtworksApi";
import { useFocusEffect } from "@react-navigation/native";
import RenderHTML from "react-native-render-html";
import Colors from "@/constants/Colors";
import ArtworkImage from "@/components/ArtworkImage/ArtworkImage";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import BackButton from "@/components/BackButton/BackButton";
import { getFavorite, toggleFavorite } from "@/storage/Storage";
import makeStyles from "./ArtworkDetailScreen.styles";

const ArtworkDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { isLoading, fetchArtworkById, dataDetail } = useArtworksApi();
  const styles = makeStyles();
  const [isFavorite, setIsFavorite] = useState(false);
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme() ?? "light";

  const getIsFavorite = useCallback(async () => {
    if (dataDetail) {
      const isFavoriteStorage = await getFavorite(dataDetail.id);
      setIsFavorite(isFavoriteStorage);
    }
  }, [dataDetail]);

  const handleFavorite = useCallback(async () => {
    if (dataDetail) {
      await toggleFavorite(dataDetail);
      setIsFavorite((prev) => !prev);
    }
  }, [dataDetail]);

  useFocusEffect(
    useCallback(() => {
      fetchArtworkById(id as string);
    }, [id])
  );

  useEffect(() => {
    getIsFavorite();
  }, [dataDetail, getIsFavorite]);

  const { content, isHtml } = useMemo(() => {
    if (dataDetail?.description)
      return { content: dataDetail.description, isHtml: true };
    if (dataDetail?.short_description)
      return { content: dataDetail.short_description, isHtml: false };
    return { content: "", isHtml: false };
  }, [dataDetail]);

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors[colorScheme].black} />
      ) : (
        <>
          <ArtworkImage
            image_id={dataDetail?.image_id}
            alt_image_ids={dataDetail?.alt_image_ids}
            thumbnail={dataDetail?.thumbnail}
            isBig
          />
          <BackButton onPress={() => router.back()} />
          <View style={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{dataDetail?.title}</Text>
              <FavoriteButton
                isFavorite={isFavorite}
                onPress={handleFavorite}
              />
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.subtitle}>
                {dataDetail?.artist_display} | {dataDetail?.place_of_origin}
              </Text>
              {dataDetail?.category_titles?.map((category, index) => (
                <View key={index} style={styles.categoryBadge}>
                  <Text style={styles.category}>{category}</Text>
                </View>
              ))}
            </View>
            {content && (
              <>
                {isHtml ? (
                  <RenderHTML
                    contentWidth={width - 20}
                    source={{ html: content }}
                  />
                ) : (
                  <Text style={styles.description}>{content}</Text>
                )}
              </>
            )}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default ArtworkDetailScreen;
