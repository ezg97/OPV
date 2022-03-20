import React, { useState } from "react";
import './footer.css';
import { Link} from 'react-router-dom';

import Media_Links from '../mod.media_links/media_links';
import Toggle from '../mod.toggle/toggle';


function Footer(props) {
    const [email, setEmail] = useState('');
    const [emailToggle, setEmailToggle] = useState(false);

    const subscriberAdded = (e) => {
        e.preventDefault();
        console.log('Email -> ', email);

        props.addSubscriberData(email);
        setEmail('');
    }

    const emailUpdate = (e) => {
        setEmail(e.target.value);
    }   

    const emailList = () => {
        setEmailToggle(!emailToggle);
    }

    const showEmails = () => {
        let str = '';
        props.subscriberData.map(obj => {
            str += obj.email + ' ';
            return null;
        });
        console.log('show emails: ', str)
        return str;
    }

    return (
        <>
            <div class="spacer"></div>
            
            <footer>
                <form onSubmit={subscriberAdded}>
                    <label htmlFor='email'>Newsletter & Giveaways</label>
                    <div id="email_list">
                        {(props.admin)
                            ? (emailToggle)
                                ? <p>{showEmails()}</p>
                                : <a href="#email_list" onClick={emailList}>View subscriber emails</a>
                            : <>
                                <input type="email" name='email' value={email} onChange={emailUpdate} placeholder='Enter your email'/>
                                <input type='submit' value='Subscribe'/>
                            </>
                        }
                        
                    </div>
                </form>
                <Media_Links />
                <Toggle />
            </footer>
        </>
          );
}

export default Footer;