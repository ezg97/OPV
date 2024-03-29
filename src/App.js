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

import Sheet from './sheet';

// Importing Library Fragments
import ScrollToTop from './components/lib/scroll_to_top.js';
import UnderConstruction from './components/mod.under_construction/under_construction';

// Importing CSS
import './App.css';
import { stringify } from "json5";


// Function
function App() {
  pressed.start();

  const [secretCode] = useState(['a','i','m','r']);
  const [logoutAttempt, setLogoutAttempt] = useState(false);

  const [enableLogin, setEnableLogin] = useState(localStorage.getItem('username') === 'oilsporvida_60');
  const [render, setRender] = useState(false);

  const [initalRender, setinitialRender] = useState(false);
  const [rows, updateRows] = useState('');
  const [postData, setPostData] = useState('');
  const [subscriberData, setSubscriberData] = useState([]);

  const sheet = new Sheet();

  const sortPostByDate = (newPostData) => {
    console.log('sorting', newPostData, 'rows', rows);

    setPostData(newPostData.sort((a,b) => {
      return new Date(b.date) - new Date(a.date);
    }));
  }


  const getRows = () => {
    console.log('get called');
    sheet.load()
      .then(test => {
        console.log('test');
        console.log(sheet)
        return sheet.getRows()
      }).then(results => {
        console.log('returned again');
        console.log('results: ', results);

        console.log(results[0].sku);
        console.log(results[0].post_id);
        console.log(results[0].title);
        console.log(results[0].body);
        console.log(results[0].image);
        if (!rows) {
          updateRows(results);
          console.log('debug - results: ', results);
          let newPostData = [];
          let newSubscriberData = [];
          results.map(obj => {
            console.log('debug - subscriber id: ', obj.subscriber_id);
            if (obj.post_id) {
              newPostData.push(obj);
            } else if (obj.subscriber_id) {
              newSubscriberData.push(obj);
            }
          });
          setPostData(newPostData);
          setSubscriberData(newSubscriberData);
          sortPostByDate(newPostData);
        }
        // if (!initalRender) {
        //   updateRows(results);
        //   setinitialRender(true);
        // }
      });
    // const results = await sheet.getRows();

    // console.log(results[0].sku);
    // console.log(results[0].post_id);
    // console.log(results[0].title);
    // console.log(results[0].body);
    // console.log(results[0].image);
  }

  const addPostData = (newRow) => {
    console.log('adding row', newRow);
    if (newRow) {
      sheet.addRows(newRow);
    }
  }

  const addSubscriberData = (newSubscriber) => {
    console.log('adding sub', newSubscriber);
    console.log('debug - subscriberData: ', subscriberData);

    // If no subscriber exists yet
    if (subscriberData.length === 0) {
      console.log('default entry');
      let insertData = [
        {
          sku: rows.length,
          subscriber_id: 1,
          email: newSubscriber
        }
      ];
      sheet.addRows(insertData)
      setSubscriberData(insertData);
    } else {
      console.log('readl entry');
      let insertFlag = true;
      subscriberData.map((obj) => {
        if (obj.email === newSubscriber) {
          insertFlag = false;
        }
        return null;
      });
      if (insertFlag) {
        let insertData = 
        {
          sku: rows.length + 1,
          subscriber_id: Number(subscriberData[subscriberData.length - 1].subscriber_id) + 1,
          email: newSubscriber
        };
        sheet.addRows([insertData]);
        insertData = subscriberData.push(insertData);
        setSubscriberData(insertData);
      }
    }

    // let condition = subscriberData.indexOf(newSubscriber);

    // let string = subscriberData.join('');
    // string = string.includes(newSubscriber);

    // condition = condition === -1;
    // console.log('string: ', string);
    // if (!string) {
    //   console.log('subscriberData - ',subscriberData)
    //   subscriberData.push(newSubscriber);
    //   setSubscriberData(subscriberData);
    // }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      // if the login has already been enabled, exit because this function has already completed it's purpose
      if (enableLogin) {
        if (pressed.every('o', 'u', 't')) {
          console.log('out has been pressed');
          setEnableLogin(false);
          setLogoutAttempt(true);
        }
      }

      // if the code is being pressed, then enable login
      if (!enableLogin) {
        if (pressed.every(secretCode[0], secretCode[1], secretCode[2], secretCode[3])) {
          console.log('irma has been pressed');
          setEnableLogin(true);
          setLogoutAttempt(false);
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    getRows();


    // Get all the rows on page load
    // if (!initalRender) {
    //   getRows();
    //   setinitialRender(true);
    // }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  });

  const post = () => {

    return null;
  }




  return (
    <main className='App' id='app'>
      <div>
            {console.log('app.js enableLogin -> ', enableLogin)}
            <LogIn loggedIn={enableLogin} logoutAttempt={logoutAttempt} setRender={setRender} render={render}/>

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
                  render={(props) => <PostListing admin={enableLogin} postData={postData} updateRows={updateRows}/>}
                />
                
                <Route exact path={['/admin_post']} component = {AdminPost} />

                <Route path={['/posts/:post_id','/post/post_id']}
                 render={(props) => <Post admin={enableLogin} postData={postData} updateRows={updateRows} addPostData={addPostData}/>}

                />

                {/* <Route exact path={['/sales', '/sale']} component = {About} /> */}
                <Route path={['/fetch_post/:post_id','/fetch_post/post_id']}  
                // component={FetchPost}/>
                 render={(props) => <FetchPost admin={enableLogin}/>}
                />
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
            {/* <Route exact path={['/posts','/post', '/sales', '/sale', '/recipes','recipe']} 
              render={(props) => <Pagination admin={enableLogin}/>}
            /> */}
      </div>
       {/* <Route path='/' component = {} /> */}
      {/* 3 - Footer: Every Page */}
      <Route path='/' 
      render={(props) => <Footer admin={enableLogin} subscriberData={subscriberData} addSubscriberData={addSubscriberData}/>}
      />
    </main>
  );
}

export default App;
