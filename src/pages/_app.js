import "@/styles/globals.css";


import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://landinggraphql.onrender.com/graphql", // Reemplaza con tu endpoint de GraphQL
  cache: new InMemoryCache(),
});


export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <div style={{
      fontFamily: "Oswald, sans-serif",
      fontOpticalSizing: "auto",
      fontWeight: 400, // Puedes cambiarlo por 300, 500, 700, etc.
      fontStyle: "normal"
    }}>
      <Component {...pageProps} />
    </div>
    </ApolloProvider>
  );
}