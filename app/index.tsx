import { Text, View } from "react-native";
import { client } from "../utils/pocketbase";
import { stylesheet } from "../utils/stylesheet";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<string>();
  useEffect(() => {
    (async () => {
      try {
        const results = await client.collection("users").listAuthMethods();
        setData(JSON.stringify(results.authProviders));
      } catch (err) {
        console.log(err);
        setData(err);
      }
    })();

    return () => {};
  }, []);
  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.main}>
        <Text style={stylesheet.title}>Hello World</Text>
        <Text style={stylesheet.subtitle}>{client.baseUrl}</Text>
      </View>
    </View>
  );
}
