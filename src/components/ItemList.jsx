import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Item from "./Item";
import { Spinner } from "react-bootstrap";

function ItemList({ items, loading }) {
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center mt-5">
        <h3>No hay productos disponibles</h3>
      </div>
    );
  }

  return (
    <Container className="mt-3 mb-3">
      <Row xs={1} md={2} lg={3} className="g-4 align-items-stretch">
        {items.map((item) => (
          <div className="col" key={item.id}>
            <Item item={item} />
            {item.stock === 0 && (
              <div className="text-center mt-2">
                <span className="text-danger">Producto sin stock</span>
              </div>
            )}
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
