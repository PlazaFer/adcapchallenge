import React, { useCallback } from "react";
import Card from "@/components/Card/Card";
import styles from "./ArtworkList.styles";
import { ActivityIndicator, FlatList, View } from "react-native";
import { ArtworkResponse } from "@/types/Artwork";

interface ArtworkListProps {
  artworks: ArtworkResponse[];
  isLoading?: boolean;
  onToggleFavorite: (item: ArtworkResponse) => Promise<void>;
  onEndReached?: () => void;
  refreshing?: boolean;
  onRefresh?: () => void;
}

const ArtworkList: React.FC<ArtworkListProps> = ({
  artworks,
  isLoading,
  onToggleFavorite,
  onEndReached,
  refreshing,
  onRefresh,
}) => {
  const renderItem = useCallback(
    ({ item }: { item: ArtworkResponse }) => (
      <Card key={item.id} item={item} handleToggleFavorite={onToggleFavorite} />
    ),
    [onToggleFavorite]
  );

  return (
    <FlatList
      data={artworks}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={styles.grid}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      extraData={artworks}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isLoading ? (
          <View style={styles.activityLoaderScroll}>
            <ActivityIndicator />
          </View>
        ) : null
      }
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

export default ArtworkList;
