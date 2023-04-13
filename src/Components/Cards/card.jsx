import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPage() {
  return (
    <Card>
      <Card.Img variant="top" src="https://coolwallpapers.me/picsup/5457902-michael-jackson-wallpapers.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPage;