import Card from 'react-bootstrap/Card';

export const CardSkill = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg" />
        <Card.Body>
          <Card.Title>nome da skill - Level: 1</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ab eligendi quidem reiciendis eos mollitia quisquam laudantium sint.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
