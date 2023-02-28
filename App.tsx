import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  ViewStyle,
  TextStyle,
} from "react-native";
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";

export default function App() {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  return (
    <SafeAreaProvider>
      <View style={[styles.container, themeContainerStyle]}>
        <Text style={[themeTextStyle]}>
          <MainView/>
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

function MainView() {
  const insets = useSafeAreaInsets();
  return (
    // <View style={[styles.container, { paddingTop: insets.top }, themeContainerStyle]}>
    //   <Text style={[styles.heading, themeTextStyle]}>
    //     Luhad Internal Codename: Swag Bucks{"\n"}
    //     <Text style={{ color: "red" }}>EXPERIMENTAL VERSION</Text>
    //   </Text>
    //   <View style={[styles.body]}>
    //     <Text style={[{ fontSize: 25, fontWeight: "bold" }, themeTextStyle]}>
    //       {"<SomethingGoesHere/>"}
    //     </Text>
    //   </View>
    // </View>
    <View style={[styles.center, { paddingTop: insets.top }]}>
      <Text style={[styles.heading]}>
        Luhad Internal Codename: Swag Bucks{"\n"}
        <Text style={{ color: "red" }}>EXPERIMENTAL VERSION</Text>
      </Text>
    </View>
  );
}

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

const styles = StyleSheet.create<Styles>({
  center: {
    alignItems: "center"
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
  },
});
