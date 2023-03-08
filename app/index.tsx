import { Text, View, Button, Platform } from "react-native";
import { client } from "../utils/pocketbase";
import { startAsync, makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { openURL } from "expo-linking";
import { stylesheet } from "../utils/stylesheet";
import { useEffect, useState } from "react";
import { AuthProviderInfo } from "pocketbase";
import { setupURLPolyfill } from "react-native-url-polyfill";
import { createClient } from "@supabase/supabase-js";

if (Platform.OS !== "web") {
  setupURLPolyfill();
}

const supabase = createClient(
  "https://fzrgfqvfjbalwvolbanv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6cmdmcXZmamJhbHd2b2xiYW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMjgzMTcsImV4cCI6MTk5MzcwNDMxN30.KYCFlVtWLYh0JxlLSkuAyi_TJjpQ7Du_aUg4KxMOH7U"
);

export default function App() {
  const signInWithGithub = async () => {
    const returnUrl = makeRedirectUri({ useProxy: false });
    console.log(returnUrl);
    const provider = "github";
    const authUrl = `https://fzrgfqvfjbalwvolbanv.supabase.co/auth/v1/authorize?provider=${provider}&redirect_to=${returnUrl}`;

    // const response = await startAsync({ authUrl, returnUrl });
    const response = await openURL(authUrl);

    console.log(response);
    // if (!response || !response.params?.refresh_token) {
    //   return;
    // }

    // await supabase.auth.signIn({
    //   refreshToken: response.params.refresh_token,
    // });
  };

  return (
    <Button
      title="Login making this longger bc I am toolazy to figure out the safearea thing and I can't test if the button works :)"
      onPress={() => {
        signInWithGithub();
      }}
    />
  );
}
