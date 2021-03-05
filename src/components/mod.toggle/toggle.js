import React, { useState, useEffect } from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import './toggle.css';



function Toggle(props) {

    const [color, setColor] = useState('white');

    function onToggleClick () {
        console.log('tttt');
        document.documentElement.classList.toggle("dark-mode");
        console.log('curr class', document.documentElement.classList);
        let root = document.querySelector(':root');
        if (color === 'white') {
            setColor('#DCDCDC');
            root.style.setProperty('--light_background', '#DCDCDC');
        }
        else {
            setColor('white');
            root.style.setProperty('--light_background', 'white');
        }
        // ele += ' dark-mode';
        // document.getElementById('app').classList = 'asdf';
    }

    return (
        <div className="toggle">
            <label class="switch">
                <input type="checkbox" onChange={onToggleClick}/>
                <span class="slider round"></span>
            </label>
        </div>
    );
}

export default Toggle;


