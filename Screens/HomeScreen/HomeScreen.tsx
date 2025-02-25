import React, { useCallback, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View } from "react-native";
import Layout from "@/components/Layout/Layout";
import SearchInput from "@/components/SearchInput/SearchInput";
import ArtworkList from "@/components/ArtworkList/ArtworkList";
import { ArtworkResponse } from "@/types/Artwork";
import { toggleFavorite } from "@/storage/Storage";
import useArtworksApi from "@/hooks/useArtworksApi";
import styles from "./HomeScreen.styles";

const HomeScreen = () => {
  const {
    data: artWorks,
    isLoading,
    fetchArtworks,
    searchArtworks,
    hasMore,
    query,
    resetPagination,
  } = useArtworksApi();
  const isFetched = useRef(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      if (!isFetched.current && query.length === 0) {
        fetchArtworks(true);
        isFetched.current = true;
      }
    }, [query])
  );

  const handleToggleFavorite = async (item: ArtworkResponse) => {
    await toggleFavorite(item);
  };

  const handleSearch = useCallback(
    (searchText: string) => {
      if (searchText.length > 3) {
        searchArtworks(searchText, true);
      } else if (!searchText.length) {
        fetchArtworks(true);
      }
    },
    [searchArtworks, fetchArtworks]
  );

  const loadMore = () => {
    if (!isLoading && hasMore) {
      query.length ? searchArtworks(query) : fetchArtworks();
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    resetPagination();
    await fetchArtworks(true);
    setRefreshing(false);
  };

  return (
    <Layout>
      <View style={styles.container}>
        <SearchInput onSearch={handleSearch} />
        <ArtworkList
          artworks={artWorks}
          isLoading={isLoading}
          onToggleFavorite={handleToggleFavorite}
          onEndReached={loadMore}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
    </Layout>
  );
};

export default HomeScreen;
