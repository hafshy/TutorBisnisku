import React from 'react';
import { ActivityContainer, ActivityH1, ActivityWrapper, ActivityCard, ActivityIcon, ActivityH2, ActivityP } from './ActivityElements';
import { useHistory } from 'react-router-dom';

const Activity = () => {
    const history = useHistory();

    return (
        <ActivityContainer id="apply">
            <ActivityH1>What We Do</ActivityH1>
            <ActivityWrapper>
                <ActivityCard onClick={() => history.push("/online-class")}>
                    <ActivityIcon src={`${process.env.PUBLIC_URL}/images/workshop.png`} onClick={() => history.push("/online-class")} />
                    <ActivityH2>Online Class</ActivityH2>
                    <ActivityP>Online live class plus practical sessions from business experts to increase your knowledge about business.</ActivityP>
                </ActivityCard>
                <ActivityCard>
                    <ActivityIcon src={`${process.env.PUBLIC_URL}/images/consult.png`} onClick={() => history.push("/consult")} />
                    <ActivityH2>Consulting</ActivityH2>
                    <ActivityP>We can help you to realize your business idea.</ActivityP>
                </ActivityCard>
            </ActivityWrapper>
        </ActivityContainer>
    )
}

export default Activity
