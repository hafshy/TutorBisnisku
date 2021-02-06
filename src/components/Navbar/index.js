import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinksS, NavLogoImg } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../images/logo.png';


const Navbar = ({toggle, home}) => {
    let apply;
    if (home) {
        apply = <NavLinksS to="apply" smooth={true} duration={500} spy={true} exact='true' offset={-80}>How We Can Help</NavLinksS>;
    } else {
        apply = <NavLinks to="/">How We Can Help</NavLinks>;
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <NavLogoImg src={Logo}/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/" onClick={toggleHome}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            {apply}
                        </NavItem>
                        <NavItem>
                            <NavLinks to="partners">Partners</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="faq">FAQ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="events">Events</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
