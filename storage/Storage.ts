import { ArtworkResponse } from "@/types/Artwork";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favorite_artworks";

export const saveFavorites = async (artworks: ArtworkResponse[]) => {
  try {
    const jsonValue = JSON.stringify(artworks);
    await AsyncStorage.setItem(FAVORITES_KEY, jsonValue);
  } catch (error) {
    console.error("Error al guardar favoritos:", error);
  }
};

export const getAllFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Error al obtener favoritos:", error);
    return [];
  }
};

export const getFavorite = async (id: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
    const parsedJSON = jsonValue ? JSON.parse(jsonValue) : [];
    return parsedJSON.some((item: ArtworkResponse) => item.id === id);
  } catch (error) {
    console.error("Error al obtener un favorito:", error, id);
    return [];
  }
};

export const toggleFavorite = async (artwork: ArtworkResponse) => {
  try {
    const favorites = await getAllFavorites();
    const isFavorite = favorites.some(
      (item: ArtworkResponse) => item.id === artwork.id
    );

    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter(
        (item: ArtworkResponse) => item.id !== artwork.id
      );
    } else {
      newFavorites = [...favorites, artwork];
    }

    await saveFavorites(newFavorites);
    return newFavorites;
  } catch (error) {
    console.error("Error al actualizar favoritos:", error);
    return [];
  }
};
