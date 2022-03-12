import React, { useState, useEffect } from 'react';
import lodash from 'lodash';

import './login.css';

function Login(props) {
    const username = "oilsporvida_60";

    useEffect(() => {
        console.log('login mounted');
        if (props.loggedIn) {
            console.log('logged in');
            if (localStorage.getItem('username') === null || localStorage.getItem('username') === '') {
                localStorage.setItem('username', username);
                props.setRender(!props.render);
            }
        } else {
            if (localStorage.getItem('username') === username) {
                console.log('logged out');
                localStorage.setItem('username', '');
                props.setRender(!props.render);
            }
        }
    });

    return null;
}

export default Login;


