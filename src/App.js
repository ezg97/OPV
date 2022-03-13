// Importing React Features
import React, { useState, useEffect, useRef } from "react";
import {Route, Link, Switch} from 'react-router-dom';
import pressed from "pressed";


// Importing Modules
import Header from './components/mod.header/header.js';
import NavBar from './components/mod.nav_bar/nav_bar.js';
import Home from './components/mod.home/home.js';
import PostListing from './components/mod.posts/mod.view_posts/users/post_listing/post_listing.js';
import Post from './components/mod.posts/mod.view_posts/users/post/post.js';
import About from './components/mod.about/about.js';
import Pagination from './components/mod.pagination/pagination.js';
import FetchPost from './components/FetchPost/FetchPost.js';
import LogIn from './components/mod.login/login'
// admin
import AdminPost from './components/mod.posts/mod.view_posts/admin/admin_post_listing/admin_post_listing.js';



import Footer from './components/mod.footer/footer.js';

// Importing Library Fragments
import ScrollToTop from './components/lib/scroll_to_top.js';
import UnderConstruction from './components/mod.under_construction/under_construction';

// Importing CSS
import './App.css';


// Function
function App() {
  pressed.start();

  const [secretCode] = useState(['a','i','m','r']);
  const [enableLogin, setEnableLogin] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // if the login has already been enabled, exit because this function has already completed it's purpose
      if (enableLogin) {
        if (pressed.every('o', 'u', 't')) {
          console.log('out has been pressed');
          setEnableLogin(false);
        }
      }

      // if the code is being pressed, then enable login
      if (!enableLogin) {
        if (pressed.every(secretCode[0], secretCode[1], secretCode[2], secretCode[3])) {
          console.log('irma has been pressed');
          setEnableLogin(true)
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  });


  return (
    <main className='App' id='app'>
      <div>
            {console.log('app.js enableLogin -> ', enableLogin)}
            <LogIn loggedIn={enableLogin} setRender={setRender} render={render}/>

            {/* 1 - Header: Every Page */}
            <Route path='/'
              render={(props) => <Header admin={enableLogin}/>}
            />
            <Route path='/' 
              render={(props) => <NavBar admin={enableLogin}/>}
              />

            {/* 2 - Body: pages below */}
            <React.Fragment>
              <ScrollToTop/>
              <Switch>
                <Route exact path={['/','/home']} 
                  render={(props) => <Home admin={enableLogin}/>}
              />
                {/* {(1 === 1)
                ?
                  <>
                    <Route exact path = {['/posts','/post','/sales','/sale','/recipes','/recipe','/kits', '/kit', '/about']} component = {UnderConstruction} />
                  </>
                :
                  <> */}
                <Route exact path={['/posts','/post']} 
                // component={PostListing}/>
                  render={(props) => <PostListing admin={enableLogin}/>}
                />
                
                <Route exact path={['/admin_post']} component = {AdminPost} />

                <Route path={['/posts/:post_id','/post/post_id']}
                 render={(props) => <Post admin={enableLogin}/>}

                />

                {/* <Route exact path={['/sales', '/sale']} component = {About} /> */}
                <Route path={['/fetch_post/:post_id','/fetch_post/post_id']}  component={FetchPost}/>
                {/* render={(props) => <FetchPost admin={enableLogin}/>}
                /> */}
                {/* <Route exact path={['/recipes','recipe']} component = {About} />
                <Route exact path={['/kits','/kit']} component = {About} />
                <Route exact path='/about' component = {About} /> */}
                  {/* </>
                } */}

                {/* <Route exact path={['/log_in', '/sign_in']} component = {LogIn} /> */}

                <Route path='/' 
                render={(props) => <Home admin={enableLogin}/>}
                />
              </Switch>
            </React.Fragment>

            {/* 2.5 - Pagination: specific pages */}
            <Route exact path={['/posts','/post', '/sales', '/sale', '/recipes','recipe']} 
              render={(props) => <Pagination admin={enableLogin}/>}
            />
      </div>
       {/* <Route path='/' component = {} /> */}
      {/* 3 - Footer: Every Page */}
      <Route path='/' 
      render={(props) => <Footer admin={enableLogin}/>}
      />
    </main>
  );
}

export default App;
