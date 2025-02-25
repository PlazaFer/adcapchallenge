import { TextInputProps } from "react-native";

export interface SearchInputProps extends TextInputProps {
  iconSize?: number;
  iconColor?: string;
  onSearch: (query: string) => void;
}