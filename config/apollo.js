import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context"; // ✅ Usa esto

const httpLink = createHttpLink({
    uri: "https://landinggraphql.onrender.com/graphql", 
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
        },
    };
});

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
});

export default client;
