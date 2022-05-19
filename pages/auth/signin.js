import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header"
// Browser
function signIn({ providers }) {
  return (
    <>
    <Header />

    <div className="flex flex-col items-center justify-center min-h-screen py-2 mt-56 px-14 text-center">

      <img src="https://links.papareact.com/ocw" className="w-80" alt="" />

      <p>Educational Purposes</p>

      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/'})}
              className="p-3 bg-blue-500 rounded-lg text-white"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>



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
