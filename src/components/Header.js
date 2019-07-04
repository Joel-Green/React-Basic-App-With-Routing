import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../styles/styles.css'

export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div>
                    {/* Instead Of Anchor we use Link tags */}
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Middle Component One</Link>
                </div>
                <div>
                    <Link to='/middle2' style={{ textDecoration: 'none', color: 'white' }}>Middle Component Two</Link>
                </div>

            </div>
        )
    }
}

export default Header
