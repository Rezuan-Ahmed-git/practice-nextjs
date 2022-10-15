import { useRouter } from 'next/router';
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const ListItem = styled.li`
  list-style: none;
  width: 350px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 20px;
  margin: 5px;
  padding: 15px 20px;
`;

const Images = styled.img`
  width: 200px;
  border-radius: 10px;
`;

const MeetupItem = ({ id, image, title, address, description }) => {
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push('/' + id);
  };
  return (
    <ListItem>
      <Images src={image} alt="card-img" />
      <h2>Title: {title}</h2>
      <p> {address} </p>
      <p> {description} </p>
      <Button onClick={showDetailsHandler}>Show details</Button>
    </ListItem>
  );
};

export default MeetupItem;
