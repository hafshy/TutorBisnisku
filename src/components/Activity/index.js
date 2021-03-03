import React from 'react';
import { ActivityContainer, ActivityH1, ActivityWrapper, ActivityCard, ActivityIcon, ActivityH2, ActivityP } from './ActivityElements';
import { useHistory } from 'react-router-dom';
import Icon2 from '../../images/workshop.png';
import Icon3 from '../../images/consult.png';

const Activity = () => {
    const history = useHistory();

    return (
        <ActivityContainer id="apply">
            <ActivityH1>What We Do</ActivityH1>
            <ActivityWrapper>
                <ActivityCard>
                    <ActivityIcon src={Icon2} />
                    <ActivityH2>Online Class</ActivityH2>
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
