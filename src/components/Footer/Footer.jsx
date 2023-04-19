import React from 'react'

import { FooterCon } from './Footer'

import logo from '../../assets/Logo.png'

const Footer = () => {
    return (
        <FooterCon>
            <img src={logo} alt="Logo" />

            <div className="copyright">© 2023 Clario Tech DMCC <br /> All rights reserved.</div>
        </FooterCon>
    )
}

export default Footer