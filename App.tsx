import { StatusBar } from "expo-status-bar";
import { Text, View, useColorScheme } from "react-native";
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import ThemedText from "./components/ThemedText";
import { styles } from "./Stylesheet";

export default function App() {
  const colorScheme = useColorScheme();
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  return (
    <SafeAreaProvider>
      <View style={[styles.container, themeContainerStyle]}>
        <MainView />
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

function MainView() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.center, { paddingTop: insets.top }]}>
        <ThemedText style={[styles.heading]}>
          Luhad Internal Codename: Swag Bucks{"\n"}
          <Text style={{ color: "red" }}>EXPERIMENTAL VERSION</Text>
        </ThemedText>
      </View>
      <View style={[styles.body]}>
        <ThemedText style={[{ fontSize: 25, fontWeight: "bold" }]}>
          {"<SomethingGoesHere/>"}
        </ThemedText>
      </View>
    </>
  );
}
