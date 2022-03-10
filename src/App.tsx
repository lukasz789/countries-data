import React from "react";
import { Route, Routes } from "react-router-dom";

import Mainpage from "./pages/MainPage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//apollo client setup
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:code" element={<CountryDetailsPage />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
