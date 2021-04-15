import React from "react";
import "./App.css";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';
//import ExchangeRatePage from './ExchangeRatePage';
import VisitsPage from './VisitsPage';

function App() {
  return (
      <ApolloProvider client={client}>
        <div className="App">
          <VisitsPage />
        </div>
      </ApolloProvider>
  );
}

export default App;
