import React from 'react';
import { Button } from '../ButtonElement';
import { FAQContainer, LeftContainer, FAQH1, FAQP, MiddleContainer, RightContainer, TitleWrapper, ContentWrapper } from './FAQElements';


const FAQSection = () => {
    return (
        <FAQContainer>
            <LeftContainer>
                <TitleWrapper>
                    <FAQH1>WHO ARE WE</FAQH1>
                </TitleWrapper>
                <ContentWrapper>
                    <FAQP>We are a business that runs Business consultants and education.</FAQP>
                </ContentWrapper>
            </LeftContainer>
            <MiddleContainer>
                <TitleWrapper>
                    <FAQH1>WHAT IS OUR SERVICE</FAQH1>
                </TitleWrapper>
                <ContentWrapper>
                    <FAQP>We provide business consultancy and education with affordable price and friendly vibes for students.</FAQP>
                </ContentWrapper>
            </MiddleContainer>
            <RightContainer>
                <TitleWrapper>
                    <FAQH1>HOW CAN YOU APPLY</FAQH1>
                </TitleWrapper>
                <ContentWrapper>
                    <FAQP>You are half there by coming to this website! Apply to start your journey with us!</FAQP>
                    <Button href=" https://wa.me/message/WHABKDM5XLPME1" target="_blank" aria-label="Whatsapp">
                        Apply
                    </Button>
                </ContentWrapper>
            </RightContainer>
        </FAQContainer>
    )
}

export default FAQSection
