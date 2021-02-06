import React from 'react';
import { ActivityContainer, ActivityH1, ActivityWrapper, ActivityCard, ActivityIcon, ActivityH2, ActivityP } from './ActivityElements';
import Icon1 from '../../images/seminar.png';
import Icon2 from '../../images/workshop.png';
import Icon3 from '../../images/consult.png';

const Activity = () => {
    return (
        <ActivityContainer id="apply">
            <ActivityH1>What We Do</ActivityH1>
            <ActivityWrapper>
                <ActivityCard>
                    <ActivityIcon src={Icon1} />
                    <ActivityH2>Seminar</ActivityH2>
                    <ActivityP>Online live class from business experts for everyone who want to know about business.</ActivityP>
                </ActivityCard>
                <ActivityCard>
                    <ActivityIcon src={Icon2} />
                    <ActivityH2>Workshop</ActivityH2>
                    <ActivityP>Online live class plus practical sessions from business experts to increase your knowledge about business.</ActivityP>
                </ActivityCard>
                <ActivityCard>
                    <ActivityIcon src={Icon3} />
                    <ActivityH2>Consulting</ActivityH2>
                    <ActivityP>We can help you to realize your business idea.</ActivityP>
                </ActivityCard>
            </ActivityWrapper>
        </ActivityContainer>
    )
}

export default Activity
