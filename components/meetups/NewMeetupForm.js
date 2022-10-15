import React, { useState } from 'react';
import styled from 'styled-components';

const Fields = styled.input`
  box-sizing: border-box;
  width: 50%;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 10px;
  background-color: #fff;
  color: black;
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 50%;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 10px;
  background-color: #fff;
  color: black;
`;

const Button = styled.button`
  background-color: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const INIT_DATA = {
  title: '',
  image: '',
  address: '',
  description: '',
};

const NewMeetupForm = (props) => {
  const [formValues, setFormValues] = useState({ ...INIT_DATA });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log(formValues);

  function submitHandler(event) {
    event.preventDefault();

    props.onAddMeetup(formValues);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Meetup Title</label>
          <Fields
            value={formValues.title}
            type="text"
            name="title"
            required
            id="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Meetup Image</label>
          <Fields
            value={formValues.image}
            type="text"
            name="image"
            required
            id="image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Fields
            value={formValues.address}
            type="text"
            name="address"
            required
            id="address"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Meetup Title</label>
          <TextArea
            value={formValues.description}
            rows="5"
            required
            name="description"
            id="description"
            onChange={handleChange}
          ></TextArea>
        </div>
        <div>
          <Button>Add Meetup</Button>
        </div>
      </form>
    </div>
  );
};

export default NewMeetupForm;
