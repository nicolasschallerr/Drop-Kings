import ItemCount from "./ItemCount";

function ItemDetail({ detail }) {
  return (
    <div>
      {detail ? (
        <>
          <img
            src={detail.thumbnail}
            alt={detail.title}
            style={{ width: 300, height: 300 }}
          />
          <h1>{detail.title}</h1>
          <p>{detail.description}</p>
          <h3>Precio: ${detail.price}</h3>
        </>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
      <ItemCount detail={detail} />
    </div>
  );
}

export default ItemDetail;
