import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'

import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjla7qgp402cp01cizmi1qybr/master'
})

const testQuery = gql`
  {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

client
  .query({
    query: testQuery
  })
  .then(res => console.log(res))

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
