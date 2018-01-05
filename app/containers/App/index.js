/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';

import Auth from 'containers/Auth';
import Users from 'containers/Users';
import Tags from 'containers/Tags';

import HeaderComp from 'containers/HeaderComp';

// import steem from 'steem';

// https://api.asksteem.com/search?q=steem

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // componentDidMount() {
  //   console.log(steem)
  //   steem.api.getDiscussionsByTrending({ tag: 'indonesia', limit: 20 }, function(err, result) {
  //     console.log(err, result);
  //   });
  // }

  render() {
    return (
      <div>
        {/*  */}
        <Auth />
        <Users />
        <Tags />
        {/*  */}
        <HeaderComp />
        {/*  */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/@:username" component={ProfilePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
