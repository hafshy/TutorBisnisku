import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLinkS } from './SidebarElements';
import { animateScroll as scroll } from 'react-scroll';

const Sidebar = ({isOpen, toggle, home}) => {
    let apply;
    if (home) {
        apply = <SidebarLinkS to="apply" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>How We Can Help</SidebarLinkS>;
    } else {
        apply = <SidebarLink to="/" onClick={toggle}>How We Can Help</SidebarLink>;
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                    <SidebarLink to="/" onClick={toggleHome}>Home</SidebarLink>
                        {apply}
                        <SidebarLink to="partners" onClick={toggle}>
                            Partners
                        </SidebarLink>
                        <SidebarLink to="faq" onClick={toggle}>
                            FAQ
                        </SidebarLink>
                        <SidebarLink to="video" onClick={toggle}>
                            Video
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
