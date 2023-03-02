import { StatusBar } from "expo-status-bar";
import { Text, View, useColorScheme, Button } from "react-native";
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import ThemedText from "./components/ThemedText";
import { styles } from "./Stylesheet";
import PocketBase, { Record } from "pocketbase";
import { useEffect, useState } from "react";

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
  const [data, setData] = useState<Record>(null);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const pb = new PocketBase(process.env.POCKETBASE_URL);
    (async () => {
      try {
        setData(
          await pb.collection("display").getFirstListItem('component="body"')
        );
      } catch (error) {
        console.log(error);
        console.log(error.isAbort);
      }
    })();
    return () => {};
  }, [reload]);
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
          {data ? data.value : "Loading..."}
        </ThemedText>
        <View>
          <Button onPress={() => setReload(!reload)} title="Reload" />
        </View>
      </View>
    </>
  );
}
