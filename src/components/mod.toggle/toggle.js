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
            root.style.setProperty('--light_background', '#E8E8E8');
            root.style.setProperty('--nav_bar_border', '#1A1A1A');
            root.style.setProperty('--text_main_color', 'white');
            root.style.setProperty('--white_opacity', 'rgba(0,0,0,.85)');
            root.style.setProperty('--card_background', '#D3D3D3')

        }
        else {
            setColor('white');
            root.style.setProperty('--light_background', '#F5F5F5');
            root.style.setProperty('--nav_bar_border', '#E5E5E5');
            root.style.setProperty('--text_main_color', '#333333');
            root.style.setProperty('--white_opacity', 'rgba(255,255,255,.85)');
            root.style.setProperty('--card_background', 'white')
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


