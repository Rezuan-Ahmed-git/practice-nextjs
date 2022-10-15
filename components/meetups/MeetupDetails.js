import React from 'react';
import classes from './MeetupDetails.module.css';

const MeetupDetails = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </div>
  );
};

export default MeetupDetails;
