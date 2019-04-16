import AuthManager from './auth-manager'

const manager = new AuthManager(
  process.env.AUTH_IDENTITY_POOL_ID,
  process.env.REGION,
  process.env.USER_POOL_ID,
  process.env.USER_POOL_WEB_CLIENT_ID,
);

(async function () {
  const password = 'QWErty123!'

  try {
    let result = await manager.signUp('my-name-2', password);
    console.log(result)
  } catch (e) {
    console.log(e)
  }

  try {
    let result = await manager.signIn('my-name-2', password);
    console.log(result)
  } catch (e) {
    console.log(e)
  }
})();
