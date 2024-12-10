import { colors } from "@/styles/colors";
import { ActivityIndicator } from "react-native";
import { s } from "./styles";

export function Loading() {
  return <ActivityIndicator color={colors.green.base} style={s.container} />;
}
