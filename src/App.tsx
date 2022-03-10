import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Mainpage from "./pages/MainPage";
// import CountryDetailsPage from "./pages/CountryDetailsPage";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const CountryDetailsPage = React.lazy(
  () => import("./pages/CountryDetailsPage")
);

//apollo client setup
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/:code" element={<CountryDetailsPage />} />
        </Routes>
      </Suspense>
    </ApolloProvider>
  );
}

export default App;
