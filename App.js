import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { RootStack } from './app/navigationPage/router';
// import store from './mobx/store.js';
import Login from './app/page/Login';

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      // <Provider>
      //   <RootStack />
      // </Provider>
      <Login />
    );
  }
}


// import MyScreen from './app/page/HomeScreen';

// export default class HelloWorldApp extends Component {
//   render() {
//     return <MyScreen />;
//   }
// }
