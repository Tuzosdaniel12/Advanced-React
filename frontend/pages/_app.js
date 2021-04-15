/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import NProgress from 'nprogress';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </ApolloProvider>
);

MyApp.getInitialsProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialsProps) {
    pageProps = await Component.getInitialsProps(ctx);
  }

  pageProps.query = ctx.query;
};

export default withData(MyApp);
