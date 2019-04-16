import Amplify from 'aws-amplify'

export default class AuthManager {
  constructor(identityPoolId, region, userPoolId, userPoolWebClientId) {
    this.auth = Amplify.configure({
      Auth: {identityPoolId, region, userPoolId, userPoolWebClientId}
    });
  }

  async signUp(username, password) {
    const result = await Amplify.Auth.signUp({
      username,
      password,
      attributes: {},
    });

    return result;
  }

  async signIn(username, password) {
    const result = await Amplify.Auth.signIn(username, password)

    return result;
  }
}
