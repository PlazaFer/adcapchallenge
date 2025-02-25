import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator, Text, View } from "react-native";
import Layout from "@/components/Layout/Layout";
import ArtworkList from "@/components/ArtworkList/ArtworkList";
import { ArtworkResponse } from "@/types/Artwork";
import { getAllFavorites, toggleFavorite } from "@/storage/Storage";
import makeStyles from "./FavotitesScreen.styles";

const FavoritesScreen = () => {
  const styles = makeStyles();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [favoritesArtworks, setFavoritesArtworks] = useState<ArtworkResponse[]>(
    []
  );

  const getFavorites = async () => {
    setIsLoading(true);
    try {
      const favorites = await getAllFavorites();
      setFavoritesArtworks(favorites);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getFavorites();
    }, [])
  );

  const handleToggleFavorite = async (element: ArtworkResponse) => {
    await toggleFavorite(element);
    getFavorites();
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Favoritos</Text>
        {isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <ArtworkList
            artworks={favoritesArtworks}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </View>
    </Layout>
  );
};

export default FavoritesScreen;
