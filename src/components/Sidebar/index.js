import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLinkS } from './SidebarElements';
import { animateScroll as scroll } from 'react-scroll';

const Sidebar = ({isOpen, toggle}) => {
    
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
                        <SidebarLink to="/online-class" onClick={toggle}>Online Class</SidebarLink>
                        <SidebarLink to="/consult" onClick={toggle}>Consult</SidebarLink>
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
