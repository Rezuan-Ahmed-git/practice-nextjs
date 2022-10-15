import React from 'react';
import styled from 'styled-components';
import MeetupItem from './MeetupItem';

const Section = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MeetupList = (props) => {
  return (
    <div>
      <Section>
        {props.meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))}
      </Section>
    </div>
  );
};

export default MeetupList;
