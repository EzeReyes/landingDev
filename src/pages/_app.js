import "@/styles/globals.css";
import client from "../../config/apollo";

import { ApolloProvider } from "@apollo/client";



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