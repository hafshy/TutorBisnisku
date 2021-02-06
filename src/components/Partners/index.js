import React from 'react';
import { PartnersContainer, PartnersH1, PartnersWrapper, MemberCard, MemberPhoto, MemberContent, MemberH2, MemberP } from './PartnersElements';
import Wolo from '../../images/wolo.png';
import Nabila from '../../images/nabila.png';
import Chelsea from '../../images/chelsea.png';
import Kemal from '../../images/kemal.jpg';

const PartnersSection = () => {
    return (
        <PartnersContainer>
            <PartnersH1>Our Team</PartnersH1>
            <PartnersWrapper>
                <MemberCard>
                    <MemberPhoto src={Wolo}/>
                    <MemberContent>
                        <MemberH2>Wolo</MemberH2>
                        <MemberP>I described myself as a mind map because it is simple, balanced, and contains many things. Outside, I am a person who chills, humble, and really likes to laugh, but inside I am a thinker, competent in academics and in non-academic, brave, firm, well time management skills, and have leadership characteristics.</MemberP>
                    </MemberContent>
                </MemberCard>
                <MemberCard>
                    <MemberPhoto src={Nabila}/>
                    <MemberContent>
                        <MemberH2>Nabila Susilo</MemberH2>
                        <MemberP>Nabila has started some business and she always focuses in marketing. She is always the one in charge on determining the marketing strategy especially marketing segmentation and channeling. She is also a marketing intern in a digital-based start-up called Hear Me.</MemberP>
                    </MemberContent>
                </MemberCard>
                <MemberCard>
                    <MemberPhoto src={Chelsea}/>
                    <MemberContent>
                        <MemberH2>Chelsea</MemberH2>
                        <MemberP>Easy going and hardworking person. Skilled in human resources field.  Chelsea is now active in KMM human capital and also in building business “IniPack” and “Toko Laksana Toples”.</MemberP>
                    </MemberContent>
                </MemberCard>
                <MemberCard>
                    <MemberPhoto src={Kemal}/>
                    <MemberContent>
                        <MemberH2>Tarreq Kemal Al Idrus</MemberH2>
                        <MemberP>Kemal is a CEO and Co-Founder of Akademis.id, an education technology startup with more than 200.000 users in just one years. Not only create Akademis.id, Kemal also Co - Founder and CPO Skill Up, education startup for young generation to upgrade their skills with more than 5000 followers. With all of his works, Kemal has achieved more than 20 Awards in national until International prestigious competition.</MemberP>
                    </MemberContent>
                </MemberCard>
            </PartnersWrapper>
        </PartnersContainer>
    )
}

export default PartnersSection
