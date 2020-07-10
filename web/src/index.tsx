import { ThemeProvider } from '@material-ui/core';
import { Routes } from '@web/constants';
import '@web/global/root.css';
import { Home } from '@web/pages';
import theme from '@web/theme';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { configureApolloClient } from '@web/graphql';
import Config from '@web/config';
import { Footer } from '@web/layout';

const config = new Config(process.env);
const client = configureApolloClient(config);

function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path={Routes.HOME} component={Home} />
          </Switch>
          <Route component={Footer} />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
