import { Text, View, Button } from "react-native";
import { client } from "../utils/pocketbase";
import { stylesheet } from "../utils/stylesheet";
import { useEffect, useState } from "react";
import { AuthProviderInfo } from "pocketbase";
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://fzrgfqvfjbalwvolbanv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6cmdmcXZmamJhbHd2b2xiYW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMjgzMTcsImV4cCI6MTk5MzcwNDMxN30.KYCFlVtWLYh0JxlLSkuAyi_TJjpQ7Du_aUg4KxMOH7U')


async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
  console.log(data);
}


import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/b21d43a38d00da4a94e6',
};

export default function App() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: 'b21d43a38d00da4a94e6',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'exp://localhost:19000/--/*'
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      console.log(code)
 
    };
  }, [response]);

  return (
      <Button
    disabled={!request}
    title="Login making this longger bc I am toolazy to figure out the safearea thing and I can't test if the button works :)"
    onPress={() => {
      promptAsync();
    }}
  />
   
  );
}

