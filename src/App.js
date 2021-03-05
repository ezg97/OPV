// Importing React Features
import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

// Importing Modules
import Header from './components/mod.header/header.js';
import Nav_Bar from './components/mod.nav_bar/nav_bar.js';
import Home from './components/mod.home/home.js';
import Post_Listing from './components/mod.posts/mod.view_posts/users/post_listing/post_listing.js';
import Post from './components/mod.posts/mod.view_posts/users/post/post.js';
import About from './components/mod.about/about.js';
import Pagination from './components/mod.pagination/pagination.js';

import Footer from './components/mod.footer/footer.js';

// Importing Library Fragments
import ScrollToTop from './components/lib/scroll_to_top.js';

// Importing CSS
import './App.css';

// Function
function App() {
  return (
    <main className='App' id='app'>
          
      {/* 1 - Header: Every Page */}
      <Route path='/' component = {Header} />
      <Route path='/' component = {Nav_Bar} />

      {/* 2 - Body: pages below */}
      <React.Fragment>
        <ScrollToTop/>
        <Switch>
          <Route exact path={['/','/home']} component = {Home} />
          <Route exact path={['/posts','/post']} component = {Post_Listing} />
          <Route path={['/posts/:post_id','/post/post_id']} component = {Post} />
          <Route exact path={['/sales', '/sale']} component = {About} />
          <Route exact path={['/recipes','recipe']} component = {About} />
          <Route exact path={['/kits','/kit']} component = {About} />
          <Route exact path='/about' component = {About} />
          <Route path='/' component = {Home} />
        </Switch>
      </React.Fragment>

      {/* 2.5 - Pagination: specific pages */}
      <Route exact path={['/posts','/post', '/sales', '/sale', '/recipes','recipe']} component = {Pagination}/>
      {/* 3 - Footer: Every Page */}
      <Route path='/' component = {Footer} />

    </main>
  );
}

export default App;
