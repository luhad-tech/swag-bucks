import * as React from 'react';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
import PocketBase, { Record } from "pocketbase";
const pb = new PocketBase(process.env.POCKETBASE_URL);

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/5603b23f22a6a4a28e62',
};

export default function App() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '5603b23f22a6a4a28e62',
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
      pb.collection('users').authWithOAuth2(
        "github",
        code,
        // pass optional user create data
        {
            emailVisibility: false,
        }
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
