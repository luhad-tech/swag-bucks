import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <MainView />
    </SafeAreaProvider>
  );
}

function MainView() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={[styles.heading]}>
        Luhad Internal Codename: Swag Bucks{"\n"}
        <Text style={{ color: "red" }}>EXPERIMENTAL VERSION</Text>
      </Text>
      <View style={[styles.body]}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{"<SomethingGoesHere/>"}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
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
