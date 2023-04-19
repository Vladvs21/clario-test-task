import React from 'react'

import { HeaderCon, StickyHeaderCon } from './Header'

import logo from '../../assets/Logo.png'

const Header = ({scrollToPrice, isSticky}) => {

    // if (isSticky) return (
    //     <StickyHeaderCon>
    //         <img src={logo} alt="Logo" />
    //         <button className="btn" onClick={scrollToPrice}>Protect me now</button>
    //     </StickyHeaderCon>
    // )

    return (
        <>
            <HeaderCon>
                <img src={logo} alt="Logo" />
            </HeaderCon>
            <StickyHeaderCon className={isSticky && 'visible'}>
                <img src={logo} alt="Logo" />
                <button className="btn" onClick={scrollToPrice}>Protect me now</button>
            </StickyHeaderCon>
        </>
    )
}

export default Header