import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavLinksS,
    NavLogoImg,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";

const Navbar = ({ toggle, home }) => {
    const history = useHistory();

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <NavLogoImg src={`${process.env.PUBLIC_URL}/images/logo.png`} />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/" onClick={toggleHome}>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinksS onClick={toggleDropdown}>
                                How We Can Help
                            </NavLinksS>
                            <div
                                className={
                                    open ? "dropdown active" : "dropdown"
                                }
                            >
                                <div className="dropdown-content" onClick={() => history.push("/online-class")}>
                                    <a>Online Class</a>
                                </div>
                                <div
                                    onClick={() => history.push("/consult")}
                                    className="dropdown-content"
                                >
                                    <a>Consult</a>
                                </div>
                            </div>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="partners">Partners</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="faq">FAQ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="video">Video</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
