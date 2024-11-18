import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <Col>
      <Card className="h-100" style={{ opacity: item.stock < 0 ? 0.5 : 1 }}>
        <Card.Img variant="top" src={item.thumbnail} className="b-100" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.category}</Card.Text>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary" as={Link} to={`/item/${item.id}`}>
            ver mas
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
