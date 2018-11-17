import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'mobx-react';
import DevTools from "mobx-react-devtools";
import { initializeStore } from '../store'
import '../static/app.css'
import Nav from '../Components/Nav';


class MyMobxApp extends App {
  static async getInitialProps(appContext) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const mobxStore = initializeStore();
    // Provide the store to getInitialProps of pages
    appContext.ctx.mobxStore = mobxStore;

    let appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
      initialMobxState: mobxStore
    };
  }

  constructor(props) {
    super(props);
    this.mobxStore = initializeStore(props.initialMobxState)
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <div className="root_container">
          <Nav />

          <Provider store={this.mobxStore}>
            <Component {...pageProps}/>
          </Provider>

        </div>
      </Container>
    );
  }
}
export default MyMobxApp