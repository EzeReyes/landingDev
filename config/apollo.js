import { ApolloClient, createHttpLink , InMemoryCache } from "@apollo/client";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
    uri: "https://landinggraphql.onrender.com", // Reemplaza con tu endpoint de GraphQL
});

const authLink = setContext((_, { headers }) => {

    // Leer el storage
    const token = localStorage.getItem('token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat( httpLink )
});

export default client;