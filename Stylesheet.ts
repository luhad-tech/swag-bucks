import { StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Styles {
  center: ViewStyle;
  container: ViewStyle;
  lightContainer: ViewStyle;
  darkContainer: ViewStyle;
  lightThemeText: TextStyle;
  darkThemeText: TextStyle;
  heading: TextStyle;
  body: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  center: {
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: "white",
  },
  darkContainer: {
    backgroundColor: "black",
  },
  lightThemeText: {
    color: "black",
  },
  darkThemeText: {
    color: "white",
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
