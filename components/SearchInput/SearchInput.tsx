import React from "react";
import { View, TextInput } from "react-native";
import { SearchInputProps } from "./SearchInput.types";
import SearchIcon from "@/assets/icons/SearchIcon";
import makeStyles from "./SearchInput.styles";

const SearchInput: React.FC<SearchInputProps> = ({
  iconSize = 20,
  iconColor = "#888",
  style,
  onSearch,
  ...props
}) => {
  const styles = makeStyles();

  const handleChangeText = (text: string) => {
    if (text.length > 3) {
      onSearch(text);
    }

    if(!text.length){
      onSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <SearchIcon />
      </View>
      <TextInput
        placeholder="Buscar..."
        style={[styles.input, style]}
        placeholderTextColor="#BABABA"
        selectionColor="#BABABA"
        onChangeText={handleChangeText}
        {...props}
      />
    </View>
  );
};

export default SearchInput;
