import React from 'react';
import {EventsContainer, EventsH1, EventsWrapper, EventsCard, EventsPicture, EventsContent, EventsH2, EventsDate, EventsLocation, EventsDescription } from './EventsElements';

const EventsSection = () => {
    return (
        <EventsContainer>
            <EventsH1>Upcoming Events</EventsH1>
            <EventsWrapper>
                <EventsCard>
                    <EventsPicture/>
                    <EventsContent>
                        <EventsH2></EventsH2>
                        <EventsDate></EventsDate>
                        <EventsLocation></EventsLocation>
                        <EventsDescription></EventsDescription>
                    </EventsContent>
                </EventsCard>
            </EventsWrapper>
        </EventsContainer>
    )
}

export default EventsSection
