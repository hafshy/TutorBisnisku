import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialLogoImg, FooterLinkSocmed } from './FooterElements';
import Logo from '../../images/logo.png';

const Footer = () => {

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">Home</FooterLink>
                                <FooterLink to="/">How We Can Help</FooterLink>
                                <FooterLink to="partners">Partners</FooterLink>
                                <FooterLink to="faq">FAQ</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLinkSocmed href=" https://wa.me/message/WHABKDM5XLPME1" target="_blank" aria-label="Whatsapp">Whatsapp</FooterLinkSocmed>
                                <FooterLinkSocmed href="https://instagram.com/tutorbisnisku.id" target="_blank" aria-label="Instagram">Instagram</FooterLinkSocmed>
                                <FooterLinkSocmed to="/">Linkedin</FooterLinkSocmed>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            <SocialLogoImg src={Logo} />
                        </SocialLogo>
                        <WebsiteRights>
                            TutorBisnisku © {new Date().getFullYear()} All rights reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href=" https://wa.me/message/WHABKDM5XLPME1" target="_blank" aria-label="Whatsapp">
                                <FaWhatsapp />
                            </SocialIconLink>
                            <SocialIconLink href="https://instagram.com/tutorbisnisku.id" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>                        
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
