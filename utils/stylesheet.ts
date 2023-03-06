import { StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  main: ViewStyle;
  title: TextStyle;
  subtitle: ViewStyle;
}

export const stylesheet = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
