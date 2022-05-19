import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

// Browser
function signIn({ providers }) {
  return (
    <>
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button onClick={() => SignIntoProvider(provider.id)}>
          Sign in with {provider.name}
        </button>
      </div>
    ))}
    </>
  );
}

// Middleware -- on server -- SSR
export async function getServerSideProps() {
  // Gets providers from pages/api/auth/[...nextauth].js
  const providers = await getProviders();

  // Pass it to the client
  return {
    props: {
      providers
    }
  }
}

export default signIn
