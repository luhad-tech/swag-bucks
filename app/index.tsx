import { Text, View, Button } from "react-native";
import { client } from "../utils/pocketbase";
import { stylesheet } from "../utils/stylesheet";
import { useEffect, useState } from "react";
import { AuthProviderInfo } from "pocketbase";

const loginOAuth = async (provider: AuthProviderInfo) => {
  try {
    const res = await client
      .collection("users")
      .authWithOAuth2(
        provider.name,
        provider.codeChallenge,
        provider.codeVerifier,
        provider.authUrl
      );

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export default function Page() {
  const [data, setData] = useState<AuthProviderInfo[]>();
  useEffect(() => {
    (async () => {
      try {
        const results = await client.collection("users").listAuthMethods();
        setData(results.authProviders);
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
        <View style={stylesheet.subtitle}>
          {data ? (
            data.map((provider) => {
              const name =
                provider.name.charAt(0).toUpperCase() + provider.name.slice(1);
              return (
                <Button
                  onPress={() => loginOAuth(provider)}
                  key={name}
                  title={name}
                />
              );
            })
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    </View>
  );
}
